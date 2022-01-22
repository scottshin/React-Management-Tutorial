const express = require('express')
const router = express.Router();



const getMovies = (req, res)=> {
    res.status(200).json({msg: "movie.. get" });
}
const postMovies = (req, res)=> {
    res.status(200).json({msg: "movie.. post" });
}
const putMovies = (req, res)=> {
    res.status(200).json({msg: "movie.. put" });
}
const deleteMovies = (req, res)=> {
    res.status(200).json({msg: "movie.. delete" });
}


module.exports = 
{
    getMovies,
    postMovies,
    putMovies,
    deleteMovies
} ;
