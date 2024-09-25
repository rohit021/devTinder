const express = require('express');

const app = express();

app.use("/test", (req, res) =>{
    res.send("welcome to my world !!!!");
})

app.listen(8000, (req, res) =>{
    console.log("listening on PORT 8000");
})