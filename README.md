# DIV support for VSCode

This extension provides language support for DIV Games Studio source files.

https://github.com/vii1/vscode-div

## Features

Just syntax highlighting is supported for now.

The only flavor of DIV supported by this extension is **DIV 2**. This means other variants of DIV like BennuGD, Gemix, etc. may be incorrectly highlighted. Support for other flavors of DIV is not planned at the moment.

## Requirements

**IMPORTANT: The parser may fail if you open a file with the wrong encoding.** If you work with a DOS version of DIV, you probably want to default to a DOS codepage when working with .PRG files. For example, if you use codepage 850 (DOS Western Europe), add this to your `settings.json`:

```json
	"[div]": {
        "files.encoding": "cp850"
    },
```

You can see a list of available codepages [here](https://docs.microsoft.com/en-us/windows/win32/intl/code-page-identifiers).

You can still [switch encodings](https://code.visualstudio.com/docs/editor/codebasics#_file-encoding-support) on the fly whenever you need.

## Extension Settings

None.

## Known Issues

 * `COMPILER_OPTIONS _free_sintax` _(sic)_ is not supported. You shouldn't ever use it, anyway.
 * `COMPILER_OPTIONS _case_sensitive` is not supported at the moment.

Let me know at https://github.com/vii1/vscode-div/issues if you encounter any issues.

## Release Notes

### 0.1.2
 - Bug fixes

### 0.1.0

- Initial release
- Syntax highlighting
