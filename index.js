const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const faqRoutes = require('./routes/faqRoutes');
const enquiryRoutes = require('./routes/enquiryRoutes');
const sliderRoutes = require('./routes/sliderRoutes'); 
const testimonialRoutes = require('./routes/testimonialRoutes'); 

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/faqs', faqRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/sliders', sliderRoutes); 
app.use('/api/testimonials', testimonialRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
