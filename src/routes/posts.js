import express from 'express';


const router = express.Router();

const Post = require('../models/Post')

router.get('/', asnyc (request, response) => {
    try{

    }catch(err){
        res.json({messagre: err});
    }
});

// router.get('/user', (request, response) => {
//     response.send('User')
// });

router.post('/',  async (request, response) => {
    const post = new Post ({
        name : request.body.name,
        password: request.body.password
    });

    try{
    const savedPost = await post.save();
    response.json(savedPost);
    }catch(err){
        response.json({message: err});
    }
    // .then(data => {
    //     response.json(data);
    // })
    // .catch(err => {
    //     response.json({message:err});
    // });
});

module.exports = router;