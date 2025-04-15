require('dotenv').config(); // 👈 Carga el archivo .env
const mongoose = require('mongoose');
const User = require('../models/User');

// Verifica que la URI se está leyendo
console.log("URI de MongoDB:", process.env.MONGODB_URI); // 👈 prueba de debug

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Conectado a MongoDB ✅');
    return new User({ username: 'admin2', password: '4321' }).save();
})
.then(() => {
    console.log('Usuario creado correctamente 🚀');
    process.exit();
})
.catch(err => {
    console.error('❌ Error al crear usuario:', err);
    process.exit(1);
});
