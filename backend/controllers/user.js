const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generate } = require('../helpers/token');

const register = async (login, email, password) => {
	if (!password) {
		throw new Error('Password is empty');
	}

	const passwordHash = await bcrypt.hash(password, 10);
	const user = await User.create({
		login: login,
		email: email,
		password: passwordHash,
	});

	const token = generate({ id: user.id });

	return { user, token };
};

const login = async (login, password) => {
	const user = await User.findOne({ login });

	if (!user) {
		throw new Error('User not found');
	}

	const isPasswordMatch = await bcrypt.compare(password, user.password);

	if (!isPasswordMatch) {
		throw new Error('Wrong password');
	}

	const token = generate({ id: user.id });

	return { user, token };
};

module.exports = {
	register,
	login,
};
