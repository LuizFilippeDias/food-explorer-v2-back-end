const {Router} = require('express')
const usersRouter = require ('./users.routes')
const dishesRoutes = require ('./dishes.routes')
const sessionsRoutes = require ('./sessions.routes')
const ordersRouter = require('./orders.routes')
const favoritesRouter = require('./favorites.routes')
const cartsRouter = require('./carts.routes')
const myordersRouter = require('./myorders.routes')



const routes = Router();
routes.use ('/users', usersRouter);
routes.use ('/sessions', sessionsRoutes);
routes.use ('/dishes', dishesRoutes);
routes.use ('/orders', ordersRouter);
routes.use ('/favorites', favoritesRouter);
routes.use ('/carts', cartsRouter);
routes.use ('/myorders', myordersRouter);




module.exports = routes;