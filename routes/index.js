const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const {
    renderHomePage,
    loginView,
    signUpView
} = require('../controllers/userController');

router.get('/', renderHomePage);
router.get('/login', loginView);
router.get('/signup', signUpView);
router.use('/api', apiRoutes);

module.exports = router;
