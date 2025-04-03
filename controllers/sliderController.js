const Slider = require('../models/Slider');

// Create a new slider
exports.createSlider = async (req, res) => {
  try {
    const slider = new Slider(req.body);
    await slider.save();
    res.status(201).json(slider);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all sliders
exports.getAllSliders = async (req, res) => {
  try {
    const sliders = await Slider.find();
    res.status(200).json(sliders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single slider by ID
exports.getSliderById = async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider) {
      return res.status(404).json({ message: 'Slider not found' });
    }
    res.status(200).json(slider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a slider by ID
exports.updateSlider = async (req, res) => {
  try {
    const slider = await Slider.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!slider) {
      return res.status(404).json({ message: 'Slider not found' });
    }
    res.status(200).json(slider);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a slider by ID
exports.deleteSlider = async (req, res) => {
  try {
    const slider = await Slider.findByIdAndDelete(req.params.id);
    if (!slider) {
      return res.status(404).json({ message: 'Slider not found' });
    }
    res.status(200).json({ message: 'Slider deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
