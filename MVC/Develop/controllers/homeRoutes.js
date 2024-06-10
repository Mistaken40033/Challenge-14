const router = require('express').Router();
const { Post, User } = require('../models');

// Home route
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [User]
    });
    res.render('home', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
