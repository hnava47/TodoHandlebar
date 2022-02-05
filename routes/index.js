const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const {
    getAllUsers,
    loginView
} = require('../controllers/userController');

router.get('/', getAllUsers);
router.get('/login', loginView);
router.use('/api', apiRoutes);

module.exports = router;
