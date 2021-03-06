// // post route comments
// const router = require('express').Router();
// const { Post } = require('../../models');

// router.post('/', async (req,res)=>{
//     try {
//         const newpost = await Post.create (
//             req.body
//             );

//         res.status(200)

//     } catch (error) {
//         console.log(error)
//         res.status(400).json(error)
//     }
// })
const { Project, Writer, Post } = require('../../models');
const router = require('express').Router();

// get all posts
router.get('/', async (req, res) => {
    console.log("hello")
    try {
      const postData = await Post.findAll({
        include:[Writer]
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
      const firstPost= await Post.create({
        title: req.body.postName,
        description: req.body.blogPost
        // writer_id: req.sesion.id
    })
  
      res.status(200).json(firstPost);
  
    } catch (error) {
      res.status(400).json(error)
    }
  });
  
  // update post 
  router.post('/:id', async (req, res)=>{
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
  router.delete('/:id', async (req,res)=>{
    try {
      const data = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!data) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(data);
    } catch (error) {
      res.status(400).json(error)
    }
  })

  module.exports = router;