// When file is too huge, we use stream to read& write file without loading the full file at once.

const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('./example2.txt');
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
})
//shorthand by pipe
readStream.pipe(writeStream);

//transform streams
// const fs = require('fs');
// const zlib = require('zlib');
// const gzip = zlib.createGzip();
// const readStream = fs.createReadStream('./example.txt', 'utf8');
// const writeStream = fs.createWriteStream('./example2.txt.gz');

// readStream.pipe(gzip).pipe(writeStream);

//unzip
// const fs = require('fs');
// const zlib = require('zlib');
// const gunzip = zlib.createGunzip();
// const readStream = fs.createReadStream('./example2.txt.gz');
// const writeStream = fs.createWriteStream('uncompressed.txt');

// readStream.pipe(gunzip).pipe(writeStream);


