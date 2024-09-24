const  express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.port || 3500;

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));  //serve a file 
})



app.listen(PORT, () => console.log(`Server running on port ${PORT} `)) 