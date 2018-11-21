/**
 * TokenController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  loginPage: function(req, res) {
    return res.view('pages/token/login', {});
  },
  homePage: function(req, res) {
    return res.view('pages/token/home', {})
  },

  loginAct: function(req, res) {
    const md5 = require('md5');
    const token = md5(req.body.username);
    return res.send({
      token
    })
  },

  logout: function(req, res) {
    const response = {
      message: 'logout success'
    };
    let status = 200;

    if (!req.headers.token) {
      response.message = 'token not available';
      status = 401;
    }
    return res.status(status).send(response);
  }
};

