const fs = require('fs');

// fs.mkdir('tutorial', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.writeFile('./tutorial/tutorial.txt', 'This an tutorial.txt file', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('Successfully created file')
//             }
//         })
//     }
// })

// fs.unlink('./tutorial/tutorial.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         // only delete folder when folder empty
//         fs.rmdir('tutorial', (err) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('deleted successfully folder ');
//             }
//         })
//     }
// })


// delete files array in folder
// fs.readdir('test', (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         files.map(file => {
//             fs.unlink('./test/' + file, (err) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log('delete file');
//                 }
//             })
//         });
//     }
// });


