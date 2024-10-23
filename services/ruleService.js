const Rule = require('../models/ruleModel');
const { createAST, evaluateAST } = require('../utils/astUtils');

const createRule = async (ruleString) => {
  const ast = createAST(ruleString);
  const newRule = new Rule({ ruleString, ast });
  await newRule.save();
  return newRule;
};

const evaluateRule = async (ruleId, data) => {
  const rule = await Rule.findById(ruleId);
  if (!rule) throw new Error('Rule not found');
  return evaluateAST(rule.ast, data);
};

module.exports = {
  createRule,
  evaluateRule,
};
