const User = require('../model/User');

class UserController {
  async create(req, res) {
    return res.render('pages/create');
  }

  async store(req, res) {
    await User.create(req.body);

    return res.redirect('/list');
  }

  async show(req, res) {
    const users = await User.find();

    return res.render('pages/list', { usuarios: users });
  }

  async edit(req, res) {
    const usuario = await User.findById(req.params.id, req.body);

    return res.render('pages/edit', { usuario });
  }

  async update(req, res) {
    await User.findOneAndUpdate({ _id: req.params.id }, req.body);

    return res.redirect('/list');
  }

  async destroy(req, res) {
    await User.findOneAndRemove({ _id: req.params.id });

    return res.redirect('/list');
  }
}

module.exports = new UserController();
