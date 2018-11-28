/**
 * AlamatController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    listByAccount: async function(req, res){
        // SELECT * FROM alamat JOIN accounts ON alamat.id_account = accounts.id
        const alamat = await Alamat.find({
            id_account: req.param('id')
        })
        .populate('id_account')
        .populate('id_prov');
        let result = {};
        result = alamat;
        return res.send(result);
    }
};

