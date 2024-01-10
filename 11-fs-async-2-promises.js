const { readFile, writeFile } = require('fs')

/**
 * TODO: 2nd approach with promises
*/

// // read first file (async)
// readFile('./content/first.txt', 'utf-8', (err, result) => {
//     if(err){
//         console.log(err)
//         return
//     }
//     // console.log(result);
//     const first = result;
    
//     // read second file (async)
//     readFile('./content/second.txt', 'utf-8', (err, result) => {
//         if(err){
//             console.log(err)
//             return
//         }
//         // console.log(result);
//         const second = result;

//         // write result to a new file (async)
//         writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'}, (err, result) => {
//             if(err){
//                 console.log(err)
//                 return
//             }
//             console.log(result);
//         })
//     })
// })