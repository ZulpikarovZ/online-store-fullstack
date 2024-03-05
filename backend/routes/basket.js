const express = require('express');
const authenticated = require('../middlewares/authenticated');
const mapUser = require('../helpers/mapUser');
const {
	addProductInBasket,
	getUserBasket,
	deleteProductFromBasket,
} = require('../controllers/basket');
const router = express.Router({ mergeParams: true });

router.post('/basket/:userId', authenticated, async (req, res) => {
	try {
		const updatedUser = await addProductInBasket(
			req.params.userId,
			req.body.productId,
		);

		res.send({
			error: null,
			data: mapUser(updatedUser),
		});
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

router.get('/basket/:userId', authenticated, async (req, res) => {
	try {
		const user = await getUserBasket(req.params.userId);

		res.send({
			error: null,
			data: mapUser(user[0]),
		});
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

router.delete('/basket/:userId', authenticated, async (req, res) => {
	try {
		await deleteProductFromBasket(req.params.userId, req.body.productId);

		res.send({ error: null });
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

module.exports = router;
