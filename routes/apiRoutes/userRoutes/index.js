const router = require('express').Router();
const {
    createUser,
    getUserById,
    login,
    signUpHandler,
    logout
} = require('../../../controllers/userController');

router.route('/')
    .post(createUser);

router.route('/:userId')
    .get(getUserById);

router.post('/signup', signUpHandler);

router.post('/login', login);

router.post('/logout', logout);

module.exports = router;
