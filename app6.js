const express = require('express');
const app = express();
const pages = require('./routes/pages')

app.get("/", (req, res) => {
    res.send("hello World!")
})
app.use('/pages', pages)
app.listen(5005, () => {
    console.log("srever is up on 5005...");
});