const express = require('express')
const router = express.Router();



const getRadio = (req, res)=> {

    res.status(200).json( {kbs_fm:  "https://1fm.gscdn.kbs.co.kr/1fm_192_2.m3u8?Expires=1643807508&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly8xZm0uZ3NjZG4ua2JzLmNvLmtyLzFmbV8xOTJfMi5tM3U4IiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNjQzODA3NTA4fX19XX0_&Signature=XM4k25QtXfsJhKj2fbcKvQW~NDplL9XPyCXOGrPuAYSV40kenX9yFQM7ssduGJ0uax31ehTAO2sV2DUA0U4hdAEyZx3IAEx3p7Qph~fDhHEbP~XTPjh-qzDCC~CGmzSN5hj3Ud5-npQBkzueBN1zmpcDQ~2~SULTNet1h2aLCAkpK~L2Yjycg9XQNHvdS2mLyIrPjpGE6N9oAy5gMZtCDoC59bfrqPxvVRMk0HzuErTXonEqBOb1rUUu9z4pnAfbCFwB7dbKdy0CxToG22hYSVkn1qL~Ac0xUgKxW1aXrEOKppcqd8L~gO0iQ7FKhKwE9LJS5UMaoZeZOteJ14w8cg__&Key-Pair-Id=APKAICDSGT3Y7IXGJ3TA"});
}

module.exports = 
{
    getRadio
} ;
