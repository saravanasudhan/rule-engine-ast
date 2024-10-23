const mongoose = require('mongoose');

const RuleSchema = new mongoose.Schema({
  ruleString: {
    type: String,
    required: true,
  },
  ast: {
    type: Object,  
    required: true,
  }
});

const Rule = mongoose.model('Rule', RuleSchema);

module.exports = Rule;
