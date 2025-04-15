const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async(req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password }); // ⚠️ Vulnerable a inyección NoSQL
        if (user) {
            res.json({ message: 'Login exitoso', user });
        } else {
            res.status(401).json({ message: 'Credenciales inválidas' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error del servidor', error: err });
    }
});

module.exports = router;
