import * as vscode from 'vscode';
//import { DIVSignatureHelpProvider } from './DIVSignatureHelpProvider';
import { DIVDocumentSymbolProvider } from './DIVDocumentSymbolProvider';

export function activate(context: vscode.ExtensionContext) {
    //let signatureHelpProvider = vscode.languages.registerSignatureHelpProvider('div', new DIVSignatureHelpProvider(), '(', ',');   
    //context.subscriptions.push(signatureHelpProvider);    
    let documentSymbolProvider = vscode.languages.registerDocumentSymbolProvider({scheme: '*', language: 'div'}, new DIVDocumentSymbolProvider());
    context.subscriptions.push(documentSymbolProvider);
}

export function deactivate() {
}