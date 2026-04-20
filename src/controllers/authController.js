const { generateToken } = require('../utils/jwtUtils');

// Mock user database
const users = [{ id: 1, username: 'user1', password: 'password1' }];

// Authenticate user and return token
const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = generateToken(user);
    return res.json({ token });
};

module.exports = { login };