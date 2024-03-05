const express = require('express');
const {
	addCategory,
	getCategories,
	deleteCategories,
} = require('../controllers/category');
const mapCategory = require('../helpers/mapCategory');
const authenticated = require('../middlewares/authenticated');
const hasRole = require('../middlewares/hasRole');
const ROLE = require('../constants/roles');

const router = express.Router({ mergeParams: true });

router.post('/categories', authenticated, hasRole([ROLE.ADMIN]), async (req, res) => {
	try {
		const category = await addCategory(req.body.category);

		res.send({
			error: null,
			data: mapCategory(category),
		});
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

router.get('/categories', async (req, res) => {
	try {
		const categories = await getCategories();

		res.send({
			error: null,
			data: categories.map(mapCategory),
		});
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

router.delete('/categories', authenticated, hasRole([ROLE.ADMIN]), async (req, res) => {
	try {
		await deleteCategories(req.body.category);

		res.send({ error: null });
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

module.exports = router;
