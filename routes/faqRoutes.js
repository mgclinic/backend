const express = require('express');

const { 
    createFaq,
    getFaqs,
    getFaqById,
    updateFaq,
    deleteFaq

} = require('../controllers/faqController');

const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');

router.get('/',getFaqs);
router.post('/',authMiddleware,createFaq);
router.get('/:id', authMiddleware,getFaqById);
router.put('/:id', authMiddleware,updateFaq);
router.delete('/:id', authMiddleware,deleteFaq);

module.exports = router;
