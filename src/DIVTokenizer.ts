import Tokenizer from 'tokenizer';

class MultiLineComment {
    public test(str: string): boolean {
        if(!str.startsWith('/*')) return false;
        var nest = 1;
        str = str.substring(2);
        while(str.length > 1) {
            var m = str.match(/\/\*|\*\//);
            if(!m) return false;
            if(m[0] == '/*') ++nest;
            if(m[0] == '*/') {
                --nest;
                if(nest == 0) return true;
            }
            str = str.substring(m.index + 2);
        }
        return false;
    }
}

export class DIVTokenizer extends Tokenizer{

    constructor() {
        super();
        super.addRule(new MultiLineComment(), 'multilineComment');
        super.ignore('multilineComment');
        super.addRule(/^\/\/[^\r\n]*$/, 'lineComment');
        super.ignore('lineComment');

        super.addRule(/^("([^"]|"")*"(?!")|'([^']|'')*'(?!'))$/, 'string');
        super.addRule(/^0[xX][0-9a-fA-F]+$/, 'hexNumber');
        super.addRule(/^[0-9]+$/, 'number');
        super.addRule(/^\b(struct|string|byte|word|int|program|const|global|local|begin|end|process|private|import|setup_program|compiler_options|function|until|else|return|from|to|step|if|loop|while|repeat|for|switch|case|default|frame|break|continue|clone|debug|dup|pointer|offset|sizeof|type|id|whoami)\b$/i, 'keyword');

        // Operadores de hasta 3 caracteres
        super.addRule(/^>>=$/, 'shrassig');
        super.addRule(/^<<=$/, 'shlassig');

        // Operadores de hasta 2 caracteres
        super.addRule(/^(\bor\b|\|\||\|)$/i, 'or');
        super.addRule(/^(\bxor\b|\^\^)$/i, 'xor');
        super.addRule(/^(\band\b|&&)$/i, 'and');
        super.addRule(/^>>$/, 'shiftr');
        super.addRule(/^<<$/, 'shiftl');
        super.addRule(/^\+\+$/, 'inc');
        super.addRule(/^\-\-$/, 'dec');
        super.addRule(/^(==|\b_eq\b)$/, 'equals');
        super.addRule(/^(<=|\b_le\b)$/, 'le');
        super.addRule(/^(>=|\b_ge\b)$/, 'ge');
        super.addRule(/^\.\.$/, 'range');
        super.addRule(/^(\.|->)$/, 'dot');
        super.addRule(/^\+=$/, 'addassig');
        super.addRule(/^-=$/, 'subassig');
        super.addRule(/^\*=$/, 'mulassig');
        super.addRule(/^\/=$/, 'divassig');
        super.addRule(/^%=$/, 'modassig');
        super.addRule(/^&=$/, 'andassig');
        super.addRule(/^\|=$/, 'orassig');
        super.addRule(/^\^=$/, 'xorassig');

        // Operadores de 1 caracter
        super.addRule(/^:?=$/, 'assign');
        super.addRule(/^[;:]$/, 'semicolon');
        super.addRule(/^,$/, 'comma');
        super.addRule(/^\[$/, 'lbracket');
        super.addRule(/^]$/, 'rbracket');
        super.addRule(/^\($/, 'lparen');
        super.addRule(/^\)$/, 'rparen');
        super.addRule(/^\^$/, 'hat');
        super.addRule(/^&$/, 'amp');
        super.addRule(/^(\bnot\b|!)$/i, 'not');
        super.addRule(/^\+$/, 'add');
        super.addRule(/^-$/, 'sub');
        super.addRule(/^\*$/, 'mul');
        super.addRule(/^\/$/, 'div');
        super.addRule(/^(%|\bmod\b)$/i, 'mod');
        super.addRule(/^(>|\b_gt\b)$/, 'gt');
        super.addRule(/^(<|\b_lt\b)$/, 'lt');

        super.addRule('whitespace');
        super.ignore('whitespace');
    }
}