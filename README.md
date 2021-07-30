# DIV support for VSCode

This extension provides language support for DIV Games Studio source files.

Project home: https://github.com/vii1/vscode-div

Install from [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=vscode-div.div)

## Features

Just syntax highlighting is supported for now.

The only flavor of DIV supported by this extension is **DIV 2**. This means other variants of DIV like BennuGD, Gemix, etc. may be incorrectly highlighted. Support for other flavors of DIV is not planned at the moment.

## Requirements

None.

## Extension Settings

None.

## Known Issues

 * `COMPILER_OPTIONS _free_sintax` _(sic)_ is not supported. You shouldn't ever use it, anyway.
 * `COMPILER_OPTIONS _case_sensitive` is not supported at the moment.

Let me know at https://github.com/vii1/vscode-div/issues if you encounter any issues.

## Release Notes

This version adds syntax highlighting for hexadecimal constants.

See `CHANGELOG.md` for the full history of changes.
