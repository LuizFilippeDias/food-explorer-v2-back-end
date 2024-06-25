const {Router, response} = require('express');
const UserController = require('../controllers/UsersController')
const userRoutes = Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')


const usersController = new UserController();

userRoutes.post('/', usersController.create);
userRoutes.put('/',ensureAuthenticated, usersController.update);

module.exports = userRoutes;
