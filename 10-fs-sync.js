const { readFileSync, writeFileSync } = require('fs')

console.log('start')

// Reading files sync (exists also async version)
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

// Create or overwrite content into files sync (exists also async version)
// Creates new file or overwrite it by default (or append new content if param flag set to 'a' is passed as third param)
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' })

console.log('done with this task')
console.log('starting the next one')
