import * as vscode from 'vscode';
//import { DIVSignatureHelpProvider } from './DIVSignatureHelpProvider';
import { DIVDocumentSymbolProvider } from './DIVDocumentSymbolProvider';
import { DIVParse } from "./DIVParse";
import { DIVParserListener } from './DIVParserListener';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { ANTLRErrorListener, Recognizer, RecognitionException } from 'antlr4ts';

let diagnosticCollection: vscode.DiagnosticCollection;

export function activate(context: vscode.ExtensionContext) {
    //let signatureHelpProvider = vscode.languages.registerSignatureHelpProvider('div', new DIVSignatureHelpProvider(), '(', ',');   
    //context.subscriptions.push(signatureHelpProvider);    
    let documentSymbolProvider = vscode.languages.registerDocumentSymbolProvider({ scheme: '*', language: 'div' }, new DIVDocumentSymbolProvider());
    context.subscriptions.push(documentSymbolProvider);
    diagnosticCollection = vscode.languages.createDiagnosticCollection('div');
    context.subscriptions.push(diagnosticCollection);
    vscode.workspace.onDidOpenTextDocument((e) => updateDiagnostics(e));
    vscode.workspace.onDidChangeTextDocument((e) => updateDiagnostics(e.document));
    vscode.workspace.onDidCloseTextDocument((e) => diagnosticCollection.delete(e.uri));
}

export function deactivate() {
    diagnosticCollection.dispose();
}

class ErrorListener implements ANTLRErrorListener<any> {
    document: vscode.TextDocument;
    diags: vscode.Diagnostic[] = [];

    constructor(document: vscode.TextDocument) {
        this.document = document;
    }
    syntaxError<T>(recognizer: Recognizer<T, any>, offendingSymbol: T, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined) {
        let range = new vscode.Range(line-1, charPositionInLine, line-1, charPositionInLine + 1);
        this.diags.push(new vscode.Diagnostic(range, msg, vscode.DiagnosticSeverity.Error));
    }
}

function updateDiagnostics(doc: vscode.TextDocument) {
    if (doc.languageId != 'div') return;
    let errorListener = new ErrorListener(doc);
    DIVParse(doc.getText(), errorListener).then(() => {
        diagnosticCollection.set(doc.uri, errorListener.diags);
    });
}