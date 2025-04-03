const express = require('express');
const router = express.Router();
const { 
  getAllTestimonials, 
  createTestimonial, 
  getTestimonialById, 
  updateTestimonial, 
  deleteTestimonial 
} = require('../controllers/testimonialController');
const authMiddleware = require('../middleware/authMiddleware');

// Get all testimonials
router.get('/', getAllTestimonials);

// Create a new testimonial
router.post('/', authMiddleware, createTestimonial);

// Get a single testimonial by ID
router.get('/:id', authMiddleware, getTestimonialById);

// Update a testimonial
router.put('/:id', authMiddleware, updateTestimonial);

// Delete a testimonial
router.delete('/:id', authMiddleware, deleteTestimonial);

module.exports = router;
