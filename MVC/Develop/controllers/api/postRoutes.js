const router = require('express').Router();
const { Post } = require('../../models');

// Create a new post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      userId: req.session.userId
    });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
