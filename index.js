
//import fs common core module 

const fs  =require('fs')
const path = require('path')

//Read file
fs.readFile(path.join(__dirname, 'Files', 'starter.txt'), (err, data) => {
    if (err) throw err;
    console.log(data.toString())
    
})


//Write file
fs.writeFile(path.join(__dirname, 'Files', 'reply.txt'), 'Nice to meet you', (err) => {
    if(err)  throw err;
    console.log('Write complete')
})

//Appendfile
fs.appendFile(path.join(__dirname, 'Files', 'test.txt'), "testing text", () => {
    console.log("Append complete")
})


// console.log(__dirname)
// console.log(__filename)