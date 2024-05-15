//ระบบ เปลี่ยนpage
const express = require('express')
const router = express.Router()

router.get('/papa',(req,res)=>{
    res.render('papa')
})

router.get('/',(req,res)=>{
    res.render('index.ejs')
})

router.get('/',(req,res)=>{
    res.render('index.ejs')
})  

router.get('/',(req,res)=>{
    res.render('index.ejs')
})

router.get('/',(req,res)=>{
    res.render('index.ejs')
})


module.exports = router
