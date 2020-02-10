%CLASSPATH=.\class;C:\ProgramData\chocolatey\lib\antlr4\antlr-4.7.2-complete.jar;$(%CLASSPATH)
TESTFILE=r:\Tokenkai.prg

.BEFORE:
	-mkdir out >NUL 2>NUL
	-mkdir out\class >NUL 2>NUL

all: classes .SYMBOLIC

out\DIVLexer.java: DIVLexer.g4
	antlr4 -o out DIVLexer.g4

out\DIVParser.java: DIVParser.g4
	antlr4 -o out DIVParser.g4

out\class\DIVLexer.class: out\DIVLexer.java
	! pushd out && javac -d class DIVLexer.java

out\class\DIVParser.class: out\DIVParser.java out\DIVLexer.java
	! pushd out && javac -d class DIVParser.java

classes: out\class\DIVLexer.class out\class\DIVParser.class .SYMBOLIC

test-tokens: classes .SYMBOLIC
	! pushd out\class && grun DIV file -tokens -encoding CP850 $(TESTFILE)

test-tree: classes .SYMBOLIC
	! pushd out\class && grun DIV file -gui -encoding CP850 $(TESTFILE)

clean: .SYMBOLIC
	-del out\*.interp
	-del out\*.java
	-del out\*.tokens
	-del out\class\*.class
