/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  loginPage: function(req, res) {
      if (req.session.username !== undefined){
        res.redirect('home');
      }
      return res.view('pages/login', {
        message: req.query.message
      });
  },
  loginAction: function(req, res) {
      const md5 = require('md5');
      const accounts = [
        {
          username: 'admin',
          password: md5('admin')
        },
        {
          username: 'hero',
          password: md5('winner')
        }
      ];

      const response = {
        message: "username tidak ditemukan!"
      };

      accounts.forEach(acc => {
        if (req.body.username === acc.username) {
          if (md5(req.body.password) === acc.password) {
            response.message = "login berhasil";
            
            req.session.username = req.body.username;
            
            res.redirect('home');
          } else {
            response.message = "password salah!";
          }
        }
      });
      res.redirect('login?message='+response.message);
  },
  homePage: function(req, res) {
    if (req.session.username === undefined) {
      res.redirect('login');
    }
    return res.view('pages/home', {
      username: req.session.username
    })
  },
  logout: function(req, res) {
    delete req.session.username;
    return res.redirect('login');
  }
};

