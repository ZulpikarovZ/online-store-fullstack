const express = require('express');
const {
	addProduct,
	getProducts,
	updateProduct,
	deleteProduct,
	getProduct,
	addComment,
	deleteComment,
} = require('../controllers/product');
const mapProduct = require('../helpers/mapProduct');
const mapComment = require('../helpers/mapComment');
const authenticated = require('../middlewares/authenticated');

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

router.get('/products/:id', async (req, res) => {
	try {
		const product = await getProduct(req.params.id);

		res.send({
			error: null,
			data: mapProduct(product),
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

router.post('/products/:id/comments', authenticated, async (req, res) => {
	try {
		const newComment = await addComment(req.params.id, {
			content: req.body.content,
			author: req.user.id,
		});

		res.send({ error: null, data: mapComment(newComment) });
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

router.delete('/products/:productId/comments/:commentId', async (req, res) => {
	try {
		await deleteComment(req.params.productId, req.params.commentId);

		res.send({ error: null });
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

module.exports = router;
