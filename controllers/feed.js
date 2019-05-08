const { validationResult} = require('express-validator/check');
const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
  Post.find().then(posts => {
    res.status(200).json({
      message: "Fetching ASAP!",
      posts: posts
    });

  }).catch(err => {
    if (!error.statusCode) {

      err.statusCode = 500;
    }
    next(err);


  });
};
exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error('Validation failed!!');
    error.statusCode = 422;
    throw error;

  }
  const title = req.body.title;
  const content = req.body.content;
  const post = new Post({
    title: title,
    content: content,
    imageUrl: 'images/IMAGE.jpg',
    creator: {
      name: 'maverick' 
    }
  });
  post.save().then((result) => {
    console.log(result);
    res.status(201).json({
      message: "Post created successfully",
      post: result
    });
  }).catch(err => {
    if (!error.statusCode) {

      err.statusCode = 500;
    }
    next(err);


  })};
  exports.getPost=(req, res, next)=>{
    const postId = req.params.postId;

    Post.findById(postId)
      .then(post => {
        if (!post) {
          const error = new Error('Could not found');
          error.statusCode = 404;
          throw error;
        }
        res.status(200).json({
          message: 'Fetched',
          post: post
        });

      })
      .catch(err => {
        if (!error.statusCode) {

          err.statusCode = 500;
        }
        next(err);


      });
  };
