# dist-exiftool
Fork of [https://github.com/Sobesednik/dist-exiftool](https://github.com/Sobesednik/dist-exiftool)

A distribution of _exiftool_. Depending on the platform, it will install
either [exiftool.pl](https://www.npmjs.com/package/@mcmics/exiftool.pl) or
[exiftool.exe](https://www.npmjs.com/package/@mcmics/exiftool.exe) module.
Current version is 12.24.

[![npm version](https://badge.fury.io/js/%40mcmics%2Fdist-exiftool.svg)](https://badge.fury.io/js/%40mcmics%2Fdist-exiftool)
[![Build Status](https://api.travis-ci.com/MCMicS/dist-exiftool.svg?branch=master)](https://travis-ci.com/github/MCMicS/dist-exiftool)
[![Build status](https://ci.appveyor.com/api/projects/status/aey678ctf4uj8rec/branch/master?svg=true)](https://ci.appveyor.com/project/MCMicS/dist-exiftool/branch/master)

## Usage
The module exports a path to the exiftool executable.

```js
const execFile = require('child_process').execFile;
const exiftool = require('@mcmics/dist-exiftool');

execFile(exiftool, ['-j', 'image.jpg'], (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
	console.log(`stderr: ${stderr}`);
});
```

## Links
[exiftool](http://www.sno.phy.queensu.ca/~phil/exiftool/)

[sourceforge](https://sourceforge.net/projects/exiftool/)

[cpan](http://search.cpan.org/~exiftool/)

## License
Artistic License 2.0
