
//import fs common core module 

const fs  =require('fs')
const path = require('path')


fs.readFile(path.join(__dirname, 'Files', 'starter.txt'), (err, data) => {
    if (err) throw err;
    console.log(data.toString())
    
})


console.log(__dirname)
console.log(__filename)