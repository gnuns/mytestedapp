/**
 * CalcController
 *
 * @description :: Server-side logic for managing calcs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

exports.sum = function sum(req, res) {
	let params = req.params.all();
	if (!params.a || !params.b) {
		return res.badRequest('we need a and b');
	}
	return res.json({
		a: params.a,
		b: params.b,
		sum: CalcService.sum(params.a, params.b)
	});
};
