const router = require('express').Router();
const { Project, Writer, Post } = require('../models');

// get all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [Writer]
    })

    const posts = postData.map((post) => post.get({ plain: true }))

    res.render('homepage', { posts })
  } catch (error) {
    res.status(400).json(error)
  }
});

// get single post /post/:id
// req.params.id--> include writer, comments
router.get('/', async (req, res) => {
  try {
    const onePost = await Post.findOne({
      where: id = req.params.id,
      include: [Writer, Comment]
    });

    res.render('post', { onePost })
  } catch (error) {
    res.status(400).json(error)
  }
});

// create new post (post)
router.post('/', async (req,res)=>{
  try {
    const firstPost= await Post.create(
      req.body
    )

    res.status(200).json(firstPost);

  } catch (error) {
    res.status(400).json(error)
  }
});

// update post 
router.post('/', async (req, res)=>{
  try {
    const updatePost= await Post.findOrCreate({
      where: id=req.body.id
    })
    res.status(200).json(updatePost)
  } catch (error) {
    res.status(400).json(error)
  }
})

// delete post


module.exports = router;
