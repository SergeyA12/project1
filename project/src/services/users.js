const User = require('../models/users');

class UserService {
    async register(email) {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists');
        }
        
        const newUser = new User({ email });
        console.log(newUser)
        await newUser.save();
        
        return newUser;
    }
}

module.exports = new UserService();
