/**
 * AccountController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  listByID: async function(req, res){
    const data = await Accounts.findOne({
        id: req.param('id')
    });
    if (!data) {
        return res.status(404).send({
            msg: 'Data tidak ditemukan'
        });
    }
    return res.send(data);
  }
};

