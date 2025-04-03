const Enquiry = require('../models/Enquiry');

// Create an Enquiry
exports.createEnquiry = async (req, res) => {
    try {
        const enquiry = new Enquiry(req.body);
        await enquiry.save();
        res.status(201).json({ message: 'Enquiry created successfully', enquiry });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get All Enquiries
exports.getEnquiries = async (req, res) => {
    try {
        const enquiries = await Enquiry.find().sort({ createdAt: -1 });
        res.json(enquiries);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Get Single Enquiry by ID
exports.getEnquiryById = async (req, res) => {
    try {
        const enquiry = await Enquiry.findById(req.params.id);
        if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });

        res.json(enquiry);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update Enquiry
exports.updateEnquiry = async (req, res) => {
    try {
        const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });

        res.json({ message: 'Enquiry updated successfully', enquiry });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete Enquiry
exports.deleteEnquiry = async (req, res) => {
    try {
        const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
        if (!enquiry) return res.status(404).json({ message: 'Enquiry not found' });

        res.json({ message: 'Enquiry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
