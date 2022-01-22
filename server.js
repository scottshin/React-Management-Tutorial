const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({exteded:true}))
app.use(express.json() );


const router = require('./router')
app.use('/api', router );



app.listen(port, () => console.log ('Listing on port', port ));