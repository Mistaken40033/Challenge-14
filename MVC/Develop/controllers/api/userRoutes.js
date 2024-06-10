const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcryptjs');

// Signup route
router.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      password: hashedPassword
    });
    req.session.userId = newUser.id;
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }
    req.session.userId = user.id;
    res.json({ message: 'Logged in successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout route
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({ message: 'Logged out successfully' });
    }
  });
});

module.exports = router;
