/**
 * TestControllerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    index: function(req, res) {
        let num = 3;
        num = num + 3;
        return res.send({
            msg: num
        });
    }
};

