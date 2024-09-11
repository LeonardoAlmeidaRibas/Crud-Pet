const express = require('express');
const connectDB = require('./config/db');
const PORT = 5000;

const cliente_routers = require('./routers/cliente_routers.js');
const pet_routers = require('./routers/pet_routers.js');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/clientes', cliente_routers);
app.use('api/pets', pet_routers);


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});