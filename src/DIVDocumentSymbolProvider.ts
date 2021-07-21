import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import * as vscode from 'vscode';
import { DIVParse, DIVRange } from './DIVParse';
import { FileContext, CompilerOptionsContext, DeclProgramContext, DeclImportContext, DeclConstContext, DeclGlobalContext, DeclLocalContext, DeclPrivateContext, DeclVariableContext, ArraySizeDeclContext, StringVarDeclContext, VarDeclContext, PointerDeclContext, InitArrayContext, InitElemArrayContext, StructBodyContext, DeclProcessContext, BodyContext, StatementContext, ReturnStContext, IfStContext, LoopStContext, WhileStContext, RepeatStContext, FromStContext, ForStContext, SwitchStContext, FrameStContext, DebugStContext, BreakStContext, ContinueStContext, CloneStContext, ScContext, ConditionContext, ConstantContext, ExpContext, EAssignContext, AssignOpContext, ELogicContext, LogicOpContext, EComparContext, ComparOpContext, EShiftContext, EAddContext, EMulContext, EUnaryContext, EDotContext, EPostUnaryContext, EAtomContext, StructAtomContext, PointerSuffixContext, ParameterContext } from './DIVParser';
import { DIVParserVisitor } from './DIVParserVisitor';
import { debug } from 'console';

class DIVSymbolTreeVisitor extends AbstractParseTreeVisitor<vscode.DocumentSymbol[]> implements DIVParserVisitor<vscode.DocumentSymbol[]> {

	protected defaultResult(): vscode.DocumentSymbol[] {
		return [];
	}

	visitFile(ctx: FileContext): vscode.DocumentSymbol[] {
		let program = this.visitDeclProgram(ctx.declProgram());
		let constCtx = ctx.declConst();
		let constants = constCtx ? this.visitDeclConst(constCtx) : [];
		let globalCtx = ctx.declGlobal();
		let globals = globalCtx ? this.visitDeclGlobal(globalCtx) : [];
		return program.concat(constants, globals);
	}

	visitDeclProgram(ctx: DeclProgramContext): vscode.DocumentSymbol[] {
		let range = DIVRange(ctx);
		let symbol = new vscode.DocumentSymbol(ctx.Identifier().toString(), ctx.text, vscode.SymbolKind.Module, range, range);
		return [symbol];
	}

	visitDeclConst(ctx: DeclConstContext): vscode.DocumentSymbol[] {
		let symbols = [];
		for (let c of ctx.declSingleConst()) {
			const id = c.Identifier();
			let symbol = new vscode.DocumentSymbol(id.toString(), '', vscode.SymbolKind.Constant, DIVRange(c), DIVRange(id));
			symbols.push(symbol);
		}
		return symbols;
	}

	visitDeclGlobal(globalCtx: DeclGlobalContext): vscode.DocumentSymbol[] {
		let symbols : vscode.DocumentSymbol[] = [];
		for(let c of globalCtx.declVariable()) {
			symbols = symbols.concat(this.visitDeclVariable(c));
		}
		return symbols;
	}

	visitDeclVariable(c: DeclVariableContext): vscode.DocumentSymbol[] {
		throw new Error('Method not implemented.');
	}
}

export class DIVDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
	public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.DocumentSymbol[]> {
		return new Promise<vscode.DocumentSymbol[]>((resolve, _reject) => {
			// Parse document
			DIVParse(document.getText()).then(tree => {
				// Create visitor
				let visitor = new DIVSymbolTreeVisitor();
				// Visit tree
				resolve(visitor.visit(tree));
			});
		});
	}
}
