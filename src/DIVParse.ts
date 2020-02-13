import {DIVLexer} from './DIVLexer';
import {DIVParser, FileContext} from './DIVParser';
import { ANTLRInputStream, CommonTokenStream, ANTLRErrorListener } from 'antlr4ts';

export function DIVParse(text:string, errorListener?: ANTLRErrorListener<any>): Thenable<FileContext> {
    return new Promise<FileContext>((resolve, _reject) => {
        let inputStream = new ANTLRInputStream(text);
        let lexer = new DIVLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new DIVParser(tokenStream);
        parser.removeErrorListeners();
        if(errorListener) {
            parser.addErrorListener(errorListener);
        }
        resolve(parser.file());
    });
}
