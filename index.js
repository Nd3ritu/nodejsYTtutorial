
//import fs common core module 

const fs  =require('fs')
const path = require('path')


fs.readFile(path.join(__dirname, 'Files', 'starter.txt'), (err, data) => {
    if (err) throw err;
    console.log(data.toString())
    
})

fs.writeFile(path.join(__dirname, 'Files', 'reply.txt'), 'Nice to meet you', (err) => {
    if(err)  throw err;
    console.log('Write complete')
})


// console.log(__dirname)
// console.log(__filename)