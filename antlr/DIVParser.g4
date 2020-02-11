parser grammar DIVParser;

options {
    tokenVocab = DIVLexer;
}

file: compilerOptions? declProgram declImport* declConst? declGlobal? declLocal? declPrivate?
      body declProcess*
    ;

compilerOptions: COMPILER_OPTIONS ( COMMA | Identifier (ASSIGN constant) )* SEMICOLON;

declProgram: (PROGRAM | SETUP_PROGRAM) Identifier sc;

declImport: IMPORT (StringLiteral|Identifier) SEMICOLON;

declConst: CONST SEMICOLON* (Identifier (ASSIGN) constant (SEMICOLON|COMMA)*)*;

declGlobal: GLOBAL SEMICOLON* declVariable*;

declLocal: LOCAL SEMICOLON* declVariable*;

declPrivate: PRIVATE SEMICOLON* declVariable*;

declVariable: STRUCT (pointerDecl sc
                     | Identifier structArraySizeDecl? structBody (ASSIGN initArray)? SEMICOLON*
                     )
            | STRING stringVarDecl (COMMA stringVarDecl)* sc
            | BYTE varDecl (COMMA varDecl)* sc
            | WORD varDecl (COMMA varDecl)* sc
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

declProcess: (PROCESS | FUNCTION) Identifier LPAREN (parameter (COMMA parameter)*)? RPAREN SEMICOLON*
             declPrivate? body;

body: BEGIN statement* END SEMICOLON*;

statement   :   returnSt
            |   ifSt
            |   loopSt
            |   whileSt
            |   repeatSt
            |   fromSt
            |   forSt
            |   switchSt
            |   frameSt
            |   debugSt
            |   breakSt
            |   continueSt
            |   cloneSt
            |   SEMICOLON
            |   exp sc
            ;

returnSt: RETURN ( LPAREN exp? RPAREN)? sc;

ifSt: IF LPAREN cond RPAREN statement* (ELSE statement*)? END;

loopSt: LOOP statement* END;

whileSt: WHILE LPAREN cond RPAREN statement* END;

repeatSt: REPEAT statement* UNTIL LPAREN cond RPAREN;

fromSt: FROM Identifier ASSIGN constant TO constant (STEP constant)? sc statement* END;

forSt: FOR LPAREN (exp (COMMA exp)*)? SEMICOLON (exp (COMMA exp)*)? SEMICOLON (exp (COMMA exp)*)? RPAREN statement* END;

switchSt: SWITCH LPAREN cond RPAREN SEMICOLON*
            ( CASE exp (RANGE exp)? (COMMA exp (RANGE exp)?)* sc statement* END
            | DEFAULT sc statement* END
            )*
          END;

frameSt: FRAME ( LPAREN exp? RPAREN)? sc;

debugSt: DEBUG sc;

breakSt: BREAK sc;

continueSt: CONTINUE sc;

cloneSt: CLONE statement* END;

sc: SEMICOLON (SEMICOLON|COMMA)*;

cond: exp;

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
        |   Identifier
            (   LPAREN (exp (COMMA exp)*)? RPAREN
            |   LBRACKET exp (COMMA exp (COMMA exp)?)? RBRACKET (DOT structAtom)?
            )?
        ;

structAtom: Identifier (LBRACKET exp (COMMA exp (COMMA exp)?)?)? (DOT structAtom)?;

pointerSuffix: Identifier (LBRACKET constant (COMMA constant (COMMA constant)?)? RBRACKET)? ;

// movido desde eAtom, no entiendo por qué DIV usa el evaluador de expresiones para parsear los parámetros
parameter:  STRUCT POINTER pointerSuffix
         |  STRING (POINTER pointerSuffix | Identifier (LBRACKET constant? RBRACKET)?)
         |  BYTE (POINTER pointerSuffix | Identifier)
         |  WORD (POINTER pointerSuffix | Identifier)
         |  INT (POINTER pointerSuffix | Identifier)
         |  POINTER pointerSuffix
         |  Identifier
         ;
