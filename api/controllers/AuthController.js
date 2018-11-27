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
  loginAction: async function(req, res) {
      const md5 = require('md5');
      const response = {
        message: "username tidak ditemukan!"
      };

      let accounts = await Accounts.findOne({
        email: req.body.username
      });

      if (accounts) {
        accounts = await Accounts.findOne({
          email: req.body.username,
          password: md5(req.body.password)
        });

        if( accounts ){
            response.message = "login berhasil";
            req.session.username = req.body.username;
            res.redirect('home');
        } else {
          response.message = "password salah!";
        }
      }

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
  },
  database: async function(req, res){
    const md5 = require('md5');
    // INSERT INTO accounts (email, password) VALUES ('asdfadsf@mail.com', md5('asdfaf'));
    // await Accounts.create({
    //   email: 'asdfadsf@mail.com',
    //   password: md5('asdfaf')
    // });

    // UPDATE accounts SET email='budi@airbnb.co.id' WHERE id=10
    await Accounts.update({
      id: 10  // where field=value
    }, {
      email: 'budi@airbnb.co.id'  // set field=value
    })
    const rows = await Accounts.find();
    return res.send(rows);
  }
};

