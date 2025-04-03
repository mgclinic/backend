const Faq = require('../models/Faq');

// Create an Faq
exports.createFaq = async (req, res) => {
    try {
      const faq = new Faq(req.body);
      await faq.save();
      res.status(201).json({ message: 'Faq created successfully', faq });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
};

// Get All Faq
exports.getFaqs = async (req, res) => {
    try {
      const faqs = await Faq.find().sort({ createdAt: -1 });
      res.json(faqs);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
};

// Get Single faq by ID
exports.getFaqById = async (req, res) => {
    try {
      const faq = await Faq.findById(req.params.id);
      if (!faq) return res.status(404).json({ message: 'Faq not found' });
  
      res.json(faq);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
};

// Update Faq
exports.updateFaq = async (req, res) => {
    try {
      const faq = await Faq.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!faq) return res.status(404).json({ message: 'Faq not found' });
  
      res.json({ message: 'Faq updated successfully', faq });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
};
  
// Delete Faq
exports.deleteFaq = async (req, res) => {
try {
    const faq = await Faq.findByIdAndDelete(req.params.id);
    if (!faq) return res.status(404).json({ message: 'Faq not found' });

    res.json({ message: 'Faq deleted successfully' });
} catch (error) {
    res.status(500).json({ message: 'Server error', error });
}
};