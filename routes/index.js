const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const {
    getAllUsers,
    loginView,
    signUpView
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/login', loginView);
router.get('/signup', signUpView);
router.use('/api', apiRoutes);

module.exports = router;
