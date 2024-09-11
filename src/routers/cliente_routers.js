const express = require('express');
const router = express.Router();
const cliente_controllers = require('../controllers/cliente_controllers.js');

router.post('/', cliente_controllers.createCliente);
router.get('/', cliente_controllers.getClientes);
router.get('/:id', cliente_controllers.getClienteById);
router.put('/:id', cliente_controllers.updateCliente);
router.delete('/:id', cliente_controllers.deleteCliente);

module.exports = router;