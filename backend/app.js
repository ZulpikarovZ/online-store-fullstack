require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const port = process.env.PORT;
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use('/', routes);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => {
	app.listen(port, () => console.log('Server has been started on port', port));
});
