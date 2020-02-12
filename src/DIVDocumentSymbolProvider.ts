import * as vscode from 'vscode';
import { DIVDocument } from './DIVDocument';
import { DIVParserListener } from './DIVParserListener';
import { DeclProgramContext, DeclProcessContext } from './DIVParser';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { ErrorNode } from "antlr4ts/tree/ErrorNode";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

class DocumentSymbolListener implements DIVParserListener {
    public symbols: vscode.SymbolInformation[];
    private document;

    constructor(document: vscode.TextDocument) {
        this.symbols = [];
        this.document = document;
    }

    exitDeclProgram(ctx: DeclProgramContext) {
        let location = new vscode.Location(this.document.uri, new vscode.Position(ctx.start.line-1, ctx.start.charPositionInLine));
        let symbol = new vscode.SymbolInformation(ctx.Identifier().toString(), vscode.SymbolKind.Module, '', location);
        this.symbols.push(symbol);
    }

    exitDeclProcess(ctx: DeclProcessContext) {
        let location = new vscode.Location(this.document.uri, new vscode.Position(ctx.start.line-1, ctx.start.charPositionInLine));
        let kind = ctx.PROCESS() ? vscode.SymbolKind.Class : vscode.SymbolKind.Function;
        let symbol = new vscode.SymbolInformation(ctx.Identifier().toString(), kind, '', location);
        this.symbols.push(symbol);
    }

    visitTerminal?: (node: TerminalNode) => void;
    visitErrorNode?: (node: ErrorNode) => void;
    enterEveryRule?: (ctx: ParserRuleContext) => void;
    exitEveryRule?: (ctx: ParserRuleContext) => void;
}

export class DIVDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
    public provideDocumentSymbols( document: vscode.TextDocument, token: vscode.CancellationToken): Thenable<vscode.SymbolInformation[]> {
        return new Promise<vscode.SymbolInformation[]>((resolve, reject) => {
            let doc = new DIVDocument(document);
            let listener: DocumentSymbolListener = new DocumentSymbolListener(document);
            ParseTreeWalker.DEFAULT.walk(listener, doc.tree);
            resolve(listener.symbols);
        });
    }
}
