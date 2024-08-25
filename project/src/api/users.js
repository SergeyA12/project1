const User = require('../models/users');
const auth = require('../core/auth');

class UserController {
    async register(req, res, next) {
        try {
            const { email, password } = req.body;

            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: 'User already exists' });
            }

            user = new User({ email, password });
            await user.save();

            const token = auth.generateToken(user._id);

            res.status(201).json({ message: 'User registered successfully', token });
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = auth.generateToken(user._id);

            res.status(200).json({ message: 'Logged in successfully', token });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
