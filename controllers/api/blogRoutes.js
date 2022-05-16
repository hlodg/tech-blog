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