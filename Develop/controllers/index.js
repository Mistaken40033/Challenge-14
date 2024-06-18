const router = require('express').Router();
const userRoutes = require('../controllers/api/userRoutes');

router.use('/user', userRoutes);

router.get('/', (req, res) => {
  res.render('homepage', {
    logged_in: req.session.logged_in
  });
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }
  res.render('signup');
});

router.get('/dashboard', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }
  res.render('dashboard', {
    logged_in: req.session.logged_in
  });
});

module.exports = router;
