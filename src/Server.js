const express = require('express');
const app = express();
const PORT = 7070;
app.use(express.json());

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });
const products = [
    {
      name: 'iPhone 13',
      color: 'White',
      company: 'Apple'
    },
    {
      name: 'OnePlus 9',
      color: 'Blue',
      company: 'Oneplus'
    },
    {
      name: 'iPhone 12',
      color: 'Purple',
      company: 'Apple'
    }
]

app.get('/', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(products)
  })

app.listen(PORT, () => console.log(`API Attiva`))