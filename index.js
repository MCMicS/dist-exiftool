module.exports = process.platform === 'win32' ? require('@mcmics/exiftool.exe') : require('@mcmics/exiftool.pl');
