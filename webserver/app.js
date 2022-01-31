require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname+'/views/partials', function (err){});

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.render('home');
});

app.get('/generic',(req,res)=>{
    res.render('generic');
});

app.get('/elements',(req,res)=>{
    res.render('elements');
});

app.listen(port,()=> {
    console.log(`Example app listening at https:localhost:${port}`);
})