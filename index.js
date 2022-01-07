const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const url = require('url');

// Define Server
const app = express();

// Set up forms
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies 

// Set up the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

// Routes

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.post('/', (req, res) => {
    res.redirect(url.format({
        pathname: "/search",
        query: req.body
    }))
});

app.get("/search", (req, res) => {
    res.json(req.query)
});

app.listen(8000);
console.log('Server is listening on port 8000');