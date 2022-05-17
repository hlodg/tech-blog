const router = require('express').Router();
const { Project, Writer, Post } = require('../models');

router.get('/', async (req, res)=>{
  try {
    const postData = await Post.findAll({
      // order:[['title','description']],
      attributes:[
        'title',
        'description',
        'writer_id'
      ],

  })

    const posts = postData.map((post)=>post.get({plain:true}))

    res.render('homepage', {posts})
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
