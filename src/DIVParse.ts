import { DIVLexer } from './DIVLexer';
import { DIVParser, FileContext } from './DIVParser';
import { CharStreams, CommonTokenStream, ANTLRErrorListener, ParserRuleContext } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import * as vscode from 'vscode';

export function DIVParse(text: string, errorListener?: ANTLRErrorListener<any>): Thenable<FileContext> {
	return new Promise<FileContext>((resolve, _reject) => {
		let inputStream = CharStreams.fromString(text);
		let lexer = new DIVLexer(inputStream);
		let tokenStream = new CommonTokenStream(lexer);
		let parser = new DIVParser(tokenStream);
		parser.removeErrorListeners();
		if (errorListener) {
			parser.addErrorListener(errorListener);
		}
		resolve(parser.file());
	});
}

export function DIVRange(obj: ParserRuleContext): vscode.Range;
export function DIVRange(obj: TerminalNode): vscode.Range;
export function DIVRange(obj: ParserRuleContext | TerminalNode): vscode.Range {
	if (obj instanceof TerminalNode) {
		const token = (obj as TerminalNode).symbol;
		return new vscode.Range(token.line - 1, token.charPositionInLine, token.line - 1, token.charPositionInLine + token.stopIndex - token.startIndex);
	} else {
		const ctx = obj as ParserRuleContext;
		if (!ctx.stop) {
			return new vscode.Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.start.line - 1, ctx.start.charPositionInLine);
		} else {
			return new vscode.Range(ctx.start.line - 1, ctx.start.charPositionInLine, ctx.stop.line - 1, ctx.stop.charPositionInLine + ctx.stop.stopIndex - ctx.stop.startIndex);
		}
	}
}

