const fs = require('fs');

// fs.writeFile('example.txt', 'This is an example', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File successfully created');
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(file);
//             }
//         })
//     }
// })
// fs.rename('example2.txt', 'example.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Successfully renamed the file');
//     }
// })

// fs.appendFile('example.txt', ' some data being appended', (err) => {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log('Successfully appended data to file');
//     }
// })

// fs.unlink('example.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Sucessfully deleted file');
//     }
// })

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});