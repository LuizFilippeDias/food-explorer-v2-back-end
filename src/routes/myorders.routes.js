const {Router} = require('express');
const MyOrdersController = require('../controllers/MyOrdersController')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const myOrdersRoutes = Router();

const myOrdersController = new MyOrdersController();

myOrdersRoutes.use(ensureAuthenticated);

myOrdersRoutes.get('/', myOrdersController.index);
myOrdersRoutes.post('/', myOrdersController.create);
myOrdersRoutes.delete('/:dish_id', myOrdersController.delete);
myOrdersRoutes.put('/:dish_id', myOrdersController.update);
myOrdersRoutes.get('/quantity', myOrdersController.getCartQuantity);

module.exports = myOrdersRoutes;