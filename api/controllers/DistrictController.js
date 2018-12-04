/**
 * DistrictController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: async (req, res) => {
      const data = await Districts.find();
      return res.send(data);
    },
    getByRegency: async (req, res) => {
      const data = await Districts.find({
          regency_id: req.param('regency')
      });
      return res.send(data);
    }
};

