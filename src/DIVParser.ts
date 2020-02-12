// Generated from antlr/DIVParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { DIVParserListener } from "./DIVParserListener";

export class DIVParser extends Parser {
	public static readonly PROGRAM = 1;
	public static readonly CONST = 2;
	public static readonly GLOBAL = 3;
	public static readonly LOCAL = 4;
	public static readonly BEGIN = 5;
	public static readonly END = 6;
	public static readonly PROCESS = 7;
	public static readonly PRIVATE = 8;
	public static readonly STRUCT = 9;
	public static readonly IMPORT = 10;
	public static readonly SETUP_PROGRAM = 11;
	public static readonly STRING = 12;
	public static readonly BYTE = 13;
	public static readonly WORD = 14;
	public static readonly INT = 15;
	public static readonly COMPILER_OPTIONS = 16;
	public static readonly FUNCTION = 17;
	public static readonly UNTIL = 18;
	public static readonly ELSE = 19;
	public static readonly RETURN = 20;
	public static readonly FROM = 21;
	public static readonly TO = 22;
	public static readonly STEP = 23;
	public static readonly IF = 24;
	public static readonly LOOP = 25;
	public static readonly WHILE = 26;
	public static readonly REPEAT = 27;
	public static readonly FOR = 28;
	public static readonly SWITCH = 29;
	public static readonly CASE = 30;
	public static readonly DEFAULT = 31;
	public static readonly FRAME = 32;
	public static readonly BREAK = 33;
	public static readonly CONTINUE = 34;
	public static readonly CLONE = 35;
	public static readonly DEBUG = 36;
	public static readonly SEMICOLON = 37;
	public static readonly COMMA = 38;
	public static readonly LBRACKET = 39;
	public static readonly RBRACKET = 40;
	public static readonly ASSIGN = 41;
	public static readonly DUP = 42;
	public static readonly LPAREN = 43;
	public static readonly RPAREN = 44;
	public static readonly RSHIFT = 45;
	public static readonly LSHIFT = 46;
	public static readonly OR = 47;
	public static readonly XOR = 48;
	public static readonly AND = 49;
	public static readonly HAT = 50;
	public static readonly AMP = 51;
	public static readonly NEG = 52;
	public static readonly POINTER = 53;
	public static readonly OFFSET = 54;
	public static readonly NOT = 55;
	public static readonly ADD = 56;
	public static readonly SUB = 57;
	public static readonly MUL = 58;
	public static readonly DIV = 59;
	public static readonly MOD = 60;
	public static readonly INC = 61;
	public static readonly DEC = 62;
	public static readonly EQ = 63;
	public static readonly NE = 64;
	public static readonly GT = 65;
	public static readonly LT = 66;
	public static readonly LE = 67;
	public static readonly GE = 68;
	public static readonly SIZEOF = 69;
	public static readonly TYPE = 70;
	public static readonly ID = 71;
	public static readonly DOT = 72;
	public static readonly RANGE = 73;
	public static readonly ADDASSIG = 74;
	public static readonly SUBASSIG = 75;
	public static readonly MULASSIG = 76;
	public static readonly DIVASSIG = 77;
	public static readonly MODASSIG = 78;
	public static readonly ANDASSIG = 79;
	public static readonly ORASSIG = 80;
	public static readonly XORASSIG = 81;
	public static readonly SHRASSIG = 82;
	public static readonly SHLASSIG = 83;
	public static readonly Number = 84;
	public static readonly StringLiteral = 85;
	public static readonly Identifier = 86;
	public static readonly CommentStart = 87;
	public static readonly LINE_COMMENT = 88;
	public static readonly WS = 89;
	public static readonly CommentNest = 90;
	public static readonly CommentEnd = 91;
	public static readonly Anything = 92;
	public static readonly RULE_file = 0;
	public static readonly RULE_compilerOptions = 1;
	public static readonly RULE_declProgram = 2;
	public static readonly RULE_declImport = 3;
	public static readonly RULE_declConst = 4;
	public static readonly RULE_declGlobal = 5;
	public static readonly RULE_declLocal = 6;
	public static readonly RULE_declPrivate = 7;
	public static readonly RULE_declVariable = 8;
	public static readonly RULE_arraySizeDecl = 9;
	public static readonly RULE_stringVarDecl = 10;
	public static readonly RULE_varDecl = 11;
	public static readonly RULE_pointerDecl = 12;
	public static readonly RULE_initArray = 13;
	public static readonly RULE_initElemArray = 14;
	public static readonly RULE_structBody = 15;
	public static readonly RULE_declProcess = 16;
	public static readonly RULE_body = 17;
	public static readonly RULE_statement = 18;
	public static readonly RULE_returnSt = 19;
	public static readonly RULE_ifSt = 20;
	public static readonly RULE_loopSt = 21;
	public static readonly RULE_whileSt = 22;
	public static readonly RULE_repeatSt = 23;
	public static readonly RULE_fromSt = 24;
	public static readonly RULE_forSt = 25;
	public static readonly RULE_switchSt = 26;
	public static readonly RULE_frameSt = 27;
	public static readonly RULE_debugSt = 28;
	public static readonly RULE_breakSt = 29;
	public static readonly RULE_continueSt = 30;
	public static readonly RULE_cloneSt = 31;
	public static readonly RULE_sc = 32;
	public static readonly RULE_condition = 33;
	public static readonly RULE_constant = 34;
	public static readonly RULE_exp = 35;
	public static readonly RULE_eAssign = 36;
	public static readonly RULE_assignOp = 37;
	public static readonly RULE_eLogic = 38;
	public static readonly RULE_logicOp = 39;
	public static readonly RULE_eCompar = 40;
	public static readonly RULE_comparOp = 41;
	public static readonly RULE_eShift = 42;
	public static readonly RULE_eAdd = 43;
	public static readonly RULE_eMul = 44;
	public static readonly RULE_eUnary = 45;
	public static readonly RULE_eDot = 46;
	public static readonly RULE_ePostUnary = 47;
	public static readonly RULE_eAtom = 48;
	public static readonly RULE_structAtom = 49;
	public static readonly RULE_pointerSuffix = 50;
	public static readonly RULE_parameter = 51;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "compilerOptions", "declProgram", "declImport", "declConst", "declGlobal", 
		"declLocal", "declPrivate", "declVariable", "arraySizeDecl", "stringVarDecl", 
		"varDecl", "pointerDecl", "initArray", "initElemArray", "structBody", 
		"declProcess", "body", "statement", "returnSt", "ifSt", "loopSt", "whileSt", 
		"repeatSt", "fromSt", "forSt", "switchSt", "frameSt", "debugSt", "breakSt", 
		"continueSt", "cloneSt", "sc", "condition", "constant", "exp", "eAssign", 
		"assignOp", "eLogic", "logicOp", "eCompar", "comparOp", "eShift", "eAdd", 
		"eMul", "eUnary", "eDot", "ePostUnary", "eAtom", "structAtom", "pointerSuffix", 
		"parameter",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "','", "'['", "']'", undefined, undefined, 
		"'('", "')'", "'>>'", "'<<'", undefined, undefined, undefined, "'^'", 
		"'&'", undefined, undefined, undefined, undefined, "'+'", "'-'", "'*'", 
		"'/'", undefined, "'++'", "'--'", undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "'..'", 
		"'+='", "'-='", "'*='", "'/='", "'%='", "'&='", "'|='", "'^='", "'>>='", 
		"'<<='", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "'*/'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PROGRAM", "CONST", "GLOBAL", "LOCAL", "BEGIN", "END", "PROCESS", 
		"PRIVATE", "STRUCT", "IMPORT", "SETUP_PROGRAM", "STRING", "BYTE", "WORD", 
		"INT", "COMPILER_OPTIONS", "FUNCTION", "UNTIL", "ELSE", "RETURN", "FROM", 
		"TO", "STEP", "IF", "LOOP", "WHILE", "REPEAT", "FOR", "SWITCH", "CASE", 
		"DEFAULT", "FRAME", "BREAK", "CONTINUE", "CLONE", "DEBUG", "SEMICOLON", 
		"COMMA", "LBRACKET", "RBRACKET", "ASSIGN", "DUP", "LPAREN", "RPAREN", 
		"RSHIFT", "LSHIFT", "OR", "XOR", "AND", "HAT", "AMP", "NEG", "POINTER", 
		"OFFSET", "NOT", "ADD", "SUB", "MUL", "DIV", "MOD", "INC", "DEC", "EQ", 
		"NE", "GT", "LT", "LE", "GE", "SIZEOF", "TYPE", "ID", "DOT", "RANGE", 
		"ADDASSIG", "SUBASSIG", "MULASSIG", "DIVASSIG", "MODASSIG", "ANDASSIG", 
		"ORASSIG", "XORASSIG", "SHRASSIG", "SHLASSIG", "Number", "StringLiteral", 
		"Identifier", "CommentStart", "LINE_COMMENT", "WS", "CommentNest", "CommentEnd", 
		"Anything",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(DIVParser._LITERAL_NAMES, DIVParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return DIVParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "DIVParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return DIVParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return DIVParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(DIVParser._ATN, this);
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let _localctx: FileContext = new FileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, DIVParser.RULE_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.COMPILER_OPTIONS) {
				{
				this.state = 104;
				this.compilerOptions();
				}
			}

			this.state = 107;
			this.declProgram();
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.IMPORT) {
				{
				{
				this.state = 108;
				this.declImport();
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.CONST) {
				{
				this.state = 114;
				this.declConst();
				}
			}

			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.GLOBAL) {
				{
				this.state = 117;
				this.declGlobal();
				}
			}

			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.LOCAL) {
				{
				this.state = 120;
				this.declLocal();
				}
			}

			this.state = 124;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.PRIVATE) {
				{
				this.state = 123;
				this.declPrivate();
				}
			}

			this.state = 126;
			this.body();
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.PROCESS || _la === DIVParser.FUNCTION) {
				{
				{
				this.state = 127;
				this.declProcess();
				}
				}
				this.state = 132;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public compilerOptions(): CompilerOptionsContext {
		let _localctx: CompilerOptionsContext = new CompilerOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, DIVParser.RULE_compilerOptions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this.match(DIVParser.COMPILER_OPTIONS);
			this.state = 140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.COMMA || _la === DIVParser.Identifier) {
				{
				this.state = 138;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DIVParser.COMMA:
					{
					this.state = 134;
					this.match(DIVParser.COMMA);
					}
					break;
				case DIVParser.Identifier:
					{
					this.state = 135;
					this.match(DIVParser.Identifier);
					{
					this.state = 136;
					this.match(DIVParser.ASSIGN);
					this.state = 137;
					this.constant();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 143;
			this.match(DIVParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declProgram(): DeclProgramContext {
		let _localctx: DeclProgramContext = new DeclProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, DIVParser.RULE_declProgram);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			_la = this._input.LA(1);
			if (!(_la === DIVParser.PROGRAM || _la === DIVParser.SETUP_PROGRAM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 146;
			this.match(DIVParser.Identifier);
			this.state = 147;
			this.sc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declImport(): DeclImportContext {
		let _localctx: DeclImportContext = new DeclImportContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, DIVParser.RULE_declImport);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(DIVParser.IMPORT);
			this.state = 150;
			_la = this._input.LA(1);
			if (!(_la === DIVParser.StringLiteral || _la === DIVParser.Identifier)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 151;
			this.match(DIVParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declConst(): DeclConstContext {
		let _localctx: DeclConstContext = new DeclConstContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, DIVParser.RULE_declConst);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(DIVParser.CONST);
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.SEMICOLON) {
				{
				{
				this.state = 154;
				this.match(DIVParser.SEMICOLON);
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.Identifier) {
				{
				{
				this.state = 160;
				this.match(DIVParser.Identifier);
				{
				this.state = 161;
				this.match(DIVParser.ASSIGN);
				}
				this.state = 162;
				this.constant();
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DIVParser.SEMICOLON || _la === DIVParser.COMMA) {
					{
					{
					this.state = 163;
					_la = this._input.LA(1);
					if (!(_la === DIVParser.SEMICOLON || _la === DIVParser.COMMA)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declGlobal(): DeclGlobalContext {
		let _localctx: DeclGlobalContext = new DeclGlobalContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, DIVParser.RULE_declGlobal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(DIVParser.GLOBAL);
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.SEMICOLON) {
				{
				{
				this.state = 175;
				this.match(DIVParser.SEMICOLON);
				}
				}
				this.state = 180;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.STRUCT) | (1 << DIVParser.STRING) | (1 << DIVParser.BYTE) | (1 << DIVParser.WORD) | (1 << DIVParser.INT))) !== 0) || _la === DIVParser.POINTER || _la === DIVParser.Identifier) {
				{
				{
				this.state = 181;
				this.declVariable();
				}
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declLocal(): DeclLocalContext {
		let _localctx: DeclLocalContext = new DeclLocalContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, DIVParser.RULE_declLocal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(DIVParser.LOCAL);
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.SEMICOLON) {
				{
				{
				this.state = 188;
				this.match(DIVParser.SEMICOLON);
				}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.STRUCT) | (1 << DIVParser.STRING) | (1 << DIVParser.BYTE) | (1 << DIVParser.WORD) | (1 << DIVParser.INT))) !== 0) || _la === DIVParser.POINTER || _la === DIVParser.Identifier) {
				{
				{
				this.state = 194;
				this.declVariable();
				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declPrivate(): DeclPrivateContext {
		let _localctx: DeclPrivateContext = new DeclPrivateContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, DIVParser.RULE_declPrivate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 200;
			this.match(DIVParser.PRIVATE);
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.SEMICOLON) {
				{
				{
				this.state = 201;
				this.match(DIVParser.SEMICOLON);
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 210;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.STRUCT) | (1 << DIVParser.STRING) | (1 << DIVParser.BYTE) | (1 << DIVParser.WORD) | (1 << DIVParser.INT))) !== 0) || _la === DIVParser.POINTER || _la === DIVParser.Identifier) {
				{
				{
				this.state = 207;
				this.declVariable();
				}
				}
				this.state = 212;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declVariable(): DeclVariableContext {
		let _localctx: DeclVariableContext = new DeclVariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, DIVParser.RULE_declVariable);
		let _la: number;
		try {
			this.state = 276;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DIVParser.STRUCT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 213;
				this.match(DIVParser.STRUCT);
				this.state = 232;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DIVParser.POINTER:
					{
					this.state = 214;
					this.pointerDecl();
					this.state = 215;
					this.sc();
					}
					break;
				case DIVParser.Identifier:
					{
					this.state = 217;
					this.match(DIVParser.Identifier);
					this.state = 219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIVParser.LBRACKET) {
						{
						this.state = 218;
						this.arraySizeDecl();
						}
					}

					this.state = 221;
					this.structBody();
					this.state = 224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIVParser.ASSIGN) {
						{
						this.state = 222;
						this.match(DIVParser.ASSIGN);
						this.state = 223;
						this.initArray();
						}
					}

					this.state = 229;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === DIVParser.SEMICOLON) {
						{
						{
						this.state = 226;
						this.match(DIVParser.SEMICOLON);
						}
						}
						this.state = 231;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case DIVParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 234;
				this.match(DIVParser.STRING);
				this.state = 235;
				this.stringVarDecl();
				this.state = 240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DIVParser.COMMA) {
					{
					{
					this.state = 236;
					this.match(DIVParser.COMMA);
					this.state = 237;
					this.stringVarDecl();
					}
					}
					this.state = 242;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 243;
				this.sc();
				}
				break;
			case DIVParser.BYTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 245;
				this.match(DIVParser.BYTE);
				this.state = 246;
				this.varDecl();
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DIVParser.COMMA) {
					{
					{
					this.state = 247;
					this.match(DIVParser.COMMA);
					this.state = 248;
					this.varDecl();
					}
					}
					this.state = 253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 254;
				this.sc();
				}
				break;
			case DIVParser.WORD:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 256;
				this.match(DIVParser.WORD);
				this.state = 257;
				this.varDecl();
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DIVParser.COMMA) {
					{
					{
					this.state = 258;
					this.match(DIVParser.COMMA);
					this.state = 259;
					this.varDecl();
					}
					}
					this.state = 264;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 265;
				this.sc();
				}
				break;
			case DIVParser.INT:
			case DIVParser.POINTER:
			case DIVParser.Identifier:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DIVParser.INT) {
					{
					this.state = 267;
					this.match(DIVParser.INT);
					}
				}

				this.state = 270;
				this.varDecl();
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 271;
					_la = this._input.LA(1);
					if (!(_la === DIVParser.SEMICOLON || _la === DIVParser.COMMA)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
					this.state = 274;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === DIVParser.SEMICOLON || _la === DIVParser.COMMA);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arraySizeDecl(): ArraySizeDeclContext {
		let _localctx: ArraySizeDeclContext = new ArraySizeDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, DIVParser.RULE_arraySizeDecl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 278;
			this.match(DIVParser.LBRACKET);
			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (DIVParser.LBRACKET - 39)) | (1 << (DIVParser.LPAREN - 39)) | (1 << (DIVParser.HAT - 39)) | (1 << (DIVParser.AMP - 39)) | (1 << (DIVParser.NEG - 39)) | (1 << (DIVParser.POINTER - 39)) | (1 << (DIVParser.OFFSET - 39)) | (1 << (DIVParser.NOT - 39)) | (1 << (DIVParser.ADD - 39)) | (1 << (DIVParser.SUB - 39)) | (1 << (DIVParser.MUL - 39)) | (1 << (DIVParser.INC - 39)) | (1 << (DIVParser.DEC - 39)) | (1 << (DIVParser.SIZEOF - 39)) | (1 << (DIVParser.TYPE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (DIVParser.ID - 71)) | (1 << (DIVParser.Number - 71)) | (1 << (DIVParser.StringLiteral - 71)) | (1 << (DIVParser.Identifier - 71)))) !== 0)) {
				{
				this.state = 279;
				this.constant();
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DIVParser.COMMA) {
					{
					this.state = 280;
					this.match(DIVParser.COMMA);
					this.state = 281;
					this.constant();
					this.state = 284;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIVParser.COMMA) {
						{
						this.state = 282;
						this.match(DIVParser.COMMA);
						this.state = 283;
						this.constant();
						}
					}

					}
				}

				}
			}

			this.state = 290;
			this.match(DIVParser.RBRACKET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringVarDecl(): StringVarDeclContext {
		let _localctx: StringVarDeclContext = new StringVarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, DIVParser.RULE_stringVarDecl);
		let _la: number;
		try {
			this.state = 305;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DIVParser.POINTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 292;
				this.pointerDecl();
				}
				break;
			case DIVParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 293;
				this.match(DIVParser.Identifier);
				this.state = 299;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DIVParser.LBRACKET) {
					{
					this.state = 294;
					this.match(DIVParser.LBRACKET);
					this.state = 296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (DIVParser.LBRACKET - 39)) | (1 << (DIVParser.LPAREN - 39)) | (1 << (DIVParser.HAT - 39)) | (1 << (DIVParser.AMP - 39)) | (1 << (DIVParser.NEG - 39)) | (1 << (DIVParser.POINTER - 39)) | (1 << (DIVParser.OFFSET - 39)) | (1 << (DIVParser.NOT - 39)) | (1 << (DIVParser.ADD - 39)) | (1 << (DIVParser.SUB - 39)) | (1 << (DIVParser.MUL - 39)) | (1 << (DIVParser.INC - 39)) | (1 << (DIVParser.DEC - 39)) | (1 << (DIVParser.SIZEOF - 39)) | (1 << (DIVParser.TYPE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (DIVParser.ID - 71)) | (1 << (DIVParser.Number - 71)) | (1 << (DIVParser.StringLiteral - 71)) | (1 << (DIVParser.Identifier - 71)))) !== 0)) {
						{
						this.state = 295;
						this.constant();
						}
					}

					this.state = 298;
					this.match(DIVParser.RBRACKET);
					}
				}

				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DIVParser.ASSIGN) {
					{
					this.state = 301;
					this.match(DIVParser.ASSIGN);
					this.state = 302;
					_la = this._input.LA(1);
					if (!(_la === DIVParser.StringLiteral || _la === DIVParser.Identifier)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, DIVParser.RULE_varDecl);
		let _la: number;
		try {
			this.state = 318;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DIVParser.POINTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 307;
				this.pointerDecl();
				}
				break;
			case DIVParser.Identifier:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 308;
				this.match(DIVParser.Identifier);
				this.state = 316;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DIVParser.LBRACKET:
					{
					this.state = 309;
					this.arraySizeDecl();
					this.state = 312;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIVParser.ASSIGN) {
						{
						this.state = 310;
						this.match(DIVParser.ASSIGN);
						this.state = 311;
						this.initArray();
						}
					}

					}
					break;
				case DIVParser.ASSIGN:
					{
					this.state = 314;
					this.match(DIVParser.ASSIGN);
					this.state = 315;
					this.constant();
					}
					break;
				case DIVParser.SEMICOLON:
				case DIVParser.COMMA:
					break;
				default:
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerDecl(): PointerDeclContext {
		let _localctx: PointerDeclContext = new PointerDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, DIVParser.RULE_pointerDecl);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(DIVParser.POINTER);
			this.state = 321;
			this.pointerSuffix();
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.ASSIGN) {
				{
				this.state = 322;
				this.match(DIVParser.ASSIGN);
				this.state = 323;
				this.constant();
				}
			}

			this.state = 337;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 326;
					this.match(DIVParser.COMMA);
					this.state = 328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIVParser.POINTER) {
						{
						this.state = 327;
						this.match(DIVParser.POINTER);
						}
					}

					this.state = 330;
					this.pointerSuffix();
					this.state = 333;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIVParser.ASSIGN) {
						{
						this.state = 331;
						this.match(DIVParser.ASSIGN);
						this.state = 332;
						this.constant();
						}
					}

					}
					}
				}
				this.state = 339;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initArray(): InitArrayContext {
		let _localctx: InitArrayContext = new InitArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, DIVParser.RULE_initArray);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 341;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 340;
				this.initElemArray();
				}
				break;
			}
			this.state = 349;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 343;
					this.match(DIVParser.COMMA);
					this.state = 345;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
					case 1:
						{
						this.state = 344;
						this.initElemArray();
						}
						break;
					}
					}
					}
				}
				this.state = 351;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public initElemArray(): InitElemArrayContext {
		let _localctx: InitElemArrayContext = new InitElemArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, DIVParser.RULE_initElemArray);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.constant();
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.DUP) {
				{
				this.state = 353;
				this.match(DIVParser.DUP);
				this.state = 354;
				this.match(DIVParser.LPAREN);
				this.state = 356;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (DIVParser.LBRACKET - 39)) | (1 << (DIVParser.LPAREN - 39)) | (1 << (DIVParser.HAT - 39)) | (1 << (DIVParser.AMP - 39)) | (1 << (DIVParser.NEG - 39)) | (1 << (DIVParser.POINTER - 39)) | (1 << (DIVParser.OFFSET - 39)) | (1 << (DIVParser.NOT - 39)) | (1 << (DIVParser.ADD - 39)) | (1 << (DIVParser.SUB - 39)) | (1 << (DIVParser.MUL - 39)) | (1 << (DIVParser.INC - 39)) | (1 << (DIVParser.DEC - 39)) | (1 << (DIVParser.SIZEOF - 39)) | (1 << (DIVParser.TYPE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (DIVParser.ID - 71)) | (1 << (DIVParser.Number - 71)) | (1 << (DIVParser.StringLiteral - 71)) | (1 << (DIVParser.Identifier - 71)))) !== 0)) {
					{
					this.state = 355;
					this.initElemArray();
					}
				}

				this.state = 364;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DIVParser.COMMA) {
					{
					{
					this.state = 358;
					this.match(DIVParser.COMMA);
					this.state = 360;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (DIVParser.LBRACKET - 39)) | (1 << (DIVParser.LPAREN - 39)) | (1 << (DIVParser.HAT - 39)) | (1 << (DIVParser.AMP - 39)) | (1 << (DIVParser.NEG - 39)) | (1 << (DIVParser.POINTER - 39)) | (1 << (DIVParser.OFFSET - 39)) | (1 << (DIVParser.NOT - 39)) | (1 << (DIVParser.ADD - 39)) | (1 << (DIVParser.SUB - 39)) | (1 << (DIVParser.MUL - 39)) | (1 << (DIVParser.INC - 39)) | (1 << (DIVParser.DEC - 39)) | (1 << (DIVParser.SIZEOF - 39)) | (1 << (DIVParser.TYPE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (DIVParser.ID - 71)) | (1 << (DIVParser.Number - 71)) | (1 << (DIVParser.StringLiteral - 71)) | (1 << (DIVParser.Identifier - 71)))) !== 0)) {
						{
						this.state = 359;
						this.initElemArray();
						}
					}

					}
					}
					this.state = 366;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 367;
				this.match(DIVParser.RPAREN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structBody(): StructBodyContext {
		let _localctx: StructBodyContext = new StructBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, DIVParser.RULE_structBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.SEMICOLON) {
				{
				{
				this.state = 370;
				this.match(DIVParser.SEMICOLON);
				}
				}
				this.state = 375;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.STRUCT) | (1 << DIVParser.STRING) | (1 << DIVParser.BYTE) | (1 << DIVParser.WORD) | (1 << DIVParser.INT))) !== 0) || _la === DIVParser.POINTER || _la === DIVParser.Identifier) {
				{
				{
				this.state = 376;
				this.declVariable();
				}
				}
				this.state = 381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 382;
			this.match(DIVParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declProcess(): DeclProcessContext {
		let _localctx: DeclProcessContext = new DeclProcessContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, DIVParser.RULE_declProcess);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 384;
			_la = this._input.LA(1);
			if (!(_la === DIVParser.PROCESS || _la === DIVParser.FUNCTION)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 385;
			this.match(DIVParser.Identifier);
			this.state = 386;
			this.match(DIVParser.LPAREN);
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.STRUCT) | (1 << DIVParser.STRING) | (1 << DIVParser.BYTE) | (1 << DIVParser.WORD) | (1 << DIVParser.INT))) !== 0) || _la === DIVParser.POINTER || _la === DIVParser.Identifier) {
				{
				this.state = 387;
				this.parameter();
				this.state = 392;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DIVParser.COMMA) {
					{
					{
					this.state = 388;
					this.match(DIVParser.COMMA);
					this.state = 389;
					this.parameter();
					}
					}
					this.state = 394;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 397;
			this.match(DIVParser.RPAREN);
			this.state = 401;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.SEMICOLON) {
				{
				{
				this.state = 398;
				this.match(DIVParser.SEMICOLON);
				}
				}
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.PRIVATE) {
				{
				this.state = 404;
				this.declPrivate();
				}
			}

			this.state = 407;
			this.body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, DIVParser.RULE_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 409;
			this.match(DIVParser.BEGIN);
			this.state = 413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.RETURN) | (1 << DIVParser.FROM) | (1 << DIVParser.IF) | (1 << DIVParser.LOOP) | (1 << DIVParser.WHILE) | (1 << DIVParser.REPEAT) | (1 << DIVParser.FOR) | (1 << DIVParser.SWITCH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DIVParser.FRAME - 32)) | (1 << (DIVParser.BREAK - 32)) | (1 << (DIVParser.CONTINUE - 32)) | (1 << (DIVParser.CLONE - 32)) | (1 << (DIVParser.DEBUG - 32)) | (1 << (DIVParser.SEMICOLON - 32)) | (1 << (DIVParser.LBRACKET - 32)) | (1 << (DIVParser.LPAREN - 32)) | (1 << (DIVParser.HAT - 32)) | (1 << (DIVParser.AMP - 32)) | (1 << (DIVParser.NEG - 32)) | (1 << (DIVParser.POINTER - 32)) | (1 << (DIVParser.OFFSET - 32)) | (1 << (DIVParser.NOT - 32)) | (1 << (DIVParser.ADD - 32)) | (1 << (DIVParser.SUB - 32)) | (1 << (DIVParser.MUL - 32)) | (1 << (DIVParser.INC - 32)) | (1 << (DIVParser.DEC - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (DIVParser.SIZEOF - 69)) | (1 << (DIVParser.TYPE - 69)) | (1 << (DIVParser.ID - 69)) | (1 << (DIVParser.Number - 69)) | (1 << (DIVParser.StringLiteral - 69)) | (1 << (DIVParser.Identifier - 69)))) !== 0)) {
				{
				{
				this.state = 410;
				this.statement();
				}
				}
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 416;
			this.match(DIVParser.END);
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.SEMICOLON) {
				{
				{
				this.state = 417;
				this.match(DIVParser.SEMICOLON);
				}
				}
				this.state = 422;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, DIVParser.RULE_statement);
		try {
			this.state = 440;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DIVParser.RETURN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 423;
				this.returnSt();
				}
				break;
			case DIVParser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 424;
				this.ifSt();
				}
				break;
			case DIVParser.LOOP:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 425;
				this.loopSt();
				}
				break;
			case DIVParser.WHILE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 426;
				this.whileSt();
				}
				break;
			case DIVParser.REPEAT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 427;
				this.repeatSt();
				}
				break;
			case DIVParser.FROM:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 428;
				this.fromSt();
				}
				break;
			case DIVParser.FOR:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 429;
				this.forSt();
				}
				break;
			case DIVParser.SWITCH:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 430;
				this.switchSt();
				}
				break;
			case DIVParser.FRAME:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 431;
				this.frameSt();
				}
				break;
			case DIVParser.DEBUG:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 432;
				this.debugSt();
				}
				break;
			case DIVParser.BREAK:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 433;
				this.breakSt();
				}
				break;
			case DIVParser.CONTINUE:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 434;
				this.continueSt();
				}
				break;
			case DIVParser.CLONE:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 435;
				this.cloneSt();
				}
				break;
			case DIVParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 436;
				this.match(DIVParser.SEMICOLON);
				}
				break;
			case DIVParser.LBRACKET:
			case DIVParser.LPAREN:
			case DIVParser.HAT:
			case DIVParser.AMP:
			case DIVParser.NEG:
			case DIVParser.POINTER:
			case DIVParser.OFFSET:
			case DIVParser.NOT:
			case DIVParser.ADD:
			case DIVParser.SUB:
			case DIVParser.MUL:
			case DIVParser.INC:
			case DIVParser.DEC:
			case DIVParser.SIZEOF:
			case DIVParser.TYPE:
			case DIVParser.ID:
			case DIVParser.Number:
			case DIVParser.StringLiteral:
			case DIVParser.Identifier:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 437;
				this.exp();
				this.state = 438;
				this.sc();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnSt(): ReturnStContext {
		let _localctx: ReturnStContext = new ReturnStContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, DIVParser.RULE_returnSt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.match(DIVParser.RETURN);
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.LPAREN) {
				{
				this.state = 443;
				this.match(DIVParser.LPAREN);
				this.state = 445;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (DIVParser.LBRACKET - 39)) | (1 << (DIVParser.LPAREN - 39)) | (1 << (DIVParser.HAT - 39)) | (1 << (DIVParser.AMP - 39)) | (1 << (DIVParser.NEG - 39)) | (1 << (DIVParser.POINTER - 39)) | (1 << (DIVParser.OFFSET - 39)) | (1 << (DIVParser.NOT - 39)) | (1 << (DIVParser.ADD - 39)) | (1 << (DIVParser.SUB - 39)) | (1 << (DIVParser.MUL - 39)) | (1 << (DIVParser.INC - 39)) | (1 << (DIVParser.DEC - 39)) | (1 << (DIVParser.SIZEOF - 39)) | (1 << (DIVParser.TYPE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (DIVParser.ID - 71)) | (1 << (DIVParser.Number - 71)) | (1 << (DIVParser.StringLiteral - 71)) | (1 << (DIVParser.Identifier - 71)))) !== 0)) {
					{
					this.state = 444;
					this.exp();
					}
				}

				this.state = 447;
				this.match(DIVParser.RPAREN);
				}
			}

			this.state = 450;
			this.sc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifSt(): IfStContext {
		let _localctx: IfStContext = new IfStContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, DIVParser.RULE_ifSt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			this.match(DIVParser.IF);
			this.state = 453;
			this.match(DIVParser.LPAREN);
			this.state = 454;
			this.condition();
			this.state = 455;
			this.match(DIVParser.RPAREN);
			this.state = 459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.RETURN) | (1 << DIVParser.FROM) | (1 << DIVParser.IF) | (1 << DIVParser.LOOP) | (1 << DIVParser.WHILE) | (1 << DIVParser.REPEAT) | (1 << DIVParser.FOR) | (1 << DIVParser.SWITCH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DIVParser.FRAME - 32)) | (1 << (DIVParser.BREAK - 32)) | (1 << (DIVParser.CONTINUE - 32)) | (1 << (DIVParser.CLONE - 32)) | (1 << (DIVParser.DEBUG - 32)) | (1 << (DIVParser.SEMICOLON - 32)) | (1 << (DIVParser.LBRACKET - 32)) | (1 << (DIVParser.LPAREN - 32)) | (1 << (DIVParser.HAT - 32)) | (1 << (DIVParser.AMP - 32)) | (1 << (DIVParser.NEG - 32)) | (1 << (DIVParser.POINTER - 32)) | (1 << (DIVParser.OFFSET - 32)) | (1 << (DIVParser.NOT - 32)) | (1 << (DIVParser.ADD - 32)) | (1 << (DIVParser.SUB - 32)) | (1 << (DIVParser.MUL - 32)) | (1 << (DIVParser.INC - 32)) | (1 << (DIVParser.DEC - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (DIVParser.SIZEOF - 69)) | (1 << (DIVParser.TYPE - 69)) | (1 << (DIVParser.ID - 69)) | (1 << (DIVParser.Number - 69)) | (1 << (DIVParser.StringLiteral - 69)) | (1 << (DIVParser.Identifier - 69)))) !== 0)) {
				{
				{
				this.state = 456;
				this.statement();
				}
				}
				this.state = 461;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.ELSE) {
				{
				this.state = 462;
				this.match(DIVParser.ELSE);
				this.state = 466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.RETURN) | (1 << DIVParser.FROM) | (1 << DIVParser.IF) | (1 << DIVParser.LOOP) | (1 << DIVParser.WHILE) | (1 << DIVParser.REPEAT) | (1 << DIVParser.FOR) | (1 << DIVParser.SWITCH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DIVParser.FRAME - 32)) | (1 << (DIVParser.BREAK - 32)) | (1 << (DIVParser.CONTINUE - 32)) | (1 << (DIVParser.CLONE - 32)) | (1 << (DIVParser.DEBUG - 32)) | (1 << (DIVParser.SEMICOLON - 32)) | (1 << (DIVParser.LBRACKET - 32)) | (1 << (DIVParser.LPAREN - 32)) | (1 << (DIVParser.HAT - 32)) | (1 << (DIVParser.AMP - 32)) | (1 << (DIVParser.NEG - 32)) | (1 << (DIVParser.POINTER - 32)) | (1 << (DIVParser.OFFSET - 32)) | (1 << (DIVParser.NOT - 32)) | (1 << (DIVParser.ADD - 32)) | (1 << (DIVParser.SUB - 32)) | (1 << (DIVParser.MUL - 32)) | (1 << (DIVParser.INC - 32)) | (1 << (DIVParser.DEC - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (DIVParser.SIZEOF - 69)) | (1 << (DIVParser.TYPE - 69)) | (1 << (DIVParser.ID - 69)) | (1 << (DIVParser.Number - 69)) | (1 << (DIVParser.StringLiteral - 69)) | (1 << (DIVParser.Identifier - 69)))) !== 0)) {
					{
					{
					this.state = 463;
					this.statement();
					}
					}
					this.state = 468;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 471;
			this.match(DIVParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopSt(): LoopStContext {
		let _localctx: LoopStContext = new LoopStContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, DIVParser.RULE_loopSt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.match(DIVParser.LOOP);
			this.state = 477;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.RETURN) | (1 << DIVParser.FROM) | (1 << DIVParser.IF) | (1 << DIVParser.LOOP) | (1 << DIVParser.WHILE) | (1 << DIVParser.REPEAT) | (1 << DIVParser.FOR) | (1 << DIVParser.SWITCH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DIVParser.FRAME - 32)) | (1 << (DIVParser.BREAK - 32)) | (1 << (DIVParser.CONTINUE - 32)) | (1 << (DIVParser.CLONE - 32)) | (1 << (DIVParser.DEBUG - 32)) | (1 << (DIVParser.SEMICOLON - 32)) | (1 << (DIVParser.LBRACKET - 32)) | (1 << (DIVParser.LPAREN - 32)) | (1 << (DIVParser.HAT - 32)) | (1 << (DIVParser.AMP - 32)) | (1 << (DIVParser.NEG - 32)) | (1 << (DIVParser.POINTER - 32)) | (1 << (DIVParser.OFFSET - 32)) | (1 << (DIVParser.NOT - 32)) | (1 << (DIVParser.ADD - 32)) | (1 << (DIVParser.SUB - 32)) | (1 << (DIVParser.MUL - 32)) | (1 << (DIVParser.INC - 32)) | (1 << (DIVParser.DEC - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (DIVParser.SIZEOF - 69)) | (1 << (DIVParser.TYPE - 69)) | (1 << (DIVParser.ID - 69)) | (1 << (DIVParser.Number - 69)) | (1 << (DIVParser.StringLiteral - 69)) | (1 << (DIVParser.Identifier - 69)))) !== 0)) {
				{
				{
				this.state = 474;
				this.statement();
				}
				}
				this.state = 479;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 480;
			this.match(DIVParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileSt(): WhileStContext {
		let _localctx: WhileStContext = new WhileStContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, DIVParser.RULE_whileSt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.match(DIVParser.WHILE);
			this.state = 483;
			this.match(DIVParser.LPAREN);
			this.state = 484;
			this.condition();
			this.state = 485;
			this.match(DIVParser.RPAREN);
			this.state = 489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.RETURN) | (1 << DIVParser.FROM) | (1 << DIVParser.IF) | (1 << DIVParser.LOOP) | (1 << DIVParser.WHILE) | (1 << DIVParser.REPEAT) | (1 << DIVParser.FOR) | (1 << DIVParser.SWITCH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DIVParser.FRAME - 32)) | (1 << (DIVParser.BREAK - 32)) | (1 << (DIVParser.CONTINUE - 32)) | (1 << (DIVParser.CLONE - 32)) | (1 << (DIVParser.DEBUG - 32)) | (1 << (DIVParser.SEMICOLON - 32)) | (1 << (DIVParser.LBRACKET - 32)) | (1 << (DIVParser.LPAREN - 32)) | (1 << (DIVParser.HAT - 32)) | (1 << (DIVParser.AMP - 32)) | (1 << (DIVParser.NEG - 32)) | (1 << (DIVParser.POINTER - 32)) | (1 << (DIVParser.OFFSET - 32)) | (1 << (DIVParser.NOT - 32)) | (1 << (DIVParser.ADD - 32)) | (1 << (DIVParser.SUB - 32)) | (1 << (DIVParser.MUL - 32)) | (1 << (DIVParser.INC - 32)) | (1 << (DIVParser.DEC - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (DIVParser.SIZEOF - 69)) | (1 << (DIVParser.TYPE - 69)) | (1 << (DIVParser.ID - 69)) | (1 << (DIVParser.Number - 69)) | (1 << (DIVParser.StringLiteral - 69)) | (1 << (DIVParser.Identifier - 69)))) !== 0)) {
				{
				{
				this.state = 486;
				this.statement();
				}
				}
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 492;
			this.match(DIVParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatSt(): RepeatStContext {
		let _localctx: RepeatStContext = new RepeatStContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, DIVParser.RULE_repeatSt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			this.match(DIVParser.REPEAT);
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.RETURN) | (1 << DIVParser.FROM) | (1 << DIVParser.IF) | (1 << DIVParser.LOOP) | (1 << DIVParser.WHILE) | (1 << DIVParser.REPEAT) | (1 << DIVParser.FOR) | (1 << DIVParser.SWITCH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DIVParser.FRAME - 32)) | (1 << (DIVParser.BREAK - 32)) | (1 << (DIVParser.CONTINUE - 32)) | (1 << (DIVParser.CLONE - 32)) | (1 << (DIVParser.DEBUG - 32)) | (1 << (DIVParser.SEMICOLON - 32)) | (1 << (DIVParser.LBRACKET - 32)) | (1 << (DIVParser.LPAREN - 32)) | (1 << (DIVParser.HAT - 32)) | (1 << (DIVParser.AMP - 32)) | (1 << (DIVParser.NEG - 32)) | (1 << (DIVParser.POINTER - 32)) | (1 << (DIVParser.OFFSET - 32)) | (1 << (DIVParser.NOT - 32)) | (1 << (DIVParser.ADD - 32)) | (1 << (DIVParser.SUB - 32)) | (1 << (DIVParser.MUL - 32)) | (1 << (DIVParser.INC - 32)) | (1 << (DIVParser.DEC - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (DIVParser.SIZEOF - 69)) | (1 << (DIVParser.TYPE - 69)) | (1 << (DIVParser.ID - 69)) | (1 << (DIVParser.Number - 69)) | (1 << (DIVParser.StringLiteral - 69)) | (1 << (DIVParser.Identifier - 69)))) !== 0)) {
				{
				{
				this.state = 495;
				this.statement();
				}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 501;
			this.match(DIVParser.UNTIL);
			this.state = 502;
			this.match(DIVParser.LPAREN);
			this.state = 503;
			this.condition();
			this.state = 504;
			this.match(DIVParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fromSt(): FromStContext {
		let _localctx: FromStContext = new FromStContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, DIVParser.RULE_fromSt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.match(DIVParser.FROM);
			this.state = 507;
			this.match(DIVParser.Identifier);
			this.state = 508;
			this.match(DIVParser.ASSIGN);
			this.state = 509;
			this.constant();
			this.state = 510;
			this.match(DIVParser.TO);
			this.state = 511;
			this.constant();
			this.state = 514;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.STEP) {
				{
				this.state = 512;
				this.match(DIVParser.STEP);
				this.state = 513;
				this.constant();
				}
			}

			this.state = 516;
			this.sc();
			this.state = 520;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.RETURN) | (1 << DIVParser.FROM) | (1 << DIVParser.IF) | (1 << DIVParser.LOOP) | (1 << DIVParser.WHILE) | (1 << DIVParser.REPEAT) | (1 << DIVParser.FOR) | (1 << DIVParser.SWITCH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DIVParser.FRAME - 32)) | (1 << (DIVParser.BREAK - 32)) | (1 << (DIVParser.CONTINUE - 32)) | (1 << (DIVParser.CLONE - 32)) | (1 << (DIVParser.DEBUG - 32)) | (1 << (DIVParser.SEMICOLON - 32)) | (1 << (DIVParser.LBRACKET - 32)) | (1 << (DIVParser.LPAREN - 32)) | (1 << (DIVParser.HAT - 32)) | (1 << (DIVParser.AMP - 32)) | (1 << (DIVParser.NEG - 32)) | (1 << (DIVParser.POINTER - 32)) | (1 << (DIVParser.OFFSET - 32)) | (1 << (DIVParser.NOT - 32)) | (1 << (DIVParser.ADD - 32)) | (1 << (DIVParser.SUB - 32)) | (1 << (DIVParser.MUL - 32)) | (1 << (DIVParser.INC - 32)) | (1 << (DIVParser.DEC - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (DIVParser.SIZEOF - 69)) | (1 << (DIVParser.TYPE - 69)) | (1 << (DIVParser.ID - 69)) | (1 << (DIVParser.Number - 69)) | (1 << (DIVParser.StringLiteral - 69)) | (1 << (DIVParser.Identifier - 69)))) !== 0)) {
				{
				{
				this.state = 517;
				this.statement();
				}
				}
				this.state = 522;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 523;
			this.match(DIVParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forSt(): ForStContext {
		let _localctx: ForStContext = new ForStContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, DIVParser.RULE_forSt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.match(DIVParser.FOR);
			this.state = 526;
			this.match(DIVParser.LPAREN);
			this.state = 535;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (DIVParser.LBRACKET - 39)) | (1 << (DIVParser.LPAREN - 39)) | (1 << (DIVParser.HAT - 39)) | (1 << (DIVParser.AMP - 39)) | (1 << (DIVParser.NEG - 39)) | (1 << (DIVParser.POINTER - 39)) | (1 << (DIVParser.OFFSET - 39)) | (1 << (DIVParser.NOT - 39)) | (1 << (DIVParser.ADD - 39)) | (1 << (DIVParser.SUB - 39)) | (1 << (DIVParser.MUL - 39)) | (1 << (DIVParser.INC - 39)) | (1 << (DIVParser.DEC - 39)) | (1 << (DIVParser.SIZEOF - 39)) | (1 << (DIVParser.TYPE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (DIVParser.ID - 71)) | (1 << (DIVParser.Number - 71)) | (1 << (DIVParser.StringLiteral - 71)) | (1 << (DIVParser.Identifier - 71)))) !== 0)) {
				{
				this.state = 527;
				this.exp();
				this.state = 532;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DIVParser.COMMA) {
					{
					{
					this.state = 528;
					this.match(DIVParser.COMMA);
					this.state = 529;
					this.exp();
					}
					}
					this.state = 534;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 537;
			this.match(DIVParser.SEMICOLON);
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (DIVParser.LBRACKET - 39)) | (1 << (DIVParser.LPAREN - 39)) | (1 << (DIVParser.HAT - 39)) | (1 << (DIVParser.AMP - 39)) | (1 << (DIVParser.NEG - 39)) | (1 << (DIVParser.POINTER - 39)) | (1 << (DIVParser.OFFSET - 39)) | (1 << (DIVParser.NOT - 39)) | (1 << (DIVParser.ADD - 39)) | (1 << (DIVParser.SUB - 39)) | (1 << (DIVParser.MUL - 39)) | (1 << (DIVParser.INC - 39)) | (1 << (DIVParser.DEC - 39)) | (1 << (DIVParser.SIZEOF - 39)) | (1 << (DIVParser.TYPE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (DIVParser.ID - 71)) | (1 << (DIVParser.Number - 71)) | (1 << (DIVParser.StringLiteral - 71)) | (1 << (DIVParser.Identifier - 71)))) !== 0)) {
				{
				this.state = 538;
				this.exp();
				this.state = 543;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DIVParser.COMMA) {
					{
					{
					this.state = 539;
					this.match(DIVParser.COMMA);
					this.state = 540;
					this.exp();
					}
					}
					this.state = 545;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 548;
			this.match(DIVParser.SEMICOLON);
			this.state = 557;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (DIVParser.LBRACKET - 39)) | (1 << (DIVParser.LPAREN - 39)) | (1 << (DIVParser.HAT - 39)) | (1 << (DIVParser.AMP - 39)) | (1 << (DIVParser.NEG - 39)) | (1 << (DIVParser.POINTER - 39)) | (1 << (DIVParser.OFFSET - 39)) | (1 << (DIVParser.NOT - 39)) | (1 << (DIVParser.ADD - 39)) | (1 << (DIVParser.SUB - 39)) | (1 << (DIVParser.MUL - 39)) | (1 << (DIVParser.INC - 39)) | (1 << (DIVParser.DEC - 39)) | (1 << (DIVParser.SIZEOF - 39)) | (1 << (DIVParser.TYPE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (DIVParser.ID - 71)) | (1 << (DIVParser.Number - 71)) | (1 << (DIVParser.StringLiteral - 71)) | (1 << (DIVParser.Identifier - 71)))) !== 0)) {
				{
				this.state = 549;
				this.exp();
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === DIVParser.COMMA) {
					{
					{
					this.state = 550;
					this.match(DIVParser.COMMA);
					this.state = 551;
					this.exp();
					}
					}
					this.state = 556;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 559;
			this.match(DIVParser.RPAREN);
			this.state = 563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.RETURN) | (1 << DIVParser.FROM) | (1 << DIVParser.IF) | (1 << DIVParser.LOOP) | (1 << DIVParser.WHILE) | (1 << DIVParser.REPEAT) | (1 << DIVParser.FOR) | (1 << DIVParser.SWITCH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DIVParser.FRAME - 32)) | (1 << (DIVParser.BREAK - 32)) | (1 << (DIVParser.CONTINUE - 32)) | (1 << (DIVParser.CLONE - 32)) | (1 << (DIVParser.DEBUG - 32)) | (1 << (DIVParser.SEMICOLON - 32)) | (1 << (DIVParser.LBRACKET - 32)) | (1 << (DIVParser.LPAREN - 32)) | (1 << (DIVParser.HAT - 32)) | (1 << (DIVParser.AMP - 32)) | (1 << (DIVParser.NEG - 32)) | (1 << (DIVParser.POINTER - 32)) | (1 << (DIVParser.OFFSET - 32)) | (1 << (DIVParser.NOT - 32)) | (1 << (DIVParser.ADD - 32)) | (1 << (DIVParser.SUB - 32)) | (1 << (DIVParser.MUL - 32)) | (1 << (DIVParser.INC - 32)) | (1 << (DIVParser.DEC - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (DIVParser.SIZEOF - 69)) | (1 << (DIVParser.TYPE - 69)) | (1 << (DIVParser.ID - 69)) | (1 << (DIVParser.Number - 69)) | (1 << (DIVParser.StringLiteral - 69)) | (1 << (DIVParser.Identifier - 69)))) !== 0)) {
				{
				{
				this.state = 560;
				this.statement();
				}
				}
				this.state = 565;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 566;
			this.match(DIVParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public switchSt(): SwitchStContext {
		let _localctx: SwitchStContext = new SwitchStContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, DIVParser.RULE_switchSt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 568;
			this.match(DIVParser.SWITCH);
			this.state = 569;
			this.match(DIVParser.LPAREN);
			this.state = 570;
			this.condition();
			this.state = 571;
			this.match(DIVParser.RPAREN);
			this.state = 575;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.SEMICOLON) {
				{
				{
				this.state = 572;
				this.match(DIVParser.SEMICOLON);
				}
				}
				this.state = 577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 616;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === DIVParser.CASE || _la === DIVParser.DEFAULT) {
				{
				this.state = 614;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DIVParser.CASE:
					{
					this.state = 578;
					this.match(DIVParser.CASE);
					this.state = 579;
					this.exp();
					this.state = 582;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIVParser.RANGE) {
						{
						this.state = 580;
						this.match(DIVParser.RANGE);
						this.state = 581;
						this.exp();
						}
					}

					this.state = 592;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === DIVParser.COMMA) {
						{
						{
						this.state = 584;
						this.match(DIVParser.COMMA);
						this.state = 585;
						this.exp();
						this.state = 588;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === DIVParser.RANGE) {
							{
							this.state = 586;
							this.match(DIVParser.RANGE);
							this.state = 587;
							this.exp();
							}
						}

						}
						}
						this.state = 594;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 595;
					this.sc();
					this.state = 599;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.RETURN) | (1 << DIVParser.FROM) | (1 << DIVParser.IF) | (1 << DIVParser.LOOP) | (1 << DIVParser.WHILE) | (1 << DIVParser.REPEAT) | (1 << DIVParser.FOR) | (1 << DIVParser.SWITCH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DIVParser.FRAME - 32)) | (1 << (DIVParser.BREAK - 32)) | (1 << (DIVParser.CONTINUE - 32)) | (1 << (DIVParser.CLONE - 32)) | (1 << (DIVParser.DEBUG - 32)) | (1 << (DIVParser.SEMICOLON - 32)) | (1 << (DIVParser.LBRACKET - 32)) | (1 << (DIVParser.LPAREN - 32)) | (1 << (DIVParser.HAT - 32)) | (1 << (DIVParser.AMP - 32)) | (1 << (DIVParser.NEG - 32)) | (1 << (DIVParser.POINTER - 32)) | (1 << (DIVParser.OFFSET - 32)) | (1 << (DIVParser.NOT - 32)) | (1 << (DIVParser.ADD - 32)) | (1 << (DIVParser.SUB - 32)) | (1 << (DIVParser.MUL - 32)) | (1 << (DIVParser.INC - 32)) | (1 << (DIVParser.DEC - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (DIVParser.SIZEOF - 69)) | (1 << (DIVParser.TYPE - 69)) | (1 << (DIVParser.ID - 69)) | (1 << (DIVParser.Number - 69)) | (1 << (DIVParser.StringLiteral - 69)) | (1 << (DIVParser.Identifier - 69)))) !== 0)) {
						{
						{
						this.state = 596;
						this.statement();
						}
						}
						this.state = 601;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 602;
					this.match(DIVParser.END);
					}
					break;
				case DIVParser.DEFAULT:
					{
					this.state = 604;
					this.match(DIVParser.DEFAULT);
					this.state = 605;
					this.sc();
					this.state = 609;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.RETURN) | (1 << DIVParser.FROM) | (1 << DIVParser.IF) | (1 << DIVParser.LOOP) | (1 << DIVParser.WHILE) | (1 << DIVParser.REPEAT) | (1 << DIVParser.FOR) | (1 << DIVParser.SWITCH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DIVParser.FRAME - 32)) | (1 << (DIVParser.BREAK - 32)) | (1 << (DIVParser.CONTINUE - 32)) | (1 << (DIVParser.CLONE - 32)) | (1 << (DIVParser.DEBUG - 32)) | (1 << (DIVParser.SEMICOLON - 32)) | (1 << (DIVParser.LBRACKET - 32)) | (1 << (DIVParser.LPAREN - 32)) | (1 << (DIVParser.HAT - 32)) | (1 << (DIVParser.AMP - 32)) | (1 << (DIVParser.NEG - 32)) | (1 << (DIVParser.POINTER - 32)) | (1 << (DIVParser.OFFSET - 32)) | (1 << (DIVParser.NOT - 32)) | (1 << (DIVParser.ADD - 32)) | (1 << (DIVParser.SUB - 32)) | (1 << (DIVParser.MUL - 32)) | (1 << (DIVParser.INC - 32)) | (1 << (DIVParser.DEC - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (DIVParser.SIZEOF - 69)) | (1 << (DIVParser.TYPE - 69)) | (1 << (DIVParser.ID - 69)) | (1 << (DIVParser.Number - 69)) | (1 << (DIVParser.StringLiteral - 69)) | (1 << (DIVParser.Identifier - 69)))) !== 0)) {
						{
						{
						this.state = 606;
						this.statement();
						}
						}
						this.state = 611;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 612;
					this.match(DIVParser.END);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 618;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 619;
			this.match(DIVParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public frameSt(): FrameStContext {
		let _localctx: FrameStContext = new FrameStContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, DIVParser.RULE_frameSt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.match(DIVParser.FRAME);
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.LPAREN) {
				{
				this.state = 622;
				this.match(DIVParser.LPAREN);
				this.state = 624;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (DIVParser.LBRACKET - 39)) | (1 << (DIVParser.LPAREN - 39)) | (1 << (DIVParser.HAT - 39)) | (1 << (DIVParser.AMP - 39)) | (1 << (DIVParser.NEG - 39)) | (1 << (DIVParser.POINTER - 39)) | (1 << (DIVParser.OFFSET - 39)) | (1 << (DIVParser.NOT - 39)) | (1 << (DIVParser.ADD - 39)) | (1 << (DIVParser.SUB - 39)) | (1 << (DIVParser.MUL - 39)) | (1 << (DIVParser.INC - 39)) | (1 << (DIVParser.DEC - 39)) | (1 << (DIVParser.SIZEOF - 39)) | (1 << (DIVParser.TYPE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (DIVParser.ID - 71)) | (1 << (DIVParser.Number - 71)) | (1 << (DIVParser.StringLiteral - 71)) | (1 << (DIVParser.Identifier - 71)))) !== 0)) {
					{
					this.state = 623;
					this.exp();
					}
				}

				this.state = 626;
				this.match(DIVParser.RPAREN);
				}
			}

			this.state = 629;
			this.sc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public debugSt(): DebugStContext {
		let _localctx: DebugStContext = new DebugStContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, DIVParser.RULE_debugSt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 631;
			this.match(DIVParser.DEBUG);
			this.state = 632;
			this.sc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public breakSt(): BreakStContext {
		let _localctx: BreakStContext = new BreakStContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, DIVParser.RULE_breakSt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.match(DIVParser.BREAK);
			this.state = 635;
			this.sc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public continueSt(): ContinueStContext {
		let _localctx: ContinueStContext = new ContinueStContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, DIVParser.RULE_continueSt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 637;
			this.match(DIVParser.CONTINUE);
			this.state = 638;
			this.sc();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cloneSt(): CloneStContext {
		let _localctx: CloneStContext = new CloneStContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, DIVParser.RULE_cloneSt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.match(DIVParser.CLONE);
			this.state = 644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << DIVParser.RETURN) | (1 << DIVParser.FROM) | (1 << DIVParser.IF) | (1 << DIVParser.LOOP) | (1 << DIVParser.WHILE) | (1 << DIVParser.REPEAT) | (1 << DIVParser.FOR) | (1 << DIVParser.SWITCH))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (DIVParser.FRAME - 32)) | (1 << (DIVParser.BREAK - 32)) | (1 << (DIVParser.CONTINUE - 32)) | (1 << (DIVParser.CLONE - 32)) | (1 << (DIVParser.DEBUG - 32)) | (1 << (DIVParser.SEMICOLON - 32)) | (1 << (DIVParser.LBRACKET - 32)) | (1 << (DIVParser.LPAREN - 32)) | (1 << (DIVParser.HAT - 32)) | (1 << (DIVParser.AMP - 32)) | (1 << (DIVParser.NEG - 32)) | (1 << (DIVParser.POINTER - 32)) | (1 << (DIVParser.OFFSET - 32)) | (1 << (DIVParser.NOT - 32)) | (1 << (DIVParser.ADD - 32)) | (1 << (DIVParser.SUB - 32)) | (1 << (DIVParser.MUL - 32)) | (1 << (DIVParser.INC - 32)) | (1 << (DIVParser.DEC - 32)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (DIVParser.SIZEOF - 69)) | (1 << (DIVParser.TYPE - 69)) | (1 << (DIVParser.ID - 69)) | (1 << (DIVParser.Number - 69)) | (1 << (DIVParser.StringLiteral - 69)) | (1 << (DIVParser.Identifier - 69)))) !== 0)) {
				{
				{
				this.state = 641;
				this.statement();
				}
				}
				this.state = 646;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 647;
			this.match(DIVParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sc(): ScContext {
		let _localctx: ScContext = new ScContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, DIVParser.RULE_sc);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 649;
			this.match(DIVParser.SEMICOLON);
			this.state = 653;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 650;
					_la = this._input.LA(1);
					if (!(_la === DIVParser.SEMICOLON || _la === DIVParser.COMMA)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					}
					}
				}
				this.state = 655;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, DIVParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 656;
			this.exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, DIVParser.RULE_constant);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this.exp();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exp(): ExpContext {
		let _localctx: ExpContext = new ExpContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, DIVParser.RULE_exp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 660;
			this.eAssign();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eAssign(): EAssignContext {
		let _localctx: EAssignContext = new EAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, DIVParser.RULE_eAssign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this.eLogic();
			this.state = 666;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				{
				this.state = 663;
				this.assignOp();
				this.state = 664;
				this.eLogic();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignOp(): AssignOpContext {
		let _localctx: AssignOpContext = new AssignOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, DIVParser.RULE_assignOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 668;
			_la = this._input.LA(1);
			if (!(_la === DIVParser.ASSIGN || ((((_la - 74)) & ~0x1F) === 0 && ((1 << (_la - 74)) & ((1 << (DIVParser.ADDASSIG - 74)) | (1 << (DIVParser.SUBASSIG - 74)) | (1 << (DIVParser.MULASSIG - 74)) | (1 << (DIVParser.DIVASSIG - 74)) | (1 << (DIVParser.MODASSIG - 74)) | (1 << (DIVParser.ANDASSIG - 74)) | (1 << (DIVParser.ORASSIG - 74)) | (1 << (DIVParser.XORASSIG - 74)) | (1 << (DIVParser.SHRASSIG - 74)) | (1 << (DIVParser.SHLASSIG - 74)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eLogic(): ELogicContext {
		let _localctx: ELogicContext = new ELogicContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, DIVParser.RULE_eLogic);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 670;
			this.eCompar();
			this.state = 676;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 671;
					this.logicOp();
					this.state = 672;
					this.eCompar();
					}
					}
				}
				this.state = 678;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 88, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logicOp(): LogicOpContext {
		let _localctx: LogicOpContext = new LogicOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, DIVParser.RULE_logicOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 679;
			_la = this._input.LA(1);
			if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (DIVParser.OR - 47)) | (1 << (DIVParser.XOR - 47)) | (1 << (DIVParser.AND - 47)) | (1 << (DIVParser.HAT - 47)) | (1 << (DIVParser.AMP - 47)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eCompar(): EComparContext {
		let _localctx: EComparContext = new EComparContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, DIVParser.RULE_eCompar);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.eShift();
			this.state = 687;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 682;
					this.comparOp();
					this.state = 683;
					this.eShift();
					}
					}
				}
				this.state = 689;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 89, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparOp(): ComparOpContext {
		let _localctx: ComparOpContext = new ComparOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, DIVParser.RULE_comparOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			_la = this._input.LA(1);
			if (!(((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & ((1 << (DIVParser.EQ - 63)) | (1 << (DIVParser.NE - 63)) | (1 << (DIVParser.GT - 63)) | (1 << (DIVParser.LT - 63)) | (1 << (DIVParser.LE - 63)) | (1 << (DIVParser.GE - 63)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eShift(): EShiftContext {
		let _localctx: EShiftContext = new EShiftContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, DIVParser.RULE_eShift);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.eAdd();
			this.state = 697;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 693;
					_la = this._input.LA(1);
					if (!(_la === DIVParser.RSHIFT || _la === DIVParser.LSHIFT)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 694;
					this.eAdd();
					}
					}
				}
				this.state = 699;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eAdd(): EAddContext {
		let _localctx: EAddContext = new EAddContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, DIVParser.RULE_eAdd);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 700;
			this.eMul();
			this.state = 705;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 701;
					_la = this._input.LA(1);
					if (!(_la === DIVParser.ADD || _la === DIVParser.SUB)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 702;
					this.eMul();
					}
					}
				}
				this.state = 707;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 91, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eMul(): EMulContext {
		let _localctx: EMulContext = new EMulContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, DIVParser.RULE_eMul);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.eUnary();
			this.state = 713;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 709;
					_la = this._input.LA(1);
					if (!(((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & ((1 << (DIVParser.MUL - 58)) | (1 << (DIVParser.DIV - 58)) | (1 << (DIVParser.MOD - 58)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 710;
					this.eUnary();
					}
					}
				}
				this.state = 715;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eUnary(): EUnaryContext {
		let _localctx: EUnaryContext = new EUnaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, DIVParser.RULE_eUnary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 719;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (DIVParser.HAT - 50)) | (1 << (DIVParser.AMP - 50)) | (1 << (DIVParser.NEG - 50)) | (1 << (DIVParser.POINTER - 50)) | (1 << (DIVParser.OFFSET - 50)) | (1 << (DIVParser.NOT - 50)) | (1 << (DIVParser.ADD - 50)) | (1 << (DIVParser.SUB - 50)) | (1 << (DIVParser.MUL - 50)) | (1 << (DIVParser.INC - 50)) | (1 << (DIVParser.DEC - 50)))) !== 0)) {
				{
				{
				this.state = 716;
				_la = this._input.LA(1);
				if (!(((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (DIVParser.HAT - 50)) | (1 << (DIVParser.AMP - 50)) | (1 << (DIVParser.NEG - 50)) | (1 << (DIVParser.POINTER - 50)) | (1 << (DIVParser.OFFSET - 50)) | (1 << (DIVParser.NOT - 50)) | (1 << (DIVParser.ADD - 50)) | (1 << (DIVParser.SUB - 50)) | (1 << (DIVParser.MUL - 50)) | (1 << (DIVParser.INC - 50)) | (1 << (DIVParser.DEC - 50)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 722;
			this.eDot();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eDot(): EDotContext {
		let _localctx: EDotContext = new EDotContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, DIVParser.RULE_eDot);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.ePostUnary();
			this.state = 729;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 725;
					this.match(DIVParser.DOT);
					this.state = 726;
					this.ePostUnary();
					}
					}
				}
				this.state = 731;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 94, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ePostUnary(): EPostUnaryContext {
		let _localctx: EPostUnaryContext = new EPostUnaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, DIVParser.RULE_ePostUnary);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 732;
			this.eAtom();
			this.state = 734;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 733;
				_la = this._input.LA(1);
				if (!(_la === DIVParser.INC || _la === DIVParser.DEC)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eAtom(): EAtomContext {
		let _localctx: EAtomContext = new EAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, DIVParser.RULE_eAtom);
		let _la: number;
		try {
			this.state = 783;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DIVParser.LPAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 736;
				this.match(DIVParser.LPAREN);
				this.state = 737;
				this.exp();
				this.state = 738;
				this.match(DIVParser.RPAREN);
				}
				break;
			case DIVParser.LBRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 740;
				this.match(DIVParser.LBRACKET);
				this.state = 741;
				this.exp();
				this.state = 742;
				this.match(DIVParser.RBRACKET);
				}
				break;
			case DIVParser.ID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 744;
				this.match(DIVParser.ID);
				}
				break;
			case DIVParser.Number:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 745;
				this.match(DIVParser.Number);
				}
				break;
			case DIVParser.StringLiteral:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 746;
				this.match(DIVParser.StringLiteral);
				}
				break;
			case DIVParser.TYPE:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 747;
				this.match(DIVParser.TYPE);
				this.state = 748;
				this.match(DIVParser.Identifier);
				}
				break;
			case DIVParser.SIZEOF:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 749;
				this.match(DIVParser.SIZEOF);
				this.state = 750;
				this.match(DIVParser.LPAREN);
				this.state = 751;
				this.match(DIVParser.Identifier);
				this.state = 752;
				this.match(DIVParser.RPAREN);
				}
				break;
			case DIVParser.Identifier:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 753;
				this.match(DIVParser.Identifier);
				this.state = 781;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DIVParser.LPAREN:
					{
					this.state = 754;
					this.match(DIVParser.LPAREN);
					this.state = 763;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (DIVParser.LBRACKET - 39)) | (1 << (DIVParser.LPAREN - 39)) | (1 << (DIVParser.HAT - 39)) | (1 << (DIVParser.AMP - 39)) | (1 << (DIVParser.NEG - 39)) | (1 << (DIVParser.POINTER - 39)) | (1 << (DIVParser.OFFSET - 39)) | (1 << (DIVParser.NOT - 39)) | (1 << (DIVParser.ADD - 39)) | (1 << (DIVParser.SUB - 39)) | (1 << (DIVParser.MUL - 39)) | (1 << (DIVParser.INC - 39)) | (1 << (DIVParser.DEC - 39)) | (1 << (DIVParser.SIZEOF - 39)) | (1 << (DIVParser.TYPE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (DIVParser.ID - 71)) | (1 << (DIVParser.Number - 71)) | (1 << (DIVParser.StringLiteral - 71)) | (1 << (DIVParser.Identifier - 71)))) !== 0)) {
						{
						this.state = 755;
						this.exp();
						this.state = 760;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === DIVParser.COMMA) {
							{
							{
							this.state = 756;
							this.match(DIVParser.COMMA);
							this.state = 757;
							this.exp();
							}
							}
							this.state = 762;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						}
					}

					this.state = 765;
					this.match(DIVParser.RPAREN);
					}
					break;
				case DIVParser.LBRACKET:
					{
					this.state = 766;
					this.match(DIVParser.LBRACKET);
					this.state = 767;
					this.exp();
					this.state = 774;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIVParser.COMMA) {
						{
						this.state = 768;
						this.match(DIVParser.COMMA);
						this.state = 769;
						this.exp();
						this.state = 772;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === DIVParser.COMMA) {
							{
							this.state = 770;
							this.match(DIVParser.COMMA);
							this.state = 771;
							this.exp();
							}
						}

						}
					}

					this.state = 776;
					this.match(DIVParser.RBRACKET);
					this.state = 779;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
					case 1:
						{
						this.state = 777;
						this.match(DIVParser.DOT);
						this.state = 778;
						this.structAtom();
						}
						break;
					}
					}
					break;
				case DIVParser.GLOBAL:
				case DIVParser.LOCAL:
				case DIVParser.BEGIN:
				case DIVParser.END:
				case DIVParser.PRIVATE:
				case DIVParser.STRUCT:
				case DIVParser.STRING:
				case DIVParser.BYTE:
				case DIVParser.WORD:
				case DIVParser.INT:
				case DIVParser.TO:
				case DIVParser.STEP:
				case DIVParser.SEMICOLON:
				case DIVParser.COMMA:
				case DIVParser.RBRACKET:
				case DIVParser.ASSIGN:
				case DIVParser.DUP:
				case DIVParser.RPAREN:
				case DIVParser.RSHIFT:
				case DIVParser.LSHIFT:
				case DIVParser.OR:
				case DIVParser.XOR:
				case DIVParser.AND:
				case DIVParser.HAT:
				case DIVParser.AMP:
				case DIVParser.POINTER:
				case DIVParser.ADD:
				case DIVParser.SUB:
				case DIVParser.MUL:
				case DIVParser.DIV:
				case DIVParser.MOD:
				case DIVParser.INC:
				case DIVParser.DEC:
				case DIVParser.EQ:
				case DIVParser.NE:
				case DIVParser.GT:
				case DIVParser.LT:
				case DIVParser.LE:
				case DIVParser.GE:
				case DIVParser.DOT:
				case DIVParser.RANGE:
				case DIVParser.ADDASSIG:
				case DIVParser.SUBASSIG:
				case DIVParser.MULASSIG:
				case DIVParser.DIVASSIG:
				case DIVParser.MODASSIG:
				case DIVParser.ANDASSIG:
				case DIVParser.ORASSIG:
				case DIVParser.XORASSIG:
				case DIVParser.SHRASSIG:
				case DIVParser.SHLASSIG:
				case DIVParser.Identifier:
					break;
				default:
					break;
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public structAtom(): StructAtomContext {
		let _localctx: StructAtomContext = new StructAtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, DIVParser.RULE_structAtom);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.match(DIVParser.Identifier);
			this.state = 796;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.LBRACKET) {
				{
				this.state = 786;
				this.match(DIVParser.LBRACKET);
				this.state = 787;
				this.exp();
				this.state = 794;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
				case 1:
					{
					this.state = 788;
					this.match(DIVParser.COMMA);
					this.state = 789;
					this.exp();
					this.state = 792;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
					case 1:
						{
						this.state = 790;
						this.match(DIVParser.COMMA);
						this.state = 791;
						this.exp();
						}
						break;
					}
					}
					break;
				}
				}
			}

			this.state = 800;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 798;
				this.match(DIVParser.DOT);
				this.state = 799;
				this.structAtom();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pointerSuffix(): PointerSuffixContext {
		let _localctx: PointerSuffixContext = new PointerSuffixContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, DIVParser.RULE_pointerSuffix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 802;
			this.match(DIVParser.Identifier);
			this.state = 815;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === DIVParser.LBRACKET) {
				{
				this.state = 803;
				this.match(DIVParser.LBRACKET);
				this.state = 804;
				this.constant();
				this.state = 811;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === DIVParser.COMMA) {
					{
					this.state = 805;
					this.match(DIVParser.COMMA);
					this.state = 806;
					this.constant();
					this.state = 809;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIVParser.COMMA) {
						{
						this.state = 807;
						this.match(DIVParser.COMMA);
						this.state = 808;
						this.constant();
						}
					}

					}
				}

				this.state = 813;
				this.match(DIVParser.RBRACKET);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, DIVParser.RULE_parameter);
		let _la: number;
		try {
			this.state = 854;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case DIVParser.STRUCT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 817;
				this.match(DIVParser.STRUCT);
				this.state = 818;
				this.match(DIVParser.POINTER);
				this.state = 819;
				this.pointerSuffix();
				}
				break;
			case DIVParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 820;
				this.match(DIVParser.STRING);
				this.state = 831;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DIVParser.POINTER:
					{
					this.state = 821;
					this.match(DIVParser.POINTER);
					this.state = 822;
					this.pointerSuffix();
					}
					break;
				case DIVParser.Identifier:
					{
					this.state = 823;
					this.match(DIVParser.Identifier);
					this.state = 829;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === DIVParser.LBRACKET) {
						{
						this.state = 824;
						this.match(DIVParser.LBRACKET);
						this.state = 826;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (DIVParser.LBRACKET - 39)) | (1 << (DIVParser.LPAREN - 39)) | (1 << (DIVParser.HAT - 39)) | (1 << (DIVParser.AMP - 39)) | (1 << (DIVParser.NEG - 39)) | (1 << (DIVParser.POINTER - 39)) | (1 << (DIVParser.OFFSET - 39)) | (1 << (DIVParser.NOT - 39)) | (1 << (DIVParser.ADD - 39)) | (1 << (DIVParser.SUB - 39)) | (1 << (DIVParser.MUL - 39)) | (1 << (DIVParser.INC - 39)) | (1 << (DIVParser.DEC - 39)) | (1 << (DIVParser.SIZEOF - 39)) | (1 << (DIVParser.TYPE - 39)))) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & ((1 << (DIVParser.ID - 71)) | (1 << (DIVParser.Number - 71)) | (1 << (DIVParser.StringLiteral - 71)) | (1 << (DIVParser.Identifier - 71)))) !== 0)) {
							{
							this.state = 825;
							this.constant();
							}
						}

						this.state = 828;
						this.match(DIVParser.RBRACKET);
						}
					}

					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case DIVParser.BYTE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 833;
				this.match(DIVParser.BYTE);
				this.state = 837;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DIVParser.POINTER:
					{
					this.state = 834;
					this.match(DIVParser.POINTER);
					this.state = 835;
					this.pointerSuffix();
					}
					break;
				case DIVParser.Identifier:
					{
					this.state = 836;
					this.match(DIVParser.Identifier);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case DIVParser.WORD:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 839;
				this.match(DIVParser.WORD);
				this.state = 843;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DIVParser.POINTER:
					{
					this.state = 840;
					this.match(DIVParser.POINTER);
					this.state = 841;
					this.pointerSuffix();
					}
					break;
				case DIVParser.Identifier:
					{
					this.state = 842;
					this.match(DIVParser.Identifier);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case DIVParser.INT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 845;
				this.match(DIVParser.INT);
				this.state = 849;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case DIVParser.POINTER:
					{
					this.state = 846;
					this.match(DIVParser.POINTER);
					this.state = 847;
					this.pointerSuffix();
					}
					break;
				case DIVParser.Identifier:
					{
					this.state = 848;
					this.match(DIVParser.Identifier);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case DIVParser.POINTER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 851;
				this.match(DIVParser.POINTER);
				this.state = 852;
				this.pointerSuffix();
				}
				break;
			case DIVParser.Identifier:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 853;
				this.match(DIVParser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03^\u035B\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x03\x02\x05\x02l\n\x02\x03\x02\x03\x02\x07\x02p\n\x02\f\x02" +
		"\x0E\x02s\v\x02\x03\x02\x05\x02v\n\x02\x03\x02\x05\x02y\n\x02\x03\x02" +
		"\x05\x02|\n\x02\x03\x02\x05\x02\x7F\n\x02\x03\x02\x03\x02\x07\x02\x83" +
		"\n\x02\f\x02\x0E\x02\x86\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x07\x03\x8D\n\x03\f\x03\x0E\x03\x90\v\x03\x03\x03\x03\x03\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x07" +
		"\x06\x9E\n\x06\f\x06\x0E\x06\xA1\v\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x07\x06\xA7\n\x06\f\x06\x0E\x06\xAA\v\x06\x07\x06\xAC\n\x06\f\x06\x0E" +
		"\x06\xAF\v\x06\x03\x07\x03\x07\x07\x07\xB3\n\x07\f\x07\x0E\x07\xB6\v\x07" +
		"\x03\x07\x07\x07\xB9\n\x07\f\x07\x0E\x07\xBC\v\x07\x03\b\x03\b\x07\b\xC0" +
		"\n\b\f\b\x0E\b\xC3\v\b\x03\b\x07\b\xC6\n\b\f\b\x0E\b\xC9\v\b\x03\t\x03" +
		"\t\x07\t\xCD\n\t\f\t\x0E\t\xD0\v\t\x03\t\x07\t\xD3\n\t\f\t\x0E\t\xD6\v" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xDE\n\n\x03\n\x03\n\x03\n" +
		"\x05\n\xE3\n\n\x03\n\x07\n\xE6\n\n\f\n\x0E\n\xE9\v\n\x05\n\xEB\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x07\n\xF1\n\n\f\n\x0E\n\xF4\v\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x07\n\xFC\n\n\f\n\x0E\n\xFF\v\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x07\n\u0107\n\n\f\n\x0E\n\u010A\v\n\x03\n\x03\n\x03\n\x05" +
		"\n\u010F\n\n\x03\n\x03\n\x06\n\u0113\n\n\r\n\x0E\n\u0114\x05\n\u0117\n" +
		"\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\u011F\n\v\x05\v\u0121\n\v" +
		"\x05\v\u0123\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x05\f\u012B\n\f\x03" +
		"\f\x05\f\u012E\n\f\x03\f\x03\f\x05\f\u0132\n\f\x05\f\u0134\n\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u013B\n\r\x03\r\x03\r\x05\r\u013F\n\r\x05\r" +
		"\u0141\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0147\n\x0E\x03\x0E" +
		"\x03\x0E\x05\x0E\u014B\n\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u0150\n\x0E" +
		"\x07\x0E\u0152\n\x0E\f\x0E\x0E\x0E\u0155\v\x0E\x03\x0F\x05\x0F\u0158\n" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u015C\n\x0F\x07\x0F\u015E\n\x0F\f\x0F\x0E" +
		"\x0F\u0161\v\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u0167\n\x10\x03" +
		"\x10\x03\x10\x05\x10\u016B\n\x10\x07\x10\u016D\n\x10\f\x10\x0E\x10\u0170" +
		"\v\x10\x03\x10\x05\x10\u0173\n\x10\x03\x11\x07\x11\u0176\n\x11\f\x11\x0E" +
		"\x11\u0179\v\x11\x03\x11\x07\x11\u017C\n\x11\f\x11\x0E\x11\u017F\v\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x07\x12" +
		"\u0189\n\x12\f\x12\x0E\x12\u018C\v\x12\x05\x12\u018E\n\x12\x03\x12\x03" +
		"\x12\x07\x12\u0192\n\x12\f\x12\x0E\x12\u0195\v\x12\x03\x12\x05\x12\u0198" +
		"\n\x12\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13\u019E\n\x13\f\x13\x0E\x13" +
		"\u01A1\v\x13\x03\x13\x03\x13\x07\x13\u01A5\n\x13\f\x13\x0E\x13\u01A8\v" +
		"\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05" +
		"\x14\u01BB\n\x14\x03\x15\x03\x15\x03\x15\x05\x15\u01C0\n\x15\x03\x15\x05" +
		"\x15\u01C3\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16" +
		"\x07\x16\u01CC\n\x16\f\x16\x0E\x16\u01CF\v\x16\x03\x16\x03\x16\x07\x16" +
		"\u01D3\n\x16\f\x16\x0E\x16\u01D6\v\x16\x05\x16\u01D8\n\x16\x03\x16\x03" +
		"\x16\x03\x17\x03\x17\x07\x17\u01DE\n\x17\f\x17\x0E\x17\u01E1\v\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x07\x18\u01EA\n\x18" +
		"\f\x18\x0E\x18\u01ED\v\x18\x03\x18\x03\x18\x03\x19\x03\x19\x07\x19\u01F3" +
		"\n\x19\f\x19\x0E\x19\u01F6\v\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19" +
		"\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A" +
		"\u0205\n\x1A\x03\x1A\x03\x1A\x07\x1A\u0209\n\x1A\f\x1A\x0E\x1A\u020C\v" +
		"\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u0215" +
		"\n\x1B\f\x1B\x0E\x1B\u0218\v\x1B\x05\x1B\u021A\n\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u0220\n\x1B\f\x1B\x0E\x1B\u0223\v\x1B\x05\x1B\u0225" +
		"\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x07\x1B\u022B\n\x1B\f\x1B\x0E\x1B" +
		"\u022E\v\x1B\x05\x1B\u0230\n\x1B\x03\x1B\x03\x1B\x07\x1B\u0234\n\x1B\f" +
		"\x1B\x0E\x1B\u0237\v\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x07\x1C\u0240\n\x1C\f\x1C\x0E\x1C\u0243\v\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x05\x1C\u0249\n\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u024F\n\x1C\x07\x1C\u0251\n\x1C\f\x1C\x0E\x1C\u0254\v\x1C\x03\x1C" +
		"\x03\x1C\x07\x1C\u0258\n\x1C\f\x1C\x0E\x1C\u025B\v\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0262\n\x1C\f\x1C\x0E\x1C\u0265\v\x1C" +
		"\x03\x1C\x03\x1C\x07\x1C\u0269\n\x1C\f\x1C\x0E\x1C\u026C\v\x1C\x03\x1C" +
		"\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u0273\n\x1D\x03\x1D\x05\x1D\u0276" +
		"\n\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x03 \x03 \x03 \x03!\x03!\x07!\u0285\n!\f!\x0E!\u0288\v!\x03!\x03!\x03" +
		"\"\x03\"\x07\"\u028E\n\"\f\"\x0E\"\u0291\v\"\x03#\x03#\x03$\x03$\x03%" +
		"\x03%\x03&\x03&\x03&\x03&\x05&\u029D\n&\x03\'\x03\'\x03(\x03(\x03(\x03" +
		"(\x07(\u02A5\n(\f(\x0E(\u02A8\v(\x03)\x03)\x03*\x03*\x03*\x03*\x07*\u02B0" +
		"\n*\f*\x0E*\u02B3\v*\x03+\x03+\x03,\x03,\x03,\x07,\u02BA\n,\f,\x0E,\u02BD" +
		"\v,\x03-\x03-\x03-\x07-\u02C2\n-\f-\x0E-\u02C5\v-\x03.\x03.\x03.\x07." +
		"\u02CA\n.\f.\x0E.\u02CD\v.\x03/\x07/\u02D0\n/\f/\x0E/\u02D3\v/\x03/\x03" +
		"/\x030\x030\x030\x070\u02DA\n0\f0\x0E0\u02DD\v0\x031\x031\x051\u02E1\n" +
		"1\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x032\x03" +
		"2\x032\x032\x032\x032\x032\x032\x032\x032\x072\u02F9\n2\f2\x0E2\u02FC" +
		"\v2\x052\u02FE\n2\x032\x032\x032\x032\x032\x032\x032\x052\u0307\n2\x05" +
		"2\u0309\n2\x032\x032\x032\x052\u030E\n2\x052\u0310\n2\x052\u0312\n2\x03" +
		"3\x033\x033\x033\x033\x033\x033\x053\u031B\n3\x053\u031D\n3\x053\u031F" +
		"\n3\x033\x033\x053\u0323\n3\x034\x034\x034\x034\x034\x034\x034\x054\u032C" +
		"\n4\x054\u032E\n4\x034\x034\x054\u0332\n4\x035\x035\x035\x035\x035\x03" +
		"5\x035\x035\x035\x055\u033D\n5\x035\x055\u0340\n5\x055\u0342\n5\x035\x03" +
		"5\x035\x035\x055\u0348\n5\x035\x035\x035\x035\x055\u034E\n5\x035\x035" +
		"\x035\x035\x055\u0354\n5\x035\x035\x035\x055\u0359\n5\x035\x02\x02\x02" +
		"6\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02" +
		"F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02" +
		"b\x02d\x02f\x02h\x02\x02\x0E\x04\x02\x03\x03\r\r\x03\x02WX\x03\x02\'(" +
		"\x04\x02\t\t\x13\x13\x04\x02++LU\x03\x0215\x03\x02AF\x03\x02/0\x03\x02" +
		":;\x03\x02<>\x04\x024<?@\x03\x02?@\x02\u03B8\x02k\x03\x02\x02\x02\x04" +
		"\x87\x03\x02\x02\x02\x06\x93\x03\x02\x02\x02\b\x97\x03\x02\x02\x02\n\x9B" +
		"\x03\x02\x02\x02\f\xB0\x03\x02\x02\x02\x0E\xBD\x03\x02\x02\x02\x10\xCA" +
		"\x03\x02\x02\x02\x12\u0116\x03\x02\x02\x02\x14\u0118\x03\x02\x02\x02\x16" +
		"\u0133\x03\x02\x02\x02\x18\u0140\x03\x02\x02\x02\x1A\u0142\x03\x02\x02" +
		"\x02\x1C\u0157\x03\x02\x02\x02\x1E\u0162\x03\x02\x02\x02 \u0177\x03\x02" +
		"\x02\x02\"\u0182\x03\x02\x02\x02$\u019B\x03\x02\x02\x02&\u01BA\x03\x02" +
		"\x02\x02(\u01BC\x03\x02\x02\x02*\u01C6\x03\x02\x02\x02,\u01DB\x03\x02" +
		"\x02\x02.\u01E4\x03\x02\x02\x020\u01F0\x03\x02\x02\x022\u01FC\x03\x02" +
		"\x02\x024\u020F\x03\x02\x02\x026\u023A\x03\x02\x02\x028\u026F\x03\x02" +
		"\x02\x02:\u0279\x03\x02\x02\x02<\u027C\x03\x02\x02\x02>\u027F\x03\x02" +
		"\x02\x02@\u0282\x03\x02\x02\x02B\u028B\x03\x02\x02\x02D\u0292\x03\x02" +
		"\x02\x02F\u0294\x03\x02\x02\x02H\u0296\x03\x02\x02\x02J\u0298\x03\x02" +
		"\x02\x02L\u029E\x03\x02\x02\x02N\u02A0\x03\x02\x02\x02P\u02A9\x03\x02" +
		"\x02\x02R\u02AB\x03\x02\x02\x02T\u02B4\x03\x02\x02\x02V\u02B6\x03\x02" +
		"\x02\x02X\u02BE\x03\x02\x02\x02Z\u02C6\x03\x02\x02\x02\\\u02D1\x03\x02" +
		"\x02\x02^\u02D6\x03\x02\x02\x02`\u02DE\x03\x02\x02\x02b\u0311\x03\x02" +
		"\x02\x02d\u0313\x03\x02\x02\x02f\u0324\x03\x02\x02\x02h\u0358\x03\x02" +
		"\x02\x02jl\x05\x04\x03\x02kj\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x03\x02" +
		"\x02\x02mq\x05\x06\x04\x02np\x05\b\x05\x02on\x03\x02\x02\x02ps\x03\x02" +
		"\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02\x02ru\x03\x02\x02\x02sq\x03\x02" +
		"\x02\x02tv\x05\n\x06\x02ut\x03\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02" +
		"\x02\x02wy\x05\f\x07\x02xw\x03\x02\x02\x02xy\x03\x02\x02\x02y{\x03\x02" +
		"\x02\x02z|\x05\x0E\b\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|~\x03\x02" +
		"\x02\x02}\x7F\x05\x10\t\x02~}\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F" +
		"\x80\x03\x02\x02\x02\x80\x84\x05$\x13\x02\x81\x83\x05\"\x12\x02\x82\x81" +
		"\x03\x02\x02\x02\x83\x86\x03\x02\x02\x02\x84\x82\x03\x02\x02\x02\x84\x85" +
		"\x03\x02\x02\x02\x85\x03\x03\x02\x02\x02\x86\x84\x03\x02\x02\x02\x87\x8E" +
		"\x07\x12\x02\x02\x88\x8D\x07(\x02\x02\x89\x8A\x07X\x02\x02\x8A\x8B\x07" +
		"+\x02\x02\x8B\x8D\x05F$\x02\x8C\x88\x03\x02\x02\x02\x8C\x89\x03\x02\x02" +
		"\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8F\x03\x02\x02" +
		"\x02\x8F\x91\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x92\x07\'\x02" +
		"\x02\x92\x05\x03\x02\x02\x02\x93\x94\t\x02\x02\x02\x94\x95\x07X\x02\x02" +
		"\x95\x96\x05B\"\x02\x96\x07\x03\x02\x02\x02\x97\x98\x07\f\x02\x02\x98" +
		"\x99\t\x03\x02\x02\x99\x9A\x07\'\x02\x02\x9A\t\x03\x02\x02\x02\x9B\x9F" +
		"\x07\x04\x02\x02\x9C\x9E\x07\'\x02\x02\x9D\x9C\x03\x02\x02\x02\x9E\xA1" +
		"\x03\x02\x02\x02\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xAD" +
		"\x03\x02\x02\x02\xA1\x9F\x03\x02\x02\x02\xA2\xA3\x07X\x02\x02\xA3\xA4" +
		"\x07+\x02\x02\xA4\xA8\x05F$\x02\xA5\xA7\t\x04\x02\x02\xA6\xA5\x03\x02" +
		"\x02\x02\xA7\xAA\x03\x02\x02\x02\xA8\xA6\x03\x02\x02\x02\xA8\xA9\x03\x02" +
		"\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAB\xA2\x03\x02" +
		"\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02" +
		"\x02\x02\xAE\v\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0\xB4\x07\x05" +
		"\x02\x02\xB1\xB3\x07\'\x02\x02\xB2\xB1\x03\x02\x02\x02\xB3\xB6\x03\x02" +
		"\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xBA\x03\x02" +
		"\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\xB9\x05\x12\n\x02\xB8\xB7\x03\x02" +
		"\x02\x02\xB9\xBC\x03\x02\x02\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02" +
		"\x02\x02\xBB\r\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC1\x07\x06" +
		"\x02\x02\xBE\xC0\x07\'\x02\x02\xBF\xBE\x03\x02\x02\x02\xC0\xC3\x03\x02" +
		"\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC7\x03\x02" +
		"\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC6\x05\x12\n\x02\xC5\xC4\x03\x02" +
		"\x02\x02\xC6\xC9\x03\x02\x02\x02\xC7\xC5\x03\x02\x02\x02\xC7\xC8\x03\x02" +
		"\x02\x02\xC8\x0F\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xCA\xCE\x07\n" +
		"\x02\x02\xCB\xCD\x07\'\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD\xD0\x03\x02" +
		"\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD4\x03\x02" +
		"\x02\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD3\x05\x12\n\x02\xD2\xD1\x03\x02" +
		"\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02" +
		"\x02\x02\xD5\x11\x03\x02\x02\x02\xD6\xD4\x03\x02\x02\x02\xD7\xEA\x07\v" +
		"\x02\x02\xD8\xD9\x05\x1A\x0E\x02\xD9\xDA\x05B\"\x02\xDA\xEB\x03\x02\x02" +
		"\x02\xDB\xDD\x07X\x02\x02\xDC\xDE\x05\x14\v\x02\xDD\xDC\x03\x02\x02\x02" +
		"\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE2\x05 \x11\x02" +
		"\xE0\xE1\x07+\x02\x02\xE1\xE3\x05\x1C\x0F\x02\xE2\xE0\x03\x02\x02\x02" +
		"\xE2\xE3\x03\x02\x02\x02\xE3\xE7\x03\x02\x02\x02\xE4\xE6\x07\'\x02\x02" +
		"\xE5\xE4\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02" +
		"\xE7\xE8\x03\x02\x02\x02\xE8\xEB\x03\x02\x02\x02\xE9\xE7\x03\x02\x02\x02" +
		"\xEA\xD8\x03\x02\x02\x02\xEA\xDB\x03\x02\x02\x02\xEB\u0117\x03\x02\x02" +
		"\x02\xEC\xED\x07\x0E\x02\x02\xED\xF2\x05\x16\f\x02\xEE\xEF\x07(\x02\x02" +
		"\xEF\xF1\x05\x16\f\x02\xF0\xEE\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02" +
		"\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF5\x03\x02\x02\x02" +
		"\xF4\xF2\x03\x02\x02\x02\xF5\xF6\x05B\"\x02\xF6\u0117\x03\x02\x02\x02" +
		"\xF7\xF8\x07\x0F\x02\x02\xF8\xFD\x05\x18\r\x02\xF9\xFA\x07(\x02\x02\xFA" +
		"\xFC\x05\x18\r\x02\xFB\xF9\x03\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD" +
		"\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\u0100\x03\x02\x02\x02" +
		"\xFF\xFD\x03\x02\x02\x02\u0100\u0101\x05B\"\x02\u0101\u0117\x03\x02\x02" +
		"\x02\u0102\u0103\x07\x10\x02\x02\u0103\u0108\x05\x18\r\x02\u0104\u0105" +
		"\x07(\x02\x02\u0105\u0107\x05\x18\r\x02\u0106\u0104\x03\x02\x02\x02\u0107" +
		"\u010A\x03\x02\x02\x02\u0108\u0106\x03\x02\x02\x02\u0108\u0109\x03\x02" +
		"\x02\x02\u0109\u010B\x03\x02\x02\x02\u010A\u0108\x03\x02\x02\x02\u010B" +
		"\u010C\x05B\"\x02\u010C\u0117\x03\x02\x02\x02\u010D\u010F\x07\x11\x02" +
		"\x02\u010E\u010D\x03\x02\x02\x02\u010E\u010F\x03\x02\x02\x02\u010F\u0110" +
		"\x03\x02\x02\x02\u0110\u0112\x05\x18\r\x02\u0111\u0113\t\x04\x02\x02\u0112" +
		"\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0112\x03\x02" +
		"\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116" +
		"\xD7\x03\x02\x02\x02\u0116\xEC\x03\x02\x02\x02\u0116\xF7\x03\x02\x02\x02" +
		"\u0116\u0102\x03\x02\x02\x02\u0116\u010E\x03\x02\x02\x02\u0117\x13\x03" +
		"\x02\x02\x02\u0118\u0122\x07)\x02\x02\u0119\u0120\x05F$\x02\u011A\u011B" +
		"\x07(\x02\x02\u011B\u011E\x05F$\x02\u011C\u011D\x07(\x02\x02\u011D\u011F" +
		"\x05F$\x02\u011E\u011C\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F" +
		"\u0121\x03\x02\x02\x02\u0120\u011A\x03\x02\x02\x02\u0120\u0121\x03\x02" +
		"\x02\x02\u0121\u0123\x03\x02\x02\x02\u0122\u0119\x03\x02\x02\x02\u0122" +
		"\u0123\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0125\x07*\x02" +
		"\x02\u0125\x15\x03\x02\x02\x02\u0126\u0134\x05\x1A\x0E\x02\u0127\u012D" +
		"\x07X\x02\x02\u0128\u012A\x07)\x02\x02\u0129\u012B\x05F$\x02\u012A\u0129" +
		"\x03\x02\x02\x02\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02" +
		"\u012C\u012E\x07*\x02\x02\u012D\u0128\x03\x02\x02\x02\u012D\u012E\x03" +
		"\x02\x02\x02\u012E\u0131\x03\x02\x02\x02\u012F\u0130\x07+\x02\x02\u0130" +
		"\u0132\t\x03\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131\u0132\x03\x02\x02" +
		"\x02\u0132\u0134\x03\x02\x02\x02\u0133\u0126\x03\x02\x02\x02\u0133\u0127" +
		"\x03\x02\x02\x02\u0134\x17\x03\x02\x02\x02\u0135\u0141\x05\x1A\x0E\x02" +
		"\u0136\u013E\x07X\x02\x02\u0137\u013A\x05\x14\v\x02\u0138\u0139\x07+\x02" +
		"\x02\u0139\u013B\x05\x1C\x0F\x02\u013A\u0138\x03\x02\x02\x02\u013A\u013B" +
		"\x03\x02\x02\x02\u013B\u013F\x03\x02\x02\x02\u013C\u013D\x07+\x02\x02" +
		"\u013D\u013F\x05F$\x02\u013E\u0137\x03\x02\x02\x02\u013E\u013C\x03\x02" +
		"\x02\x02\u013E\u013F\x03\x02\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140" +
		"\u0135\x03\x02\x02\x02\u0140\u0136\x03\x02\x02\x02\u0141\x19\x03\x02\x02" +
		"\x02\u0142\u0143\x077\x02\x02\u0143\u0146\x05f4\x02\u0144\u0145\x07+\x02" +
		"\x02\u0145\u0147\x05F$\x02\u0146\u0144\x03\x02\x02\x02\u0146\u0147\x03" +
		"\x02\x02\x02\u0147\u0153\x03\x02\x02\x02\u0148\u014A\x07(\x02\x02\u0149" +
		"\u014B\x077\x02\x02\u014A\u0149\x03\x02\x02\x02\u014A\u014B\x03\x02\x02" +
		"\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014F\x05f4\x02\u014D\u014E\x07" +
		"+\x02\x02\u014E\u0150\x05F$\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150" +
		"\x03\x02\x02\x02\u0150\u0152\x03\x02\x02\x02\u0151\u0148\x03\x02\x02\x02" +
		"\u0152\u0155\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03" +
		"\x02\x02\x02\u0154\x1B\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0156" +
		"\u0158\x05\x1E\x10\x02\u0157\u0156\x03\x02\x02\x02\u0157\u0158\x03\x02" +
		"\x02\x02\u0158\u015F\x03\x02\x02\x02\u0159\u015B\x07(\x02\x02\u015A\u015C" +
		"\x05\x1E\x10\x02\u015B\u015A\x03\x02\x02\x02\u015B\u015C\x03\x02\x02\x02" +
		"\u015C\u015E\x03\x02\x02\x02\u015D\u0159\x03\x02\x02\x02\u015E\u0161\x03" +
		"\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160" +
		"\x1D\x03\x02\x02\x02\u0161\u015F\x03\x02\x02\x02\u0162\u0172\x05F$\x02" +
		"\u0163\u0164\x07,\x02\x02\u0164\u0166\x07-\x02\x02\u0165\u0167\x05\x1E" +
		"\x10\x02\u0166\u0165\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167" +
		"\u016E\x03\x02\x02\x02\u0168\u016A\x07(\x02\x02\u0169\u016B\x05\x1E\x10" +
		"\x02\u016A\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\u016D" +
		"\x03\x02\x02\x02\u016C\u0168\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02" +
		"\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0171\x03" +
		"\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0173\x07.\x02\x02\u0172" +
		"\u0163\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\x1F\x03\x02\x02" +
		"\x02\u0174\u0176\x07\'\x02\x02\u0175\u0174\x03\x02\x02\x02\u0176\u0179" +
		"\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02" +
		"\u0178\u017D\x03\x02\x02\x02\u0179\u0177\x03\x02\x02\x02\u017A\u017C\x05" +
		"\x12\n\x02\u017B\u017A\x03\x02\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D" +
		"\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u0180\x03\x02" +
		"\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180\u0181\x07\b\x02\x02\u0181!" +
		"\x03\x02\x02\x02\u0182\u0183\t\x05\x02\x02\u0183\u0184\x07X\x02\x02\u0184" +
		"\u018D\x07-\x02\x02\u0185\u018A\x05h5\x02\u0186\u0187\x07(\x02\x02\u0187" +
		"\u0189\x05h5\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018C\x03\x02\x02\x02" +
		"\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018E\x03" +
		"\x02\x02\x02\u018C\u018A\x03\x02\x02\x02\u018D\u0185\x03\x02\x02\x02\u018D" +
		"\u018E\x03\x02\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F\u0193\x07.\x02" +
		"\x02\u0190\u0192\x07\'\x02\x02\u0191\u0190\x03\x02\x02\x02\u0192\u0195" +
		"\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02" +
		"\u0194\u0197\x03\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0198\x05" +
		"\x10\t\x02\u0197\u0196\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198" +
		"\u0199\x03\x02\x02\x02\u0199\u019A\x05$\x13\x02\u019A#\x03\x02\x02\x02" +
		"\u019B\u019F\x07\x07\x02\x02\u019C\u019E\x05&\x14\x02\u019D\u019C\x03" +
		"\x02\x02\x02\u019E\u01A1\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F" +
		"\u01A0\x03\x02\x02\x02\u01A0\u01A2\x03\x02\x02\x02\u01A1\u019F\x03\x02" +
		"\x02\x02\u01A2\u01A6\x07\b\x02\x02\u01A3\u01A5\x07\'\x02\x02\u01A4\u01A3" +
		"\x03\x02\x02\x02\u01A5\u01A8\x03\x02\x02\x02\u01A6\u01A4\x03\x02\x02\x02" +
		"\u01A6\u01A7\x03\x02\x02\x02\u01A7%\x03\x02\x02\x02\u01A8\u01A6\x03\x02" +
		"\x02\x02\u01A9\u01BB\x05(\x15\x02\u01AA\u01BB\x05*\x16\x02\u01AB\u01BB" +
		"\x05,\x17\x02\u01AC\u01BB\x05.\x18\x02\u01AD\u01BB\x050\x19\x02\u01AE" +
		"\u01BB\x052\x1A\x02\u01AF\u01BB\x054\x1B\x02\u01B0\u01BB\x056\x1C\x02" +
		"\u01B1\u01BB\x058\x1D\x02\u01B2\u01BB\x05:\x1E\x02\u01B3\u01BB\x05<\x1F" +
		"\x02\u01B4\u01BB\x05> \x02\u01B5\u01BB\x05@!\x02\u01B6\u01BB\x07\'\x02" +
		"\x02\u01B7\u01B8\x05H%\x02\u01B8\u01B9\x05B\"\x02\u01B9\u01BB\x03\x02" +
		"\x02\x02\u01BA\u01A9\x03\x02\x02\x02\u01BA\u01AA\x03\x02\x02\x02\u01BA" +
		"\u01AB\x03\x02\x02\x02\u01BA\u01AC\x03\x02\x02\x02\u01BA\u01AD\x03\x02" +
		"\x02\x02\u01BA\u01AE\x03\x02\x02\x02\u01BA\u01AF\x03\x02\x02\x02\u01BA" +
		"\u01B0\x03\x02\x02\x02\u01BA\u01B1\x03\x02\x02\x02\u01BA\u01B2\x03\x02" +
		"\x02\x02\u01BA\u01B3\x03\x02\x02\x02\u01BA\u01B4\x03\x02\x02\x02\u01BA" +
		"\u01B5\x03\x02\x02\x02\u01BA\u01B6\x03\x02\x02\x02\u01BA\u01B7\x03\x02" +
		"\x02\x02\u01BB\'\x03\x02\x02\x02\u01BC\u01C2\x07\x16\x02\x02\u01BD\u01BF" +
		"\x07-\x02\x02\u01BE\u01C0\x05H%\x02\u01BF\u01BE\x03\x02\x02\x02\u01BF" +
		"\u01C0\x03\x02\x02\x02\u01C0\u01C1\x03\x02\x02\x02\u01C1\u01C3\x07.\x02" +
		"\x02\u01C2\u01BD\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4" +
		"\x03\x02\x02\x02\u01C4\u01C5\x05B\"\x02\u01C5)\x03\x02\x02\x02\u01C6\u01C7" +
		"\x07\x1A\x02\x02\u01C7\u01C8\x07-\x02\x02\u01C8\u01C9\x05D#\x02\u01C9" +
		"\u01CD\x07.\x02\x02\u01CA\u01CC\x05&\x14\x02\u01CB\u01CA\x03\x02\x02\x02" +
		"\u01CC\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03" +
		"\x02\x02\x02\u01CE\u01D7\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0" +
		"\u01D4\x07\x15\x02\x02\u01D1\u01D3\x05&\x14\x02";
	private static readonly _serializedATNSegment1: string =
		"\u01D2\u01D1\x03\x02\x02\x02\u01D3\u01D6\x03\x02\x02\x02\u01D4\u01D2\x03" +
		"\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02\u01D5\u01D8\x03\x02\x02\x02\u01D6" +
		"\u01D4\x03\x02\x02\x02\u01D7\u01D0\x03\x02\x02\x02\u01D7\u01D8\x03\x02" +
		"\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DA\x07\b\x02\x02\u01DA+" +
		"\x03\x02\x02\x02\u01DB\u01DF\x07\x1B\x02\x02\u01DC\u01DE\x05&\x14\x02" +
		"\u01DD\u01DC\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02\x02\u01DF\u01DD\x03" +
		"\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E2\x03\x02\x02\x02\u01E1" +
		"\u01DF\x03\x02\x02\x02\u01E2\u01E3\x07\b\x02\x02\u01E3-\x03\x02\x02\x02" +
		"\u01E4\u01E5\x07\x1C\x02\x02\u01E5\u01E6\x07-\x02\x02\u01E6\u01E7\x05" +
		"D#\x02\u01E7\u01EB\x07.\x02\x02\u01E8\u01EA\x05&\x14\x02\u01E9\u01E8\x03" +
		"\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB" +
		"\u01EC\x03\x02\x02\x02\u01EC\u01EE\x03\x02\x02\x02\u01ED\u01EB\x03\x02" +
		"\x02\x02\u01EE\u01EF\x07\b\x02\x02\u01EF/\x03\x02\x02\x02\u01F0\u01F4" +
		"\x07\x1D\x02\x02\u01F1\u01F3\x05&\x14\x02\u01F2\u01F1\x03\x02\x02\x02" +
		"\u01F3\u01F6\x03\x02\x02\x02\u01F4\u01F2\x03\x02\x02\x02\u01F4\u01F5\x03" +
		"\x02\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6\u01F4\x03\x02\x02\x02\u01F7" +
		"\u01F8\x07\x14\x02\x02\u01F8\u01F9\x07-\x02\x02\u01F9\u01FA\x05D#\x02" +
		"\u01FA\u01FB\x07.\x02\x02\u01FB1\x03\x02\x02\x02\u01FC\u01FD\x07\x17\x02" +
		"\x02\u01FD\u01FE\x07X\x02\x02\u01FE\u01FF\x07+\x02\x02\u01FF\u0200\x05" +
		"F$\x02\u0200\u0201\x07\x18\x02\x02\u0201\u0204\x05F$\x02\u0202\u0203\x07" +
		"\x19\x02\x02\u0203\u0205\x05F$\x02\u0204\u0202\x03\x02\x02\x02\u0204\u0205" +
		"\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02\u0206\u020A\x05B\"\x02\u0207" +
		"\u0209\x05&\x14\x02\u0208\u0207\x03\x02\x02\x02\u0209\u020C\x03\x02\x02" +
		"\x02\u020A\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B\u020D" +
		"\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020D\u020E\x07\b\x02\x02" +
		"\u020E3\x03\x02\x02\x02\u020F\u0210\x07\x1E\x02\x02\u0210\u0219\x07-\x02" +
		"\x02\u0211\u0216\x05H%\x02\u0212\u0213\x07(\x02\x02\u0213\u0215\x05H%" +
		"\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0218\x03\x02\x02\x02\u0216\u0214" +
		"\x03\x02\x02\x02\u0216\u0217\x03\x02\x02\x02\u0217\u021A\x03\x02\x02\x02" +
		"\u0218\u0216\x03\x02\x02\x02\u0219\u0211\x03\x02\x02\x02\u0219\u021A\x03" +
		"\x02\x02\x02\u021A\u021B\x03\x02\x02\x02\u021B\u0224\x07\'\x02\x02\u021C" +
		"\u0221\x05H%\x02\u021D\u021E\x07(\x02\x02\u021E\u0220\x05H%\x02\u021F" +
		"\u021D\x03\x02\x02\x02\u0220\u0223\x03\x02\x02\x02\u0221\u021F\x03\x02" +
		"\x02\x02\u0221\u0222\x03\x02\x02\x02\u0222\u0225\x03\x02\x02\x02\u0223" +
		"\u0221\x03\x02\x02\x02\u0224\u021C\x03\x02\x02\x02\u0224\u0225\x03\x02" +
		"\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u022F\x07\'\x02\x02\u0227\u022C" +
		"\x05H%\x02\u0228\u0229\x07(\x02\x02\u0229\u022B\x05H%\x02\u022A\u0228" +
		"\x03\x02\x02\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02" +
		"\u022C\u022D\x03\x02\x02\x02\u022D\u0230\x03\x02\x02\x02\u022E\u022C\x03" +
		"\x02\x02\x02\u022F\u0227\x03\x02\x02\x02\u022F\u0230\x03\x02\x02\x02\u0230" +
		"\u0231\x03\x02\x02\x02\u0231\u0235\x07.\x02\x02\u0232\u0234\x05&\x14\x02" +
		"\u0233\u0232\x03\x02\x02\x02\u0234\u0237\x03\x02\x02\x02\u0235\u0233\x03" +
		"\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236\u0238\x03\x02\x02\x02\u0237" +
		"\u0235\x03\x02\x02\x02\u0238\u0239\x07\b\x02\x02\u02395\x03\x02\x02\x02" +
		"\u023A\u023B\x07\x1F\x02\x02\u023B\u023C\x07-\x02\x02\u023C\u023D\x05" +
		"D#\x02\u023D\u0241\x07.\x02\x02\u023E\u0240\x07\'\x02\x02\u023F\u023E" +
		"\x03\x02\x02\x02\u0240\u0243\x03\x02\x02\x02\u0241\u023F\x03\x02\x02\x02" +
		"\u0241\u0242\x03\x02\x02\x02\u0242\u026A\x03\x02\x02\x02\u0243\u0241\x03" +
		"\x02\x02\x02\u0244\u0245\x07 \x02\x02\u0245\u0248\x05H%\x02\u0246\u0247" +
		"\x07K\x02\x02\u0247\u0249\x05H%\x02\u0248\u0246\x03\x02\x02\x02\u0248" +
		"\u0249\x03\x02\x02\x02\u0249\u0252\x03\x02\x02\x02\u024A\u024B\x07(\x02" +
		"\x02\u024B\u024E\x05H%\x02\u024C\u024D\x07K\x02\x02\u024D\u024F\x05H%" +
		"\x02\u024E\u024C\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0251" +
		"\x03\x02\x02\x02\u0250\u024A\x03\x02\x02\x02\u0251\u0254\x03\x02\x02\x02" +
		"\u0252\u0250\x03\x02\x02\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0255\x03" +
		"\x02\x02\x02\u0254\u0252\x03\x02\x02\x02\u0255\u0259\x05B\"\x02\u0256" +
		"\u0258\x05&\x14\x02\u0257\u0256\x03\x02\x02\x02\u0258\u025B\x03\x02\x02" +
		"\x02\u0259\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A\u025C" +
		"\x03\x02\x02\x02\u025B\u0259\x03\x02\x02\x02\u025C\u025D\x07\b\x02\x02" +
		"\u025D\u0269\x03\x02\x02\x02\u025E\u025F\x07!\x02\x02\u025F\u0263\x05" +
		"B\"\x02\u0260\u0262\x05&\x14\x02\u0261\u0260\x03\x02\x02\x02\u0262\u0265" +
		"\x03\x02\x02\x02\u0263\u0261\x03\x02\x02\x02\u0263\u0264\x03\x02\x02\x02" +
		"\u0264\u0266\x03\x02\x02\x02\u0265\u0263\x03\x02\x02\x02\u0266\u0267\x07" +
		"\b\x02\x02\u0267\u0269\x03\x02\x02\x02\u0268\u0244\x03\x02\x02\x02\u0268" +
		"\u025E\x03\x02\x02\x02\u0269\u026C\x03\x02\x02\x02\u026A\u0268\x03\x02" +
		"\x02\x02\u026A\u026B\x03\x02\x02\x02\u026B\u026D\x03\x02\x02\x02\u026C" +
		"\u026A\x03\x02\x02\x02\u026D\u026E\x07\b\x02\x02\u026E7\x03\x02\x02\x02" +
		"\u026F\u0275\x07\"\x02\x02\u0270\u0272\x07-\x02\x02\u0271\u0273\x05H%" +
		"\x02\u0272\u0271\x03\x02\x02\x02\u0272\u0273\x03\x02\x02\x02\u0273\u0274" +
		"\x03\x02\x02\x02\u0274\u0276\x07.\x02\x02\u0275\u0270\x03\x02\x02\x02" +
		"\u0275\u0276\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277\u0278\x05" +
		"B\"\x02\u02789\x03\x02\x02\x02\u0279\u027A\x07&\x02\x02\u027A\u027B\x05" +
		"B\"\x02\u027B;\x03\x02\x02\x02\u027C\u027D\x07#\x02\x02\u027D\u027E\x05" +
		"B\"\x02\u027E=\x03\x02\x02\x02\u027F\u0280\x07$\x02\x02\u0280\u0281\x05" +
		"B\"\x02\u0281?\x03\x02\x02\x02\u0282\u0286\x07%\x02\x02\u0283\u0285\x05" +
		"&\x14\x02\u0284\u0283\x03\x02\x02\x02\u0285\u0288\x03\x02\x02\x02\u0286" +
		"\u0284\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0289\x03\x02" +
		"\x02\x02\u0288\u0286\x03\x02\x02\x02\u0289\u028A\x07\b\x02\x02\u028AA" +
		"\x03\x02\x02\x02\u028B\u028F\x07\'\x02\x02\u028C\u028E\t\x04\x02\x02\u028D" +
		"\u028C\x03\x02\x02\x02\u028E\u0291\x03\x02\x02\x02\u028F\u028D\x03\x02" +
		"\x02\x02\u028F\u0290\x03\x02\x02\x02\u0290C\x03\x02\x02\x02\u0291\u028F" +
		"\x03\x02\x02\x02\u0292\u0293\x05H%\x02\u0293E\x03\x02\x02\x02\u0294\u0295" +
		"\x05H%\x02\u0295G\x03\x02\x02\x02\u0296\u0297\x05J&\x02\u0297I\x03\x02" +
		"\x02\x02\u0298\u029C\x05N(\x02\u0299\u029A\x05L\'\x02\u029A\u029B\x05" +
		"N(\x02\u029B\u029D\x03\x02\x02\x02\u029C\u0299\x03\x02\x02\x02\u029C\u029D" +
		"\x03\x02\x02\x02\u029DK\x03\x02\x02\x02\u029E\u029F\t\x06\x02\x02\u029F" +
		"M\x03\x02\x02\x02\u02A0\u02A6\x05R*\x02\u02A1\u02A2\x05P)\x02\u02A2\u02A3" +
		"\x05R*\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4\u02A1\x03\x02\x02\x02\u02A5" +
		"\u02A8\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A6\u02A7\x03\x02" +
		"\x02\x02\u02A7O\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A9\u02AA" +
		"\t\x07\x02\x02\u02AAQ\x03\x02\x02\x02\u02AB\u02B1\x05V,\x02\u02AC\u02AD" +
		"\x05T+\x02\u02AD\u02AE\x05V,\x02\u02AE\u02B0\x03\x02\x02\x02\u02AF\u02AC" +
		"\x03\x02\x02\x02\u02B0\u02B3\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02\x02" +
		"\u02B1\u02B2\x03\x02\x02\x02\u02B2S\x03\x02\x02\x02\u02B3\u02B1\x03\x02" +
		"\x02\x02\u02B4\u02B5\t\b\x02\x02\u02B5U\x03\x02\x02\x02\u02B6\u02BB\x05" +
		"X-\x02\u02B7\u02B8\t\t\x02\x02\u02B8\u02BA\x05X-\x02\u02B9\u02B7\x03\x02" +
		"\x02\x02\u02BA\u02BD\x03\x02\x02\x02\u02BB\u02B9\x03\x02\x02\x02\u02BB" +
		"\u02BC\x03\x02\x02\x02\u02BCW\x03\x02\x02\x02\u02BD\u02BB\x03\x02\x02" +
		"\x02\u02BE\u02C3\x05Z.\x02\u02BF\u02C0\t\n\x02\x02\u02C0\u02C2\x05Z.\x02" +
		"\u02C1\u02BF\x03\x02\x02\x02\u02C2\u02C5\x03\x02\x02\x02\u02C3\u02C1\x03" +
		"\x02\x02\x02\u02C3\u02C4\x03\x02\x02\x02\u02C4Y\x03\x02\x02\x02\u02C5" +
		"\u02C3\x03\x02\x02\x02\u02C6\u02CB\x05\\/\x02\u02C7\u02C8\t\v\x02\x02" +
		"\u02C8\u02CA\x05\\/\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA\u02CD\x03\x02" +
		"\x02\x02\u02CB\u02C9\x03\x02\x02\x02\u02CB\u02CC\x03\x02\x02\x02\u02CC" +
		"[\x03\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CE\u02D0\t\f\x02\x02" +
		"\u02CF\u02CE\x03\x02\x02\x02\u02D0\u02D3\x03\x02\x02\x02\u02D1\u02CF\x03" +
		"\x02\x02\x02\u02D1\u02D2\x03\x02\x02\x02\u02D2\u02D4\x03\x02\x02\x02\u02D3" +
		"\u02D1\x03\x02\x02\x02\u02D4\u02D5\x05^0\x02\u02D5]\x03\x02\x02\x02\u02D6" +
		"\u02DB\x05`1\x02\u02D7\u02D8\x07J\x02\x02\u02D8\u02DA\x05`1\x02\u02D9" +
		"\u02D7\x03\x02\x02\x02\u02DA\u02DD\x03\x02\x02\x02\u02DB\u02D9\x03\x02" +
		"\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC_\x03\x02\x02\x02\u02DD\u02DB" +
		"\x03\x02\x02\x02\u02DE\u02E0\x05b2\x02\u02DF\u02E1\t\r\x02\x02\u02E0\u02DF" +
		"\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1a\x03\x02\x02\x02\u02E2" +
		"\u02E3\x07-\x02\x02\u02E3\u02E4\x05H%\x02\u02E4\u02E5\x07.\x02\x02\u02E5" +
		"\u0312\x03\x02\x02\x02\u02E6\u02E7\x07)\x02\x02\u02E7\u02E8\x05H%\x02" +
		"\u02E8\u02E9\x07*\x02\x02\u02E9\u0312\x03\x02\x02\x02\u02EA\u0312\x07" +
		"I\x02\x02\u02EB\u0312\x07V\x02\x02\u02EC\u0312\x07W\x02\x02\u02ED\u02EE" +
		"\x07H\x02\x02\u02EE\u0312\x07X\x02\x02\u02EF\u02F0\x07G\x02\x02\u02F0" +
		"\u02F1\x07-\x02\x02\u02F1\u02F2\x07X\x02\x02\u02F2\u0312\x07.\x02\x02" +
		"\u02F3\u030F\x07X\x02\x02\u02F4\u02FD\x07-\x02\x02\u02F5\u02FA\x05H%\x02" +
		"\u02F6\u02F7\x07(\x02\x02\u02F7\u02F9\x05H%\x02\u02F8\u02F6\x03\x02\x02" +
		"\x02\u02F9\u02FC\x03\x02\x02\x02\u02FA\u02F8\x03\x02\x02\x02\u02FA\u02FB" +
		"\x03\x02\x02\x02\u02FB\u02FE\x03\x02\x02\x02\u02FC\u02FA\x03\x02\x02\x02" +
		"\u02FD\u02F5\x03\x02\x02\x02\u02FD\u02FE\x03\x02\x02\x02\u02FE\u02FF\x03" +
		"\x02\x02\x02\u02FF\u0310\x07.\x02\x02\u0300\u0301\x07)\x02\x02\u0301\u0308" +
		"\x05H%\x02\u0302\u0303\x07(\x02\x02\u0303\u0306\x05H%\x02\u0304\u0305" +
		"\x07(\x02\x02\u0305\u0307\x05H%\x02\u0306\u0304\x03\x02\x02\x02\u0306" +
		"\u0307\x03\x02\x02\x02\u0307\u0309\x03\x02\x02\x02\u0308\u0302\x03\x02" +
		"\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A" +
		"\u030D\x07*\x02\x02\u030B\u030C\x07J\x02\x02\u030C\u030E\x05d3\x02\u030D" +
		"\u030B\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u0310\x03\x02" +
		"\x02\x02\u030F\u02F4\x03\x02\x02\x02\u030F\u0300\x03\x02\x02\x02\u030F" +
		"\u0310\x03\x02\x02\x02\u0310\u0312\x03\x02\x02\x02\u0311\u02E2\x03\x02" +
		"\x02\x02\u0311\u02E6\x03\x02\x02\x02\u0311\u02EA\x03\x02\x02\x02\u0311" +
		"\u02EB\x03\x02\x02\x02\u0311\u02EC\x03\x02\x02\x02\u0311\u02ED\x03\x02" +
		"\x02\x02\u0311\u02EF\x03\x02\x02\x02\u0311\u02F3\x03\x02\x02\x02\u0312" +
		"c\x03\x02\x02\x02\u0313\u031E\x07X\x02\x02\u0314\u0315\x07)\x02\x02\u0315" +
		"\u031C\x05H%\x02\u0316\u0317\x07(\x02\x02\u0317\u031A\x05H%\x02\u0318" +
		"\u0319\x07(\x02\x02\u0319\u031B\x05H%\x02\u031A\u0318\x03\x02\x02\x02" +
		"\u031A\u031B\x03\x02\x02\x02\u031B\u031D\x03\x02\x02\x02\u031C\u0316\x03" +
		"\x02\x02\x02\u031C\u031D\x03\x02\x02\x02\u031D\u031F\x03\x02\x02\x02\u031E" +
		"\u0314\x03\x02\x02\x02\u031E\u031F\x03\x02\x02\x02\u031F\u0322\x03\x02" +
		"\x02\x02\u0320\u0321\x07J\x02\x02\u0321\u0323\x05d3\x02\u0322\u0320\x03" +
		"\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323e\x03\x02\x02\x02\u0324" +
		"\u0331\x07X\x02\x02\u0325\u0326\x07)\x02\x02\u0326\u032D\x05F$\x02\u0327" +
		"\u0328\x07(\x02\x02\u0328\u032B\x05F$\x02\u0329\u032A\x07(\x02\x02\u032A" +
		"\u032C\x05F$\x02\u032B\u0329\x03\x02\x02\x02\u032B\u032C\x03\x02\x02\x02" +
		"\u032C\u032E\x03\x02\x02\x02\u032D\u0327\x03\x02\x02\x02\u032D\u032E\x03" +
		"\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0330\x07*\x02\x02\u0330" +
		"\u0332\x03\x02\x02\x02\u0331\u0325\x03\x02\x02\x02\u0331\u0332\x03\x02" +
		"\x02\x02\u0332g\x03\x02\x02\x02\u0333\u0334\x07\v\x02\x02\u0334\u0335" +
		"\x077\x02\x02\u0335\u0359\x05f4\x02\u0336\u0341\x07\x0E\x02\x02\u0337" +
		"\u0338\x077\x02\x02\u0338\u0342\x05f4\x02\u0339\u033F\x07X\x02\x02\u033A" +
		"\u033C\x07)\x02\x02\u033B\u033D\x05F$\x02\u033C\u033B\x03\x02\x02\x02" +
		"\u033C\u033D\x03\x02\x02\x02\u033D\u033E\x03\x02\x02\x02\u033E\u0340\x07" +
		"*\x02\x02\u033F\u033A\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340" +
		"\u0342\x03\x02\x02\x02\u0341\u0337\x03\x02\x02\x02\u0341\u0339\x03\x02" +
		"\x02\x02\u0342\u0359\x03\x02\x02\x02\u0343\u0347\x07\x0F\x02\x02\u0344" +
		"\u0345\x077\x02\x02\u0345\u0348\x05f4\x02\u0346\u0348\x07X\x02\x02\u0347" +
		"\u0344\x03\x02\x02\x02\u0347\u0346\x03\x02\x02\x02\u0348\u0359\x03\x02" +
		"\x02\x02\u0349\u034D\x07\x10\x02\x02\u034A\u034B\x077\x02\x02\u034B\u034E" +
		"\x05f4\x02\u034C\u034E\x07X\x02\x02\u034D\u034A\x03\x02\x02\x02\u034D" +
		"\u034C\x03\x02\x02\x02\u034E\u0359\x03\x02\x02\x02\u034F\u0353\x07\x11" +
		"\x02\x02\u0350\u0351\x077\x02\x02\u0351\u0354\x05f4\x02\u0352\u0354\x07" +
		"X\x02\x02\u0353\u0350\x03\x02\x02\x02\u0353\u0352\x03\x02\x02\x02\u0354" +
		"\u0359\x03\x02\x02\x02\u0355\u0356\x077\x02\x02\u0356\u0359\x05f4\x02" +
		"\u0357\u0359\x07X\x02\x02\u0358\u0333\x03\x02\x02\x02\u0358\u0336\x03" +
		"\x02\x02\x02\u0358\u0343\x03\x02\x02\x02\u0358\u0349\x03\x02\x02\x02\u0358" +
		"\u034F\x03\x02\x02\x02\u0358\u0355\x03\x02\x02\x02\u0358\u0357\x03\x02" +
		"\x02\x02\u0359i\x03\x02\x02\x02wkqux{~\x84\x8C\x8E\x9F\xA8\xAD\xB4\xBA" +
		"\xC1\xC7\xCE\xD4\xDD\xE2\xE7\xEA\xF2\xFD\u0108\u010E\u0114\u0116\u011E" +
		"\u0120\u0122\u012A\u012D\u0131\u0133\u013A\u013E\u0140\u0146\u014A\u014F" +
		"\u0153\u0157\u015B\u015F\u0166\u016A\u016E\u0172\u0177\u017D\u018A\u018D" +
		"\u0193\u0197\u019F\u01A6\u01BA\u01BF\u01C2\u01CD\u01D4\u01D7\u01DF\u01EB" +
		"\u01F4\u0204\u020A\u0216\u0219\u0221\u0224\u022C\u022F\u0235\u0241\u0248" +
		"\u024E\u0252\u0259\u0263\u0268\u026A\u0272\u0275\u0286\u028F\u029C\u02A6" +
		"\u02B1\u02BB\u02C3\u02CB\u02D1\u02DB\u02E0\u02FA\u02FD\u0306\u0308\u030D" +
		"\u030F\u0311\u031A\u031C\u031E\u0322\u032B\u032D\u0331\u033C\u033F\u0341" +
		"\u0347\u034D\u0353\u0358";
	public static readonly _serializedATN: string = Utils.join(
		[
			DIVParser._serializedATNSegment0,
			DIVParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DIVParser.__ATN) {
			DIVParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(DIVParser._serializedATN));
		}

		return DIVParser.__ATN;
	}

}

export class FileContext extends ParserRuleContext {
	public declProgram(): DeclProgramContext {
		return this.getRuleContext(0, DeclProgramContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public compilerOptions(): CompilerOptionsContext | undefined {
		return this.tryGetRuleContext(0, CompilerOptionsContext);
	}
	public declImport(): DeclImportContext[];
	public declImport(i: number): DeclImportContext;
	public declImport(i?: number): DeclImportContext | DeclImportContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclImportContext);
		} else {
			return this.getRuleContext(i, DeclImportContext);
		}
	}
	public declConst(): DeclConstContext | undefined {
		return this.tryGetRuleContext(0, DeclConstContext);
	}
	public declGlobal(): DeclGlobalContext | undefined {
		return this.tryGetRuleContext(0, DeclGlobalContext);
	}
	public declLocal(): DeclLocalContext | undefined {
		return this.tryGetRuleContext(0, DeclLocalContext);
	}
	public declPrivate(): DeclPrivateContext | undefined {
		return this.tryGetRuleContext(0, DeclPrivateContext);
	}
	public declProcess(): DeclProcessContext[];
	public declProcess(i: number): DeclProcessContext;
	public declProcess(i?: number): DeclProcessContext | DeclProcessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclProcessContext);
		} else {
			return this.getRuleContext(i, DeclProcessContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_file; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterFile) {
			listener.enterFile(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitFile) {
			listener.exitFile(this);
		}
	}
}


export class CompilerOptionsContext extends ParserRuleContext {
	public COMPILER_OPTIONS(): TerminalNode { return this.getToken(DIVParser.COMPILER_OPTIONS, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(DIVParser.SEMICOLON, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.Identifier);
		} else {
			return this.getToken(DIVParser.Identifier, i);
		}
	}
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.ASSIGN);
		} else {
			return this.getToken(DIVParser.ASSIGN, i);
		}
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_compilerOptions; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterCompilerOptions) {
			listener.enterCompilerOptions(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitCompilerOptions) {
			listener.exitCompilerOptions(this);
		}
	}
}


export class DeclProgramContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(DIVParser.Identifier, 0); }
	public sc(): ScContext {
		return this.getRuleContext(0, ScContext);
	}
	public PROGRAM(): TerminalNode | undefined { return this.tryGetToken(DIVParser.PROGRAM, 0); }
	public SETUP_PROGRAM(): TerminalNode | undefined { return this.tryGetToken(DIVParser.SETUP_PROGRAM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_declProgram; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterDeclProgram) {
			listener.enterDeclProgram(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitDeclProgram) {
			listener.exitDeclProgram(this);
		}
	}
}


export class DeclImportContext extends ParserRuleContext {
	public IMPORT(): TerminalNode { return this.getToken(DIVParser.IMPORT, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(DIVParser.SEMICOLON, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(DIVParser.StringLiteral, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(DIVParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_declImport; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterDeclImport) {
			listener.enterDeclImport(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitDeclImport) {
			listener.exitDeclImport(this);
		}
	}
}


export class DeclConstContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(DIVParser.CONST, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SEMICOLON);
		} else {
			return this.getToken(DIVParser.SEMICOLON, i);
		}
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.Identifier);
		} else {
			return this.getToken(DIVParser.Identifier, i);
		}
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.ASSIGN);
		} else {
			return this.getToken(DIVParser.ASSIGN, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_declConst; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterDeclConst) {
			listener.enterDeclConst(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitDeclConst) {
			listener.exitDeclConst(this);
		}
	}
}


export class DeclGlobalContext extends ParserRuleContext {
	public GLOBAL(): TerminalNode { return this.getToken(DIVParser.GLOBAL, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SEMICOLON);
		} else {
			return this.getToken(DIVParser.SEMICOLON, i);
		}
	}
	public declVariable(): DeclVariableContext[];
	public declVariable(i: number): DeclVariableContext;
	public declVariable(i?: number): DeclVariableContext | DeclVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclVariableContext);
		} else {
			return this.getRuleContext(i, DeclVariableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_declGlobal; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterDeclGlobal) {
			listener.enterDeclGlobal(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitDeclGlobal) {
			listener.exitDeclGlobal(this);
		}
	}
}


export class DeclLocalContext extends ParserRuleContext {
	public LOCAL(): TerminalNode { return this.getToken(DIVParser.LOCAL, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SEMICOLON);
		} else {
			return this.getToken(DIVParser.SEMICOLON, i);
		}
	}
	public declVariable(): DeclVariableContext[];
	public declVariable(i: number): DeclVariableContext;
	public declVariable(i?: number): DeclVariableContext | DeclVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclVariableContext);
		} else {
			return this.getRuleContext(i, DeclVariableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_declLocal; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterDeclLocal) {
			listener.enterDeclLocal(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitDeclLocal) {
			listener.exitDeclLocal(this);
		}
	}
}


export class DeclPrivateContext extends ParserRuleContext {
	public PRIVATE(): TerminalNode { return this.getToken(DIVParser.PRIVATE, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SEMICOLON);
		} else {
			return this.getToken(DIVParser.SEMICOLON, i);
		}
	}
	public declVariable(): DeclVariableContext[];
	public declVariable(i: number): DeclVariableContext;
	public declVariable(i?: number): DeclVariableContext | DeclVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclVariableContext);
		} else {
			return this.getRuleContext(i, DeclVariableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_declPrivate; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterDeclPrivate) {
			listener.enterDeclPrivate(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitDeclPrivate) {
			listener.exitDeclPrivate(this);
		}
	}
}


export class DeclVariableContext extends ParserRuleContext {
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(DIVParser.STRUCT, 0); }
	public pointerDecl(): PointerDeclContext | undefined {
		return this.tryGetRuleContext(0, PointerDeclContext);
	}
	public sc(): ScContext | undefined {
		return this.tryGetRuleContext(0, ScContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(DIVParser.Identifier, 0); }
	public structBody(): StructBodyContext | undefined {
		return this.tryGetRuleContext(0, StructBodyContext);
	}
	public arraySizeDecl(): ArraySizeDeclContext | undefined {
		return this.tryGetRuleContext(0, ArraySizeDeclContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.ASSIGN, 0); }
	public initArray(): InitArrayContext | undefined {
		return this.tryGetRuleContext(0, InitArrayContext);
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SEMICOLON);
		} else {
			return this.getToken(DIVParser.SEMICOLON, i);
		}
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(DIVParser.STRING, 0); }
	public stringVarDecl(): StringVarDeclContext[];
	public stringVarDecl(i: number): StringVarDeclContext;
	public stringVarDecl(i?: number): StringVarDeclContext | StringVarDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringVarDeclContext);
		} else {
			return this.getRuleContext(i, StringVarDeclContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(DIVParser.BYTE, 0); }
	public varDecl(): VarDeclContext[];
	public varDecl(i: number): VarDeclContext;
	public varDecl(i?: number): VarDeclContext | VarDeclContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VarDeclContext);
		} else {
			return this.getRuleContext(i, VarDeclContext);
		}
	}
	public WORD(): TerminalNode | undefined { return this.tryGetToken(DIVParser.WORD, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(DIVParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_declVariable; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterDeclVariable) {
			listener.enterDeclVariable(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitDeclVariable) {
			listener.exitDeclVariable(this);
		}
	}
}


export class ArraySizeDeclContext extends ParserRuleContext {
	public LBRACKET(): TerminalNode { return this.getToken(DIVParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode { return this.getToken(DIVParser.RBRACKET, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_arraySizeDecl; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterArraySizeDecl) {
			listener.enterArraySizeDecl(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitArraySizeDecl) {
			listener.exitArraySizeDecl(this);
		}
	}
}


export class StringVarDeclContext extends ParserRuleContext {
	public pointerDecl(): PointerDeclContext | undefined {
		return this.tryGetRuleContext(0, PointerDeclContext);
	}
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.Identifier);
		} else {
			return this.getToken(DIVParser.Identifier, i);
		}
	}
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(DIVParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(DIVParser.RBRACKET, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.ASSIGN, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(DIVParser.StringLiteral, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_stringVarDecl; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterStringVarDecl) {
			listener.enterStringVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitStringVarDecl) {
			listener.exitStringVarDecl(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public pointerDecl(): PointerDeclContext | undefined {
		return this.tryGetRuleContext(0, PointerDeclContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(DIVParser.Identifier, 0); }
	public arraySizeDecl(): ArraySizeDeclContext | undefined {
		return this.tryGetRuleContext(0, ArraySizeDeclContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.ASSIGN, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public initArray(): InitArrayContext | undefined {
		return this.tryGetRuleContext(0, InitArrayContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
}


export class PointerDeclContext extends ParserRuleContext {
	public POINTER(): TerminalNode[];
	public POINTER(i: number): TerminalNode;
	public POINTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.POINTER);
		} else {
			return this.getToken(DIVParser.POINTER, i);
		}
	}
	public pointerSuffix(): PointerSuffixContext[];
	public pointerSuffix(i: number): PointerSuffixContext;
	public pointerSuffix(i?: number): PointerSuffixContext | PointerSuffixContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PointerSuffixContext);
		} else {
			return this.getRuleContext(i, PointerSuffixContext);
		}
	}
	public ASSIGN(): TerminalNode[];
	public ASSIGN(i: number): TerminalNode;
	public ASSIGN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.ASSIGN);
		} else {
			return this.getToken(DIVParser.ASSIGN, i);
		}
	}
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_pointerDecl; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterPointerDecl) {
			listener.enterPointerDecl(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitPointerDecl) {
			listener.exitPointerDecl(this);
		}
	}
}


export class InitArrayContext extends ParserRuleContext {
	public initElemArray(): InitElemArrayContext[];
	public initElemArray(i: number): InitElemArrayContext;
	public initElemArray(i?: number): InitElemArrayContext | InitElemArrayContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitElemArrayContext);
		} else {
			return this.getRuleContext(i, InitElemArrayContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_initArray; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterInitArray) {
			listener.enterInitArray(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitInitArray) {
			listener.exitInitArray(this);
		}
	}
}


export class InitElemArrayContext extends ParserRuleContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	public DUP(): TerminalNode | undefined { return this.tryGetToken(DIVParser.DUP, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.RPAREN, 0); }
	public initElemArray(): InitElemArrayContext[];
	public initElemArray(i: number): InitElemArrayContext;
	public initElemArray(i?: number): InitElemArrayContext | InitElemArrayContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InitElemArrayContext);
		} else {
			return this.getRuleContext(i, InitElemArrayContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_initElemArray; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterInitElemArray) {
			listener.enterInitElemArray(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitInitElemArray) {
			listener.exitInitElemArray(this);
		}
	}
}


export class StructBodyContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(DIVParser.END, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SEMICOLON);
		} else {
			return this.getToken(DIVParser.SEMICOLON, i);
		}
	}
	public declVariable(): DeclVariableContext[];
	public declVariable(i: number): DeclVariableContext;
	public declVariable(i?: number): DeclVariableContext | DeclVariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclVariableContext);
		} else {
			return this.getRuleContext(i, DeclVariableContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_structBody; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterStructBody) {
			listener.enterStructBody(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitStructBody) {
			listener.exitStructBody(this);
		}
	}
}


export class DeclProcessContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(DIVParser.Identifier, 0); }
	public LPAREN(): TerminalNode { return this.getToken(DIVParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(DIVParser.RPAREN, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public PROCESS(): TerminalNode | undefined { return this.tryGetToken(DIVParser.PROCESS, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(DIVParser.FUNCTION, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SEMICOLON);
		} else {
			return this.getToken(DIVParser.SEMICOLON, i);
		}
	}
	public declPrivate(): DeclPrivateContext | undefined {
		return this.tryGetRuleContext(0, DeclPrivateContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_declProcess; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterDeclProcess) {
			listener.enterDeclProcess(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitDeclProcess) {
			listener.exitDeclProcess(this);
		}
	}
}


export class BodyContext extends ParserRuleContext {
	public BEGIN(): TerminalNode { return this.getToken(DIVParser.BEGIN, 0); }
	public END(): TerminalNode { return this.getToken(DIVParser.END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SEMICOLON);
		} else {
			return this.getToken(DIVParser.SEMICOLON, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_body; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterBody) {
			listener.enterBody(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitBody) {
			listener.exitBody(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public returnSt(): ReturnStContext | undefined {
		return this.tryGetRuleContext(0, ReturnStContext);
	}
	public ifSt(): IfStContext | undefined {
		return this.tryGetRuleContext(0, IfStContext);
	}
	public loopSt(): LoopStContext | undefined {
		return this.tryGetRuleContext(0, LoopStContext);
	}
	public whileSt(): WhileStContext | undefined {
		return this.tryGetRuleContext(0, WhileStContext);
	}
	public repeatSt(): RepeatStContext | undefined {
		return this.tryGetRuleContext(0, RepeatStContext);
	}
	public fromSt(): FromStContext | undefined {
		return this.tryGetRuleContext(0, FromStContext);
	}
	public forSt(): ForStContext | undefined {
		return this.tryGetRuleContext(0, ForStContext);
	}
	public switchSt(): SwitchStContext | undefined {
		return this.tryGetRuleContext(0, SwitchStContext);
	}
	public frameSt(): FrameStContext | undefined {
		return this.tryGetRuleContext(0, FrameStContext);
	}
	public debugSt(): DebugStContext | undefined {
		return this.tryGetRuleContext(0, DebugStContext);
	}
	public breakSt(): BreakStContext | undefined {
		return this.tryGetRuleContext(0, BreakStContext);
	}
	public continueSt(): ContinueStContext | undefined {
		return this.tryGetRuleContext(0, ContinueStContext);
	}
	public cloneSt(): CloneStContext | undefined {
		return this.tryGetRuleContext(0, CloneStContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(DIVParser.SEMICOLON, 0); }
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	public sc(): ScContext | undefined {
		return this.tryGetRuleContext(0, ScContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_statement; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class ReturnStContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(DIVParser.RETURN, 0); }
	public sc(): ScContext {
		return this.getRuleContext(0, ScContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.RPAREN, 0); }
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_returnSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterReturnSt) {
			listener.enterReturnSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitReturnSt) {
			listener.exitReturnSt(this);
		}
	}
}


export class IfStContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(DIVParser.IF, 0); }
	public LPAREN(): TerminalNode { return this.getToken(DIVParser.LPAREN, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(DIVParser.RPAREN, 0); }
	public END(): TerminalNode { return this.getToken(DIVParser.END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(DIVParser.ELSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_ifSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterIfSt) {
			listener.enterIfSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitIfSt) {
			listener.exitIfSt(this);
		}
	}
}


export class LoopStContext extends ParserRuleContext {
	public LOOP(): TerminalNode { return this.getToken(DIVParser.LOOP, 0); }
	public END(): TerminalNode { return this.getToken(DIVParser.END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_loopSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterLoopSt) {
			listener.enterLoopSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitLoopSt) {
			listener.exitLoopSt(this);
		}
	}
}


export class WhileStContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(DIVParser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(DIVParser.LPAREN, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(DIVParser.RPAREN, 0); }
	public END(): TerminalNode { return this.getToken(DIVParser.END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_whileSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterWhileSt) {
			listener.enterWhileSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitWhileSt) {
			listener.exitWhileSt(this);
		}
	}
}


export class RepeatStContext extends ParserRuleContext {
	public REPEAT(): TerminalNode { return this.getToken(DIVParser.REPEAT, 0); }
	public UNTIL(): TerminalNode { return this.getToken(DIVParser.UNTIL, 0); }
	public LPAREN(): TerminalNode { return this.getToken(DIVParser.LPAREN, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(DIVParser.RPAREN, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_repeatSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterRepeatSt) {
			listener.enterRepeatSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitRepeatSt) {
			listener.exitRepeatSt(this);
		}
	}
}


export class FromStContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(DIVParser.FROM, 0); }
	public Identifier(): TerminalNode { return this.getToken(DIVParser.Identifier, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(DIVParser.ASSIGN, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(DIVParser.TO, 0); }
	public sc(): ScContext {
		return this.getRuleContext(0, ScContext);
	}
	public END(): TerminalNode { return this.getToken(DIVParser.END, 0); }
	public STEP(): TerminalNode | undefined { return this.tryGetToken(DIVParser.STEP, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_fromSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterFromSt) {
			listener.enterFromSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitFromSt) {
			listener.exitFromSt(this);
		}
	}
}


export class ForStContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(DIVParser.FOR, 0); }
	public LPAREN(): TerminalNode { return this.getToken(DIVParser.LPAREN, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SEMICOLON);
		} else {
			return this.getToken(DIVParser.SEMICOLON, i);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(DIVParser.RPAREN, 0); }
	public END(): TerminalNode { return this.getToken(DIVParser.END, 0); }
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_forSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterForSt) {
			listener.enterForSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitForSt) {
			listener.exitForSt(this);
		}
	}
}


export class SwitchStContext extends ParserRuleContext {
	public SWITCH(): TerminalNode { return this.getToken(DIVParser.SWITCH, 0); }
	public LPAREN(): TerminalNode { return this.getToken(DIVParser.LPAREN, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(DIVParser.RPAREN, 0); }
	public END(): TerminalNode[];
	public END(i: number): TerminalNode;
	public END(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.END);
		} else {
			return this.getToken(DIVParser.END, i);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SEMICOLON);
		} else {
			return this.getToken(DIVParser.SEMICOLON, i);
		}
	}
	public CASE(): TerminalNode[];
	public CASE(i: number): TerminalNode;
	public CASE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.CASE);
		} else {
			return this.getToken(DIVParser.CASE, i);
		}
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public sc(): ScContext[];
	public sc(i: number): ScContext;
	public sc(i?: number): ScContext | ScContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ScContext);
		} else {
			return this.getRuleContext(i, ScContext);
		}
	}
	public DEFAULT(): TerminalNode[];
	public DEFAULT(i: number): TerminalNode;
	public DEFAULT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.DEFAULT);
		} else {
			return this.getToken(DIVParser.DEFAULT, i);
		}
	}
	public RANGE(): TerminalNode[];
	public RANGE(i: number): TerminalNode;
	public RANGE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.RANGE);
		} else {
			return this.getToken(DIVParser.RANGE, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_switchSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterSwitchSt) {
			listener.enterSwitchSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitSwitchSt) {
			listener.exitSwitchSt(this);
		}
	}
}


export class FrameStContext extends ParserRuleContext {
	public FRAME(): TerminalNode { return this.getToken(DIVParser.FRAME, 0); }
	public sc(): ScContext {
		return this.getRuleContext(0, ScContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.RPAREN, 0); }
	public exp(): ExpContext | undefined {
		return this.tryGetRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_frameSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterFrameSt) {
			listener.enterFrameSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitFrameSt) {
			listener.exitFrameSt(this);
		}
	}
}


export class DebugStContext extends ParserRuleContext {
	public DEBUG(): TerminalNode { return this.getToken(DIVParser.DEBUG, 0); }
	public sc(): ScContext {
		return this.getRuleContext(0, ScContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_debugSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterDebugSt) {
			listener.enterDebugSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitDebugSt) {
			listener.exitDebugSt(this);
		}
	}
}


export class BreakStContext extends ParserRuleContext {
	public BREAK(): TerminalNode { return this.getToken(DIVParser.BREAK, 0); }
	public sc(): ScContext {
		return this.getRuleContext(0, ScContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_breakSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterBreakSt) {
			listener.enterBreakSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitBreakSt) {
			listener.exitBreakSt(this);
		}
	}
}


export class ContinueStContext extends ParserRuleContext {
	public CONTINUE(): TerminalNode { return this.getToken(DIVParser.CONTINUE, 0); }
	public sc(): ScContext {
		return this.getRuleContext(0, ScContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_continueSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterContinueSt) {
			listener.enterContinueSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitContinueSt) {
			listener.exitContinueSt(this);
		}
	}
}


export class CloneStContext extends ParserRuleContext {
	public CLONE(): TerminalNode { return this.getToken(DIVParser.CLONE, 0); }
	public END(): TerminalNode { return this.getToken(DIVParser.END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_cloneSt; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterCloneSt) {
			listener.enterCloneSt(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitCloneSt) {
			listener.exitCloneSt(this);
		}
	}
}


export class ScContext extends ParserRuleContext {
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SEMICOLON);
		} else {
			return this.getToken(DIVParser.SEMICOLON, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_sc; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterSc) {
			listener.enterSc(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitSc) {
			listener.exitSc(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_condition; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_constant; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	public eAssign(): EAssignContext {
		return this.getRuleContext(0, EAssignContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_exp; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterExp) {
			listener.enterExp(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitExp) {
			listener.exitExp(this);
		}
	}
}


export class EAssignContext extends ParserRuleContext {
	public eLogic(): ELogicContext[];
	public eLogic(i: number): ELogicContext;
	public eLogic(i?: number): ELogicContext | ELogicContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ELogicContext);
		} else {
			return this.getRuleContext(i, ELogicContext);
		}
	}
	public assignOp(): AssignOpContext | undefined {
		return this.tryGetRuleContext(0, AssignOpContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_eAssign; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterEAssign) {
			listener.enterEAssign(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitEAssign) {
			listener.exitEAssign(this);
		}
	}
}


export class AssignOpContext extends ParserRuleContext {
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.ASSIGN, 0); }
	public ADDASSIG(): TerminalNode | undefined { return this.tryGetToken(DIVParser.ADDASSIG, 0); }
	public SUBASSIG(): TerminalNode | undefined { return this.tryGetToken(DIVParser.SUBASSIG, 0); }
	public MULASSIG(): TerminalNode | undefined { return this.tryGetToken(DIVParser.MULASSIG, 0); }
	public DIVASSIG(): TerminalNode | undefined { return this.tryGetToken(DIVParser.DIVASSIG, 0); }
	public MODASSIG(): TerminalNode | undefined { return this.tryGetToken(DIVParser.MODASSIG, 0); }
	public ANDASSIG(): TerminalNode | undefined { return this.tryGetToken(DIVParser.ANDASSIG, 0); }
	public ORASSIG(): TerminalNode | undefined { return this.tryGetToken(DIVParser.ORASSIG, 0); }
	public XORASSIG(): TerminalNode | undefined { return this.tryGetToken(DIVParser.XORASSIG, 0); }
	public SHRASSIG(): TerminalNode | undefined { return this.tryGetToken(DIVParser.SHRASSIG, 0); }
	public SHLASSIG(): TerminalNode | undefined { return this.tryGetToken(DIVParser.SHLASSIG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_assignOp; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterAssignOp) {
			listener.enterAssignOp(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitAssignOp) {
			listener.exitAssignOp(this);
		}
	}
}


export class ELogicContext extends ParserRuleContext {
	public eCompar(): EComparContext[];
	public eCompar(i: number): EComparContext;
	public eCompar(i?: number): EComparContext | EComparContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EComparContext);
		} else {
			return this.getRuleContext(i, EComparContext);
		}
	}
	public logicOp(): LogicOpContext[];
	public logicOp(i: number): LogicOpContext;
	public logicOp(i?: number): LogicOpContext | LogicOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LogicOpContext);
		} else {
			return this.getRuleContext(i, LogicOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_eLogic; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterELogic) {
			listener.enterELogic(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitELogic) {
			listener.exitELogic(this);
		}
	}
}


export class LogicOpContext extends ParserRuleContext {
	public OR(): TerminalNode | undefined { return this.tryGetToken(DIVParser.OR, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(DIVParser.XOR, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(DIVParser.AND, 0); }
	public HAT(): TerminalNode | undefined { return this.tryGetToken(DIVParser.HAT, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(DIVParser.AMP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_logicOp; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterLogicOp) {
			listener.enterLogicOp(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitLogicOp) {
			listener.exitLogicOp(this);
		}
	}
}


export class EComparContext extends ParserRuleContext {
	public eShift(): EShiftContext[];
	public eShift(i: number): EShiftContext;
	public eShift(i?: number): EShiftContext | EShiftContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EShiftContext);
		} else {
			return this.getRuleContext(i, EShiftContext);
		}
	}
	public comparOp(): ComparOpContext[];
	public comparOp(i: number): ComparOpContext;
	public comparOp(i?: number): ComparOpContext | ComparOpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComparOpContext);
		} else {
			return this.getRuleContext(i, ComparOpContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_eCompar; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterECompar) {
			listener.enterECompar(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitECompar) {
			listener.exitECompar(this);
		}
	}
}


export class ComparOpContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(DIVParser.EQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(DIVParser.NE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(DIVParser.LT, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(DIVParser.GT, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(DIVParser.LE, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(DIVParser.GE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_comparOp; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterComparOp) {
			listener.enterComparOp(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitComparOp) {
			listener.exitComparOp(this);
		}
	}
}


export class EShiftContext extends ParserRuleContext {
	public eAdd(): EAddContext[];
	public eAdd(i: number): EAddContext;
	public eAdd(i?: number): EAddContext | EAddContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EAddContext);
		} else {
			return this.getRuleContext(i, EAddContext);
		}
	}
	public RSHIFT(): TerminalNode[];
	public RSHIFT(i: number): TerminalNode;
	public RSHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.RSHIFT);
		} else {
			return this.getToken(DIVParser.RSHIFT, i);
		}
	}
	public LSHIFT(): TerminalNode[];
	public LSHIFT(i: number): TerminalNode;
	public LSHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.LSHIFT);
		} else {
			return this.getToken(DIVParser.LSHIFT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_eShift; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterEShift) {
			listener.enterEShift(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitEShift) {
			listener.exitEShift(this);
		}
	}
}


export class EAddContext extends ParserRuleContext {
	public eMul(): EMulContext[];
	public eMul(i: number): EMulContext;
	public eMul(i?: number): EMulContext | EMulContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EMulContext);
		} else {
			return this.getRuleContext(i, EMulContext);
		}
	}
	public ADD(): TerminalNode[];
	public ADD(i: number): TerminalNode;
	public ADD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.ADD);
		} else {
			return this.getToken(DIVParser.ADD, i);
		}
	}
	public SUB(): TerminalNode[];
	public SUB(i: number): TerminalNode;
	public SUB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SUB);
		} else {
			return this.getToken(DIVParser.SUB, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_eAdd; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterEAdd) {
			listener.enterEAdd(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitEAdd) {
			listener.exitEAdd(this);
		}
	}
}


export class EMulContext extends ParserRuleContext {
	public eUnary(): EUnaryContext[];
	public eUnary(i: number): EUnaryContext;
	public eUnary(i?: number): EUnaryContext | EUnaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EUnaryContext);
		} else {
			return this.getRuleContext(i, EUnaryContext);
		}
	}
	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.MUL);
		} else {
			return this.getToken(DIVParser.MUL, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.DIV);
		} else {
			return this.getToken(DIVParser.DIV, i);
		}
	}
	public MOD(): TerminalNode[];
	public MOD(i: number): TerminalNode;
	public MOD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.MOD);
		} else {
			return this.getToken(DIVParser.MOD, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_eMul; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterEMul) {
			listener.enterEMul(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitEMul) {
			listener.exitEMul(this);
		}
	}
}


export class EUnaryContext extends ParserRuleContext {
	public eDot(): EDotContext {
		return this.getRuleContext(0, EDotContext);
	}
	public ADD(): TerminalNode[];
	public ADD(i: number): TerminalNode;
	public ADD(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.ADD);
		} else {
			return this.getToken(DIVParser.ADD, i);
		}
	}
	public HAT(): TerminalNode[];
	public HAT(i: number): TerminalNode;
	public HAT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.HAT);
		} else {
			return this.getToken(DIVParser.HAT, i);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.AMP);
		} else {
			return this.getToken(DIVParser.AMP, i);
		}
	}
	public NEG(): TerminalNode[];
	public NEG(i: number): TerminalNode;
	public NEG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.NEG);
		} else {
			return this.getToken(DIVParser.NEG, i);
		}
	}
	public POINTER(): TerminalNode[];
	public POINTER(i: number): TerminalNode;
	public POINTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.POINTER);
		} else {
			return this.getToken(DIVParser.POINTER, i);
		}
	}
	public OFFSET(): TerminalNode[];
	public OFFSET(i: number): TerminalNode;
	public OFFSET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.OFFSET);
		} else {
			return this.getToken(DIVParser.OFFSET, i);
		}
	}
	public NOT(): TerminalNode[];
	public NOT(i: number): TerminalNode;
	public NOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.NOT);
		} else {
			return this.getToken(DIVParser.NOT, i);
		}
	}
	public SUB(): TerminalNode[];
	public SUB(i: number): TerminalNode;
	public SUB(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.SUB);
		} else {
			return this.getToken(DIVParser.SUB, i);
		}
	}
	public MUL(): TerminalNode[];
	public MUL(i: number): TerminalNode;
	public MUL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.MUL);
		} else {
			return this.getToken(DIVParser.MUL, i);
		}
	}
	public INC(): TerminalNode[];
	public INC(i: number): TerminalNode;
	public INC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.INC);
		} else {
			return this.getToken(DIVParser.INC, i);
		}
	}
	public DEC(): TerminalNode[];
	public DEC(i: number): TerminalNode;
	public DEC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.DEC);
		} else {
			return this.getToken(DIVParser.DEC, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_eUnary; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterEUnary) {
			listener.enterEUnary(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitEUnary) {
			listener.exitEUnary(this);
		}
	}
}


export class EDotContext extends ParserRuleContext {
	public ePostUnary(): EPostUnaryContext[];
	public ePostUnary(i: number): EPostUnaryContext;
	public ePostUnary(i?: number): EPostUnaryContext | EPostUnaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EPostUnaryContext);
		} else {
			return this.getRuleContext(i, EPostUnaryContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.DOT);
		} else {
			return this.getToken(DIVParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_eDot; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterEDot) {
			listener.enterEDot(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitEDot) {
			listener.exitEDot(this);
		}
	}
}


export class EPostUnaryContext extends ParserRuleContext {
	public eAtom(): EAtomContext {
		return this.getRuleContext(0, EAtomContext);
	}
	public INC(): TerminalNode | undefined { return this.tryGetToken(DIVParser.INC, 0); }
	public DEC(): TerminalNode | undefined { return this.tryGetToken(DIVParser.DEC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_ePostUnary; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterEPostUnary) {
			listener.enterEPostUnary(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitEPostUnary) {
			listener.exitEPostUnary(this);
		}
	}
}


export class EAtomContext extends ParserRuleContext {
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.LPAREN, 0); }
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(DIVParser.RPAREN, 0); }
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(DIVParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(DIVParser.RBRACKET, 0); }
	public ID(): TerminalNode | undefined { return this.tryGetToken(DIVParser.ID, 0); }
	public Number(): TerminalNode | undefined { return this.tryGetToken(DIVParser.Number, 0); }
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(DIVParser.StringLiteral, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(DIVParser.TYPE, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(DIVParser.Identifier, 0); }
	public SIZEOF(): TerminalNode | undefined { return this.tryGetToken(DIVParser.SIZEOF, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(DIVParser.DOT, 0); }
	public structAtom(): StructAtomContext | undefined {
		return this.tryGetRuleContext(0, StructAtomContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_eAtom; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterEAtom) {
			listener.enterEAtom(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitEAtom) {
			listener.exitEAtom(this);
		}
	}
}


export class StructAtomContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(DIVParser.Identifier, 0); }
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(DIVParser.LBRACKET, 0); }
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(DIVParser.DOT, 0); }
	public structAtom(): StructAtomContext | undefined {
		return this.tryGetRuleContext(0, StructAtomContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_structAtom; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterStructAtom) {
			listener.enterStructAtom(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitStructAtom) {
			listener.exitStructAtom(this);
		}
	}
}


export class PointerSuffixContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(DIVParser.Identifier, 0); }
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(DIVParser.LBRACKET, 0); }
	public constant(): ConstantContext[];
	public constant(i: number): ConstantContext;
	public constant(i?: number): ConstantContext | ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstantContext);
		} else {
			return this.getRuleContext(i, ConstantContext);
		}
	}
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(DIVParser.RBRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(DIVParser.COMMA);
		} else {
			return this.getToken(DIVParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_pointerSuffix; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterPointerSuffix) {
			listener.enterPointerSuffix(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitPointerSuffix) {
			listener.exitPointerSuffix(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(DIVParser.STRUCT, 0); }
	public POINTER(): TerminalNode | undefined { return this.tryGetToken(DIVParser.POINTER, 0); }
	public pointerSuffix(): PointerSuffixContext | undefined {
		return this.tryGetRuleContext(0, PointerSuffixContext);
	}
	public STRING(): TerminalNode | undefined { return this.tryGetToken(DIVParser.STRING, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(DIVParser.Identifier, 0); }
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(DIVParser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(DIVParser.RBRACKET, 0); }
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(DIVParser.BYTE, 0); }
	public WORD(): TerminalNode | undefined { return this.tryGetToken(DIVParser.WORD, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(DIVParser.INT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return DIVParser.RULE_parameter; }
	// @Override
	public enterRule(listener: DIVParserListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: DIVParserListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
}


