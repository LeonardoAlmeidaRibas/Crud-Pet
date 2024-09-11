const express = require('express');
const router = express.Router();
const pet_controllers = require('../controllers/pet_controllers.js');

router.post('/', pet_controllers.createPet);
router.get('/', pet_controllers.getPet);
router.get('/:id', pet_controllers.getPetById);
router.put('/:id', pet_controllers.updatePet);
router.delete('/:id', pet_controllers.deletePet);

module.exports = router;