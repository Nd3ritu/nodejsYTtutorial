const  express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.port || 3500;

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));  //serve a file 
})

app.get('/newpage.html', (req,res) => {
  res.sendFile(path.join(__dirname, 'views' , 'newpage.html'))


})


app.get('/oldpage(.html)?', (rq,res) => {
  res.redirect(301, '/newpage.html')
})


app.listen(PORT, () => console.log(`Server running on port ${PORT} `)) 