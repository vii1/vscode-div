// Generated from antlr/DIVParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { FileContext } from "./DIVParser";
import { CompilerOptionsContext } from "./DIVParser";
import { DeclProgramContext } from "./DIVParser";
import { DeclImportContext } from "./DIVParser";
import { DeclConstContext } from "./DIVParser";
import { DeclSingleConstContext } from "./DIVParser";
import { DeclGlobalContext } from "./DIVParser";
import { DeclLocalContext } from "./DIVParser";
import { DeclPrivateContext } from "./DIVParser";
import { DeclVariableContext } from "./DIVParser";
import { ArraySizeDeclContext } from "./DIVParser";
import { StringVarDeclContext } from "./DIVParser";
import { VarDeclContext } from "./DIVParser";
import { PointerDeclContext } from "./DIVParser";
import { InitArrayContext } from "./DIVParser";
import { InitElemArrayContext } from "./DIVParser";
import { StructBodyContext } from "./DIVParser";
import { DeclProcessContext } from "./DIVParser";
import { BodyContext } from "./DIVParser";
import { StatementContext } from "./DIVParser";
import { ReturnStContext } from "./DIVParser";
import { IfStContext } from "./DIVParser";
import { LoopStContext } from "./DIVParser";
import { WhileStContext } from "./DIVParser";
import { RepeatStContext } from "./DIVParser";
import { FromStContext } from "./DIVParser";
import { ForStContext } from "./DIVParser";
import { SwitchStContext } from "./DIVParser";
import { FrameStContext } from "./DIVParser";
import { DebugStContext } from "./DIVParser";
import { BreakStContext } from "./DIVParser";
import { ContinueStContext } from "./DIVParser";
import { CloneStContext } from "./DIVParser";
import { ScContext } from "./DIVParser";
import { ConditionContext } from "./DIVParser";
import { ConstantContext } from "./DIVParser";
import { ExpContext } from "./DIVParser";
import { EAssignContext } from "./DIVParser";
import { AssignOpContext } from "./DIVParser";
import { ELogicContext } from "./DIVParser";
import { LogicOpContext } from "./DIVParser";
import { EComparContext } from "./DIVParser";
import { ComparOpContext } from "./DIVParser";
import { EShiftContext } from "./DIVParser";
import { EAddContext } from "./DIVParser";
import { EMulContext } from "./DIVParser";
import { EUnaryContext } from "./DIVParser";
import { EDotContext } from "./DIVParser";
import { EPostUnaryContext } from "./DIVParser";
import { EAtomContext } from "./DIVParser";
import { StructAtomContext } from "./DIVParser";
import { PointerSuffixContext } from "./DIVParser";
import { ParameterContext } from "./DIVParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DIVParser`.
 */
export interface DIVParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DIVParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.compilerOptions`.
	 * @param ctx the parse tree
	 */
	enterCompilerOptions?: (ctx: CompilerOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.compilerOptions`.
	 * @param ctx the parse tree
	 */
	exitCompilerOptions?: (ctx: CompilerOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.declProgram`.
	 * @param ctx the parse tree
	 */
	enterDeclProgram?: (ctx: DeclProgramContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.declProgram`.
	 * @param ctx the parse tree
	 */
	exitDeclProgram?: (ctx: DeclProgramContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.declImport`.
	 * @param ctx the parse tree
	 */
	enterDeclImport?: (ctx: DeclImportContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.declImport`.
	 * @param ctx the parse tree
	 */
	exitDeclImport?: (ctx: DeclImportContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.declConst`.
	 * @param ctx the parse tree
	 */
	enterDeclConst?: (ctx: DeclConstContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.declConst`.
	 * @param ctx the parse tree
	 */
	exitDeclConst?: (ctx: DeclConstContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.declSingleConst`.
	 * @param ctx the parse tree
	 */
	enterDeclSingleConst?: (ctx: DeclSingleConstContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.declSingleConst`.
	 * @param ctx the parse tree
	 */
	exitDeclSingleConst?: (ctx: DeclSingleConstContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.declGlobal`.
	 * @param ctx the parse tree
	 */
	enterDeclGlobal?: (ctx: DeclGlobalContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.declGlobal`.
	 * @param ctx the parse tree
	 */
	exitDeclGlobal?: (ctx: DeclGlobalContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.declLocal`.
	 * @param ctx the parse tree
	 */
	enterDeclLocal?: (ctx: DeclLocalContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.declLocal`.
	 * @param ctx the parse tree
	 */
	exitDeclLocal?: (ctx: DeclLocalContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.declPrivate`.
	 * @param ctx the parse tree
	 */
	enterDeclPrivate?: (ctx: DeclPrivateContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.declPrivate`.
	 * @param ctx the parse tree
	 */
	exitDeclPrivate?: (ctx: DeclPrivateContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.declVariable`.
	 * @param ctx the parse tree
	 */
	enterDeclVariable?: (ctx: DeclVariableContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.declVariable`.
	 * @param ctx the parse tree
	 */
	exitDeclVariable?: (ctx: DeclVariableContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.arraySizeDecl`.
	 * @param ctx the parse tree
	 */
	enterArraySizeDecl?: (ctx: ArraySizeDeclContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.arraySizeDecl`.
	 * @param ctx the parse tree
	 */
	exitArraySizeDecl?: (ctx: ArraySizeDeclContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.stringVarDecl`.
	 * @param ctx the parse tree
	 */
	enterStringVarDecl?: (ctx: StringVarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.stringVarDecl`.
	 * @param ctx the parse tree
	 */
	exitStringVarDecl?: (ctx: StringVarDeclContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitVarDecl?: (ctx: VarDeclContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.pointerDecl`.
	 * @param ctx the parse tree
	 */
	enterPointerDecl?: (ctx: PointerDeclContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.pointerDecl`.
	 * @param ctx the parse tree
	 */
	exitPointerDecl?: (ctx: PointerDeclContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.initArray`.
	 * @param ctx the parse tree
	 */
	enterInitArray?: (ctx: InitArrayContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.initArray`.
	 * @param ctx the parse tree
	 */
	exitInitArray?: (ctx: InitArrayContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.initElemArray`.
	 * @param ctx the parse tree
	 */
	enterInitElemArray?: (ctx: InitElemArrayContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.initElemArray`.
	 * @param ctx the parse tree
	 */
	exitInitElemArray?: (ctx: InitElemArrayContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.structBody`.
	 * @param ctx the parse tree
	 */
	enterStructBody?: (ctx: StructBodyContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.structBody`.
	 * @param ctx the parse tree
	 */
	exitStructBody?: (ctx: StructBodyContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.declProcess`.
	 * @param ctx the parse tree
	 */
	enterDeclProcess?: (ctx: DeclProcessContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.declProcess`.
	 * @param ctx the parse tree
	 */
	exitDeclProcess?: (ctx: DeclProcessContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.returnSt`.
	 * @param ctx the parse tree
	 */
	enterReturnSt?: (ctx: ReturnStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.returnSt`.
	 * @param ctx the parse tree
	 */
	exitReturnSt?: (ctx: ReturnStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.ifSt`.
	 * @param ctx the parse tree
	 */
	enterIfSt?: (ctx: IfStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.ifSt`.
	 * @param ctx the parse tree
	 */
	exitIfSt?: (ctx: IfStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.loopSt`.
	 * @param ctx the parse tree
	 */
	enterLoopSt?: (ctx: LoopStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.loopSt`.
	 * @param ctx the parse tree
	 */
	exitLoopSt?: (ctx: LoopStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.whileSt`.
	 * @param ctx the parse tree
	 */
	enterWhileSt?: (ctx: WhileStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.whileSt`.
	 * @param ctx the parse tree
	 */
	exitWhileSt?: (ctx: WhileStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.repeatSt`.
	 * @param ctx the parse tree
	 */
	enterRepeatSt?: (ctx: RepeatStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.repeatSt`.
	 * @param ctx the parse tree
	 */
	exitRepeatSt?: (ctx: RepeatStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.fromSt`.
	 * @param ctx the parse tree
	 */
	enterFromSt?: (ctx: FromStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.fromSt`.
	 * @param ctx the parse tree
	 */
	exitFromSt?: (ctx: FromStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.forSt`.
	 * @param ctx the parse tree
	 */
	enterForSt?: (ctx: ForStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.forSt`.
	 * @param ctx the parse tree
	 */
	exitForSt?: (ctx: ForStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.switchSt`.
	 * @param ctx the parse tree
	 */
	enterSwitchSt?: (ctx: SwitchStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.switchSt`.
	 * @param ctx the parse tree
	 */
	exitSwitchSt?: (ctx: SwitchStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.frameSt`.
	 * @param ctx the parse tree
	 */
	enterFrameSt?: (ctx: FrameStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.frameSt`.
	 * @param ctx the parse tree
	 */
	exitFrameSt?: (ctx: FrameStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.debugSt`.
	 * @param ctx the parse tree
	 */
	enterDebugSt?: (ctx: DebugStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.debugSt`.
	 * @param ctx the parse tree
	 */
	exitDebugSt?: (ctx: DebugStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.breakSt`.
	 * @param ctx the parse tree
	 */
	enterBreakSt?: (ctx: BreakStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.breakSt`.
	 * @param ctx the parse tree
	 */
	exitBreakSt?: (ctx: BreakStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.continueSt`.
	 * @param ctx the parse tree
	 */
	enterContinueSt?: (ctx: ContinueStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.continueSt`.
	 * @param ctx the parse tree
	 */
	exitContinueSt?: (ctx: ContinueStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.cloneSt`.
	 * @param ctx the parse tree
	 */
	enterCloneSt?: (ctx: CloneStContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.cloneSt`.
	 * @param ctx the parse tree
	 */
	exitCloneSt?: (ctx: CloneStContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.sc`.
	 * @param ctx the parse tree
	 */
	enterSc?: (ctx: ScContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.sc`.
	 * @param ctx the parse tree
	 */
	exitSc?: (ctx: ScContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.eAssign`.
	 * @param ctx the parse tree
	 */
	enterEAssign?: (ctx: EAssignContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.eAssign`.
	 * @param ctx the parse tree
	 */
	exitEAssign?: (ctx: EAssignContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.assignOp`.
	 * @param ctx the parse tree
	 */
	enterAssignOp?: (ctx: AssignOpContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.assignOp`.
	 * @param ctx the parse tree
	 */
	exitAssignOp?: (ctx: AssignOpContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.eLogic`.
	 * @param ctx the parse tree
	 */
	enterELogic?: (ctx: ELogicContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.eLogic`.
	 * @param ctx the parse tree
	 */
	exitELogic?: (ctx: ELogicContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.logicOp`.
	 * @param ctx the parse tree
	 */
	enterLogicOp?: (ctx: LogicOpContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.logicOp`.
	 * @param ctx the parse tree
	 */
	exitLogicOp?: (ctx: LogicOpContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.eCompar`.
	 * @param ctx the parse tree
	 */
	enterECompar?: (ctx: EComparContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.eCompar`.
	 * @param ctx the parse tree
	 */
	exitECompar?: (ctx: EComparContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.comparOp`.
	 * @param ctx the parse tree
	 */
	enterComparOp?: (ctx: ComparOpContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.comparOp`.
	 * @param ctx the parse tree
	 */
	exitComparOp?: (ctx: ComparOpContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.eShift`.
	 * @param ctx the parse tree
	 */
	enterEShift?: (ctx: EShiftContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.eShift`.
	 * @param ctx the parse tree
	 */
	exitEShift?: (ctx: EShiftContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.eAdd`.
	 * @param ctx the parse tree
	 */
	enterEAdd?: (ctx: EAddContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.eAdd`.
	 * @param ctx the parse tree
	 */
	exitEAdd?: (ctx: EAddContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.eMul`.
	 * @param ctx the parse tree
	 */
	enterEMul?: (ctx: EMulContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.eMul`.
	 * @param ctx the parse tree
	 */
	exitEMul?: (ctx: EMulContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.eUnary`.
	 * @param ctx the parse tree
	 */
	enterEUnary?: (ctx: EUnaryContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.eUnary`.
	 * @param ctx the parse tree
	 */
	exitEUnary?: (ctx: EUnaryContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.eDot`.
	 * @param ctx the parse tree
	 */
	enterEDot?: (ctx: EDotContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.eDot`.
	 * @param ctx the parse tree
	 */
	exitEDot?: (ctx: EDotContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.ePostUnary`.
	 * @param ctx the parse tree
	 */
	enterEPostUnary?: (ctx: EPostUnaryContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.ePostUnary`.
	 * @param ctx the parse tree
	 */
	exitEPostUnary?: (ctx: EPostUnaryContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.eAtom`.
	 * @param ctx the parse tree
	 */
	enterEAtom?: (ctx: EAtomContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.eAtom`.
	 * @param ctx the parse tree
	 */
	exitEAtom?: (ctx: EAtomContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.structAtom`.
	 * @param ctx the parse tree
	 */
	enterStructAtom?: (ctx: StructAtomContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.structAtom`.
	 * @param ctx the parse tree
	 */
	exitStructAtom?: (ctx: StructAtomContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.pointerSuffix`.
	 * @param ctx the parse tree
	 */
	enterPointerSuffix?: (ctx: PointerSuffixContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.pointerSuffix`.
	 * @param ctx the parse tree
	 */
	exitPointerSuffix?: (ctx: PointerSuffixContext) => void;

	/**
	 * Enter a parse tree produced by `DIVParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `DIVParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
}

