const express = require('express');
const User = require('../models/User');
const Faq = require('../models/Faq');
const Appointment = require('../models/Appointment');
const Slider = require('../models/Slider');
const Testimonial = require('../models/Testimonial');
const Enquiry = require('../models/Enquiry');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get Logged-in User
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


// get all document cound
router.get('/count', authMiddleware, async (req, res) => {
  try {
   const userCount = await User.countDocuments() ?? 0; 
   const faqCount = await Faq.countDocuments() ?? 0; 
   const appointmentCount = await Appointment.countDocuments() ?? 0; 
   const sliderCount = await Slider.countDocuments() ?? 0; 
   const testimonialCount = await Testimonial.countDocuments() ?? 0; 
   const enquiryCount = await Enquiry.countDocuments() ?? 0; 

   const data  = [
    {
      name:"Faq",
      count :faqCount,
      url:"faqs"
    },
    {
      name:"Apppointment",
      count :appointmentCount,
      url:"appointments"
    },
    {
      name:"Sliders",
      count :sliderCount,
      url:"slider"
    },
    {
      name:"Testimonials",
      count :testimonialCount,
      url:"testimonials"
    },
    {
      name:"Enquiry",
      count :enquiryCount,
      url:"enquiries"
    },
   ]
    
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});




module.exports = router;
