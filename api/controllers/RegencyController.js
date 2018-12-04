/**
 * RegencyController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: async (req, res) => {
      const data = await Regencies.find();
      return res.send(data);
    },
    getByProvince: async (req, res) => {
      const data = await Regencies.find({
          province_id: req.param('province')
      });
      return res.send(data);
    }  

};

