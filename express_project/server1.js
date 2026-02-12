const { user } = require('./data1');
const express = require('express')
const app = express();

app.get("/user/page", (req, res) => {

    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startindex = (page - 1) * limit;
    const endindex = page * limit;

    const pagedata = user.slice(startindex, endindex);
    res.json(pagedata)
})

app.listen(3000, () => {
    console.log("server is running")
})