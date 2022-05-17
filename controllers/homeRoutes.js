const router = require('express').Router();
const { Project, Writer, Post } = require('../models');

router.get('/', (req, res)=>{
  try {
    res.render('homepage', req.session)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/login', (req,res)=>{
  res.render('login')
})

router.get('/postForm', (req,res)=>{
  res.render('postForm')
})

module.exports = router;
