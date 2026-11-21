const express = require("express")

const app = express();

app.get("/home", (req, res) => {
    res.json({message: 'OK'})
})

app.listen(3000, () => {
    console.log("server started on port 3000")
})