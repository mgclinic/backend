const express = require('express');

const { 
  createAppointment, 
  getAppointments, 
  getAppointmentById, 
  updateAppointment, 
  deleteAppointment 
} = require('../controllers/appointmentController');

const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

router.post('/'       ,createAppointment);
router.get('/',       authMiddleware,getAppointments);
router.get('/:id',    authMiddleware,getAppointmentById);
router.put('/:id',    authMiddleware,updateAppointment);
router.delete('/:id', authMiddleware,deleteAppointment);

module.exports = router;
