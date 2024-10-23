const express = require('express');
const { createRuleHandler, evaluateRuleHandler } = require('../controllers/ruleController');

const router = express.Router();


router.post('/create', createRuleHandler);
router.post('/evaluate/:ruleId', evaluateRuleHandler);

module.exports = router;  
