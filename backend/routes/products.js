const express = require('express');
const {
	addProduct,
	getProducts,
	updateProduct,
	deleteProduct,
} = require('../controllers/product');
const mapProduct = require('../helpers/mapProduct');

const router = express.Router({ mergeParams: true });

router.post('/products', async (req, res) => {
	try {
		const newProduct = await addProduct(req.body);

		res.send({
			error: null,
			data: mapProduct(newProduct),
		});
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

router.get('/products', async (req, res) => {
	try {
		const products = await getProducts();

		res.send({
			error: null,
			data: products.map(mapProduct),
		});
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

router.patch('/products/:id', async (req, res) => {
	try {
		const updatedProduct = await updateProduct(req.params.id, req.body);

		res.send({
			error: null,
			data: mapProduct(updatedProduct),
		});
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

router.delete('/products/:id', async (req, res) => {
	try {
		await deleteProduct(req.params.id);

		res.send({ error: null });
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

module.exports = router;
