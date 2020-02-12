import * as vscode from 'vscode';
import {DIVLexer} from './DIVLexer';
import {DIVParser} from './DIVParser';
import {DIVParserListener} from './DIVParserListener';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';

export class DIVDocument {
    document: vscode.TextDocument;
    public tree;

    constructor(document: vscode.TextDocument) {
        this.document = document;
        let inputStream = new ANTLRInputStream(document.getText());
        let lexer = new DIVLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new DIVParser(tokenStream);
        this.tree = parser.file();
    }
}