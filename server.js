const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({exteded:true}))
app.use(express.json() );

app.get('/api/customers', (req,res) => {
    res.send(
      [
       {
        'id' : 1, 
        'image' : 'https://placeimg.com/64/64/1',
        'name': '홍길동',
        'birthday': '962223',
        'gender': '남자',
        'job' : '대학생  '
      },
      {
        'id' : 2, 
        'image' : 'https://placeimg.com/64/64/xi2',
        'name': '신희운',
        'birthday': '962223',
        'gender': '남자',
        'job' : '개발자   '
      },
      {
        'id' : 3, 
        'image' : 'https://placeimg.com/64/64/3',
        'name': '지유나',
        'birthday': '962223',
        'gender': '남자',
        'job' : '가정주부 '
       }
    ]);
    });

app.listen(port, () => console.log ('Listing on port', port ));