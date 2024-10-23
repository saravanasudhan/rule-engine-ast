const { createRule, evaluateRule } = require('../services/ruleService');

const createRuleHandler = async (req, res) => {
  try {
    const rule = await createRule(req.body.ruleString);
    res.status(201).json(rule);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const evaluateRuleHandler = async (req, res) => {
  try {
    const result = await evaluateRule(req.params.ruleId, req.body.data);
    res.status(200).json({ result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createRuleHandler,
  evaluateRuleHandler,
};
