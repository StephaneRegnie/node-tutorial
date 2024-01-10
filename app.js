const { readFile, writeFile } = require('fs')

/**
 * 1st approach with callbacks
 */
console.log('start')

// read first file (async)
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    // console.log(result);
    console.log('done with readingFile 1')
    const first = result;
    
    // read second file (async)
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return
        }
        // console.log(result);
        console.log('done with readingFile 2')
        const second = result;

        // write result to a new file (async)
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, {flag: 'a'}, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log('done with writeFile')
            // console.log(result);
        })
    })
})

console.log('starting the next one')