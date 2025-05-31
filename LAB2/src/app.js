const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());
//Ruta base para rutear todo a los users
app.use('/api/users', userRoutes);
//Manejador de rutas no encontradas
app.use((req,res) => {
    res.status(404).json({message: 'Ruta no encontrada'});
});

module.exports = app;   