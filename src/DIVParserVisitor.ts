// Generated from antlr/DIVParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { FileContext } from "./DIVParser";
import { CompilerOptionsContext } from "./DIVParser";
import { DeclProgramContext } from "./DIVParser";
import { DeclImportContext } from "./DIVParser";
import { DeclConstContext } from "./DIVParser";
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `DIVParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface DIVParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `DIVParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.compilerOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilerOptions?: (ctx: CompilerOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.declProgram`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclProgram?: (ctx: DeclProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.declImport`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclImport?: (ctx: DeclImportContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.declConst`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclConst?: (ctx: DeclConstContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.declGlobal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclGlobal?: (ctx: DeclGlobalContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.declLocal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclLocal?: (ctx: DeclLocalContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.declPrivate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclPrivate?: (ctx: DeclPrivateContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.declVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclVariable?: (ctx: DeclVariableContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.arraySizeDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArraySizeDecl?: (ctx: ArraySizeDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.stringVarDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringVarDecl?: (ctx: StringVarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.pointerDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerDecl?: (ctx: PointerDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.initArray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitArray?: (ctx: InitArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.initElemArray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitElemArray?: (ctx: InitElemArrayContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.structBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructBody?: (ctx: StructBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.declProcess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclProcess?: (ctx: DeclProcessContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBody?: (ctx: BodyContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.returnSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnSt?: (ctx: ReturnStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.ifSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfSt?: (ctx: IfStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.loopSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoopSt?: (ctx: LoopStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.whileSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileSt?: (ctx: WhileStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.repeatSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeatSt?: (ctx: RepeatStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.fromSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromSt?: (ctx: FromStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.forSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForSt?: (ctx: ForStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.switchSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchSt?: (ctx: SwitchStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.frameSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFrameSt?: (ctx: FrameStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.debugSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDebugSt?: (ctx: DebugStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.breakSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakSt?: (ctx: BreakStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.continueSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueSt?: (ctx: ContinueStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.cloneSt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCloneSt?: (ctx: CloneStContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.sc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSc?: (ctx: ScContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.eAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEAssign?: (ctx: EAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.assignOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignOp?: (ctx: AssignOpContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.eLogic`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitELogic?: (ctx: ELogicContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.logicOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicOp?: (ctx: LogicOpContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.eCompar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitECompar?: (ctx: EComparContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.comparOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparOp?: (ctx: ComparOpContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.eShift`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEShift?: (ctx: EShiftContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.eAdd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEAdd?: (ctx: EAddContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.eMul`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEMul?: (ctx: EMulContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.eUnary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEUnary?: (ctx: EUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.eDot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEDot?: (ctx: EDotContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.ePostUnary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEPostUnary?: (ctx: EPostUnaryContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.eAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEAtom?: (ctx: EAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.structAtom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructAtom?: (ctx: StructAtomContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.pointerSuffix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerSuffix?: (ctx: PointerSuffixContext) => Result;

	/**
	 * Visit a parse tree produced by `DIVParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
}

