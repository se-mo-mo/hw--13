const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '..\\public\\htmlPart8.html')

})

app.get('/cssPart8.css', (req, res)=>{
    res.sendFile(__dirname + '..\\public\\cssPart8.css')
})

app.get('/jsPart8.js', (req, res)=>{
    res.sendFile(__dirname + '..\\public\\jsPart8.js')
})
app.listen(5005)