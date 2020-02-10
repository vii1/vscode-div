parser grammar DIVParser;

options {
    tokenVocab = DIVLexer;
}

file: compilerOptions? declProgram declImport* declConst? declGlobal?
    ;

compilerOptions: COMPILER_OPTIONS ( COMMA | Identifier (ASSIGN constant) )* SEMICOLON;

declProgram: (PROGRAM | SETUP_PROGRAM) Identifier SEMICOLON (SEMICOLON|COMMA)*;

declImport: IMPORT (StringLiteral|Identifier) SEMICOLON;

declConst: CONST SEMICOLON* (Identifier (ASSIGN) constant (SEMICOLON|COMMA)*)*;

declGlobal: GLOBAL SEMICOLON* declVariable*;

declVariable: STRUCT (pointerDecl SEMICOLON (SEMICOLON|COMMA)*
                     | Identifier structArraySizeDecl? structBody (ASSIGN initArray)? SEMICOLON*
                     )
            | STRING stringVarDecl (COMMA stringVarDecl)* SEMICOLON (SEMICOLON|COMMA)*
            | BYTE varDecl (COMMA varDecl)* SEMICOLON (SEMICOLON|COMMA)*
            | WORD varDecl (COMMA varDecl)* SEMICOLON (SEMICOLON|COMMA)*
            | INT? varDecl (SEMICOLON|COMMA)+
            ;

structArraySizeDecl: LBRACKET constant (COMMA constant (COMMA constant)?)? RBRACKET;

arraySizeDecl: LBRACKET (constant (COMMA constant (COMMA constant)?)?)? RBRACKET;

stringVarDecl:  pointerDecl
             |  Identifier (LBRACKET constant? RBRACKET)? (ASSIGN (StringLiteral | Identifier))? 
             ;

varDecl : pointerDecl
        | Identifier (arraySizeDecl (ASSIGN initArray)? | ASSIGN constant )?
        ;

pointerDecl : POINTER pointerSuffix (ASSIGN constant)? (COMMA POINTER? pointerSuffix (ASSIGN constant)?)*;

initArray: initElemArray? (COMMA initElemArray?)*;

initElemArray: constant | DUP LPAREN initElemArray? (COMMA initElemArray?)* RPAREN;

structBody: SEMICOLON* declVariable* END;

constant: exp;

exp: eAssign;

eAssign: eLogic (assignOp eLogic)?;

assignOp: ASSIGN|ADDASSIG|SUBASSIG|MULASSIG|DIVASSIG|MODASSIG
        | ANDASSIG|ORASSIG|XORASSIG|SHRASSIG|SHLASSIG
        ;

eLogic: eCompar (logicOp eCompar)*;

logicOp: OR | XOR | AND | HAT | AMP;

eCompar: eShift (comparOp eShift)*;

comparOp: EQ|NE|LT|GT|LE|GE;

eShift: eAdd ((RSHIFT|LSHIFT) eAdd)*;

eAdd: eMul ((ADD|SUB) eMul)*;

eMul: eUnary ((MUL|DIV|MOD) eUnary)*;

eUnary: (ADD|HAT|AMP|NEG|POINTER|OFFSET|NOT|SUB|MUL|INC|DEC)* eDot;

eDot: ePostUnary (DOT ePostUnary)*;

ePostUnary: eAtom (INC|DEC)?;

eAtom   :   LPAREN exp RPAREN
        |   LBRACKET exp RBRACKET
        |   ID
        |   Number
        |   StringLiteral
        |   TYPE Identifier
        |   SIZEOF LPAREN Identifier RPAREN
        // |   STRUCT POINTER pointerSuffix
        // |   STRING (POINTER pointerSuffix | Identifier (LBRACKET constant? RBRACKET)?)
        // |   BYTE (POINTER pointerSuffix | Identifier)
        // |   WORD (POINTER pointerSuffix | Identifier)
        // |   INT (POINTER pointerSuffix | Identifier)
        // |   POINTER pointerSuffix
        |   Identifier
            (   LPAREN (exp (COMMA exp)*)? RPAREN
            |   LBRACKET exp (COMMA exp (COMMA exp)?)? RBRACKET (DOT structAtom)?
            )?
        ;

structAtom: Identifier (LBRACKET exp (COMMA exp (COMMA exp)?)?)? (DOT structAtom)?;

pointerSuffix: Identifier (LBRACKET constant (COMMA constant (COMMA constant)?)? RBRACKET)? ;