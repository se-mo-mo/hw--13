const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("hello World!")
})
app.listen(5005, () => {
    console.log("srever is up on 5005...");
});