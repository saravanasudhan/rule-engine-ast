const acorn = require('acorn');

const createAST = (ruleString) => {
  try {
    return acorn.parseExpressionAt(ruleString, 0);
  } catch (error) {
    throw new Error('Invalid rule syntax');
  }
};

const evaluateAST = (node, data) => {

  if (node.type === 'BinaryExpression') {
    const left = evaluateAST(node.left, data);
    const right = evaluateAST(node.right, data);
    if (node.operator === '&&') return left && right;
    if (node.operator === '||') return left || right;
  } else if (node.type === 'Identifier') {
    return data[node.name]; 
  } else if (node.type === 'Literal') {
    return node.value;
  }
  return false;
};

module.exports = {
  createAST,
  evaluateAST,
};
