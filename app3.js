const express = require('express');
const app = express();
const user = require('./routes/user')

app.get('/', (req, res) =>{
    res.send()
})

app.use('/user', user)
app.listen(5005)