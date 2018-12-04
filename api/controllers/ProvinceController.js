/**
 * ProvinceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: async (req, res) => {
      const data = await Provinces.find();
      return res.send(data);
    },
    getByID: async (req, res) => {
      const data = await Provinces.find({
          id: req.param('id')
      });
      return res.send(data);
    }

};

