const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
  async create(req, res) {
    return res.render("pages/create");
  },
  async store(req, res) {
    await User.create(req.body);

    return res.redirect("/list");
  },
  async show(req, res) {
    const users = await User.find();

    return res.render("pages/list", { usuarios: users });
  },
  async edit(req, res) {
    const users = await User.findById(req.params.id, req.body);
    return res.render("pages/edit", { usuario: users });
  },
  async update(req, res) {
    await User.updateOne(req.params.id, req.body);
    return res.redirect("/list");
  },
  async destroy(req, res) {
    await User.findOneAndRemove(req.params.id);

    return res.redirect("/list");
  }
};
