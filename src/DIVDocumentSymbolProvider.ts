import * as vscode from 'vscode';
import { DIVParse } from './DIVParse';

export class DIVDocumentSymbolProvider implements vscode.DocumentSymbolProvider {
    public provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Thenable<vscode.SymbolInformation[]> {
        return new Promise<vscode.SymbolInformation[]>((resolve, _reject) => {
            DIVParse(document.getText()).then(tree => {
                let symbols: vscode.SymbolInformation[] = [];
                const ctx = tree.declProgram();
                let location = new vscode.Location(document.uri, new vscode.Position(ctx.start.line - 1, ctx.start.charPositionInLine));
                let symbol = new vscode.SymbolInformation(ctx.Identifier().toString(), vscode.SymbolKind.Module, '', location);
                symbols.push(symbol);
                for(const ctx of tree.declProcess()) {
                    location = new vscode.Location(document.uri, new vscode.Position(ctx.start.line - 1, ctx.start.charPositionInLine));
                    let kind = ctx.PROCESS() ? vscode.SymbolKind.Class : vscode.SymbolKind.Function;
                    symbol = new vscode.SymbolInformation(ctx.Identifier().toString(), kind, '', location);
                    symbols.push(symbol);            
                }
                resolve(symbols);
            });
        });
    }
}
