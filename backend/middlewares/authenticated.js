const { verify } = require('../helpers/token');
const User = require('../models/User');

module.exports = async (req, res, next) => {
	try {
		const tokenData = verify(req.cookies.token);

		const user = await User.findOne({ _id: tokenData.id });

		if (!user) {
			res.send({ error: 'Authenticated user not found' });

			return;
		}

		req.user = user;

		next();
	} catch (e) {
		res.send({ error: e.message || 'Token error' });
	}
};
