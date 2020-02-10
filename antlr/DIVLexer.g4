lexer grammar DIVLexer;

A: [Aa] ;
B: [Bb] ;
C: [Cc] ;
D: [Dd] ;
E: [Ee] ;
F: [Ff] ;
G: [Gg] ;
H: [Hh] ;
I: [Ii] ;
J: [Jj] ;
K: [Kk] ;
L: [Ll] ;
M: [Mm] ;
N: [Nn] ;
O: [Oo] ;
P: [Pp] ;
Q: [Qq] ;
R: [Rr] ;
S: [Ss] ;
T: [Tt] ;
U: [Uu] ;
V: [Vv] ;
W: [Ww] ;
X: [Xx] ;
Y: [Yy] ;
Z: [Zz] ;

PROGRAM:	        P R O G R A M ;
CONST:	            C O N S T ;
GLOBAL:	            G L O B A L ;
LOCAL:	            L O C A L ;
BEGIN:	            B E G I N ;
END:	            E N D ;
PROCESS:	        P R O C E S S ;
PRIVATE:	        P R I V A T E ;
STRUCT:	            S T R U C T ;
IMPORT:	            I M P O R T ;
SETUP_PROGRAM:	    S E T U P '_' P R O G R A M ;
STRING:	            S T R I N G ;
BYTE:	            B Y T E ;
WORD:	            W O R D ;
INT:	            I N T ;
COMPILER_OPTIONS:	C O M P I L E R '_' O P T I O N S ;
FUNCTION:	        F U N C T I O N ;
UNTIL:	            U N T I L ;
ELSE:	            E L S E ;
RETURN:	            R E T U R N ;
FROM:	            F R O M ;
TO:	                T O ;
STEP:	            S T E P ;
IF:	                I F ;
LOOP:	            L O O P ;
WHILE:	            W H I L E ;
REPEAT:	            R E P E A T ;
FOR:	            F O R ;
SWITCH:	            S W I T C H ;
CASE:	            C A S E ;
DEFAULT:	        D E F A U L T ;
FRAME:	            F R A M E ;
BREAK:	            B R E A K ;
CONTINUE:	        C O N T I N U E ;
CLONE:	            C L O N E ;
DEBUG:	            D E B U G ;

SEMICOLON:  [;:] ;
COMMA:      ',' ;
LBRACKET:   '[' ;
RBRACKET:   ']' ;
ASSIGN:     ':'? '=' ;
DUP:        D U P ;
LPAREN:     '(' ;
RPAREN:     ')' ;
RSHIFT:     '>>' ;
LSHIFT:     '<<' ;
OR:         O R | '||' | '|' ;
XOR:        X O R | '^^' ;
AND:        A N D | '&&' ;
HAT:        '^' ;
AMP:        '&' ;
NEG:        N E G ;
POINTER:    P O I N T E R ;
OFFSET:     O F F S E T ;
NOT:        N O T | '!' ;
ADD:        '+' ;
SUB:        '-' ;
MUL:        '*' ;
DIV:        '/' ;
MOD:        M O D | '%' ;
INC:        '++' ;
DEC:        '--' ;
EQ:         '==' | '_' E Q ;
NE:         '<>' | '!=' | '_' N E ;
GT:         '>' | '_' G T ;
LT:         '<' | '_' L T ;
LE:         '<=' | '=<' | '_' L E ;
GE:         '>=' | '=>' | '_' G E ;
SIZEOF:     S I Z E O F ;
TYPE:       T Y P E ;
ID:         I D | W H O A M I ;
DOT:        '.' | '->' ;
RANGE:      '..' ;
ADDASSIG:   '+=' ;
SUBASSIG:   '-=' ;
MULASSIG:   '*=' ;
DIVASSIG:   '/=' ;
MODASSIG:   '%=' ;
ANDASSIG:   '&=' ;
ORASSIG:    '|=' ;
XORASSIG:   '^=' ;
SHRASSIG:   '>>=' ;
SHLASSIG:   '<<=' ;

Number  :   '0' [xX] HEX_DIGIT+
        |   DIGIT+
        ;

StringLiteral   :   '"' ( '""' | ~('"'|'\r'|'\n') )* '"'
                |   '\'' ( '\'\'' | ~('\''|'\r'|'\n') )* '\''
                ;

fragment HEX_DIGIT: [0-9a-fA-F] ;

Identifier  :   ID_LETTER ( ID_LETTER | DIGIT )+
            ;

fragment DIGIT: [0-9] ;

fragment ID_LETTER
        // [_#ªº$×£Øøa-zñçæâäàåáêëèéîïìíôöòóûüùúÿA-ZÑÇÆÂÄÀÅÁÊËÈÉÎÏÌÍÔÖÒÓÛÜÙÚŸ]
    :   [_#\u00aa\u00ba$\u00d7\u00a3\u00d8\u00f8]
    |   [a-z\u00f1\u00e7\u00e6\u00e2\u00e4\u00e0\u00e5\u00e1\u00ea\u00eb\u00e8\u00e9\u00ee\u00ef\u00ec\u00ed\u00f4\u00f6\u00f2\u00f3\u00fb\u00fc\u00f9\u00fa\u00ff]
    |   [A-Z\u00d1\u00c7\u00c6\u00c2\u00c4\u00c0\u00c5\u00c1\u00ca\u00cb\u00c8\u00c9\u00ce\u00cf\u00cc\u00cd\u00d4\u00d6\u00d2\u00d3\u00db\u00dc\u00d9\u00da\u0178]
    ;

CommentStart: '/*' -> skip, pushMode(COMMENT);

LINE_COMMENT
    : '//' ~[\r\n]* -> skip
    ;

WS  :   [ \t\r\n]+ -> skip;

mode COMMENT;
CommentNest: '/*' -> skip, pushMode(COMMENT);
CommentEnd: '*/' -> skip, popMode;
Anything: .+? -> skip;
