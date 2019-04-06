const express = require('express');
const routes = express.Router();

const UserController = require('./controller/UserController');

routes.get('/', (req, res) => {
  res.render('pages/index');
});
routes.get('/create', UserController.create);
routes.post('/store', UserController.store);
routes.get('/list', UserController.show);
routes.get('/edit/:id', UserController.edit);
routes.post('/update/:id', UserController.update);
routes.get('/destroy/:id', UserController.destroy);

module.exports = routes;
