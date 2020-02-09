import * as vscode from 'vscode';

export class DIVSignatureHelpProvider implements vscode.SignatureHelpProvider
{
    provideSignatureHelp(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.SignatureHelpContext): vscode.ProviderResult<vscode.SignatureHelp> {
        throw new Error("Not implemented");
    }    
}