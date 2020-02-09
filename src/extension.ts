import * as vscode from 'vscode';
import { DIVSignatureHelpProvider } from './DIVSignatureHelpProvider';

export function activate(context: vscode.ExtensionContext) {
    console.log("OLE OLE EXTENSION DIV");
    let signatureHelpProvider = vscode.languages.registerSignatureHelpProvider('div', new DIVSignatureHelpProvider(), '(', ',');
    context.subscriptions.push(signatureHelpProvider);
}

export function deactivate() {
}