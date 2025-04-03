const express = require('express');
const router = express.Router();
const {createSlider,getAllSliders,getSliderById,updateSlider,deleteSlider} = require('../controllers/sliderController');
const authMiddleware = require('../middleware/authMiddleware');


// Get all sliders
router.get('/',getAllSliders);

// Create a new slider
router.post('/', authMiddleware,createSlider);

// Get a single slider by ID
router.get('/:id', authMiddleware,getSliderById);

// Update a slider by ID
router.put('/:id', authMiddleware,updateSlider);

// Delete a slider by ID
router.delete('/:id', authMiddleware,deleteSlider);

module.exports = router;
