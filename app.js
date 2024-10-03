const express = require("express");
const app = express();
const port = 3001;
const { Task } = require("./models");
app.get("/", async (req, res) => {
    const tasks = await Task.findAll();
    res.send(tasks);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
