const express = require('express');
const app = express();

app.get('/', (req,res) =>
{
    res.render('..pages/index.ejs');
}
)

app.listen("localhost:(3000)");