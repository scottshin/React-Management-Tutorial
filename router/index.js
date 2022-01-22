const express = require('express')
const router = express.Router();
const MovieCtrl = require('../controllers/movie.ctrl');


router.get('/', (req, res)=>
{
  res.status(200).json({msg:"server live"} );
})

router.use('/hello', (req, res) => {
  res.status(200).json( {msg: "hello" } );
})

router.use('/bye', (req, res)=> {
  res.status(200).json({msg: "bye" });
})



// api 
router.get('/movies', MovieCtrl.getMovies );
router.post('/movies', MovieCtrl.postMovies );
router.put('/movies', MovieCtrl.putMovies );
router.delete('/movies', MovieCtrl.deleteMovies );


router.get('/customers', (req,res) => {
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
module.exports = router;
