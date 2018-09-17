const path = require('path');
const fs = require('fs');
const solc = require('solc');

// change Lottery
const contractPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(contractPath, 'utf8');

// change 'lottery'
module.exports = solc.compile(source, 1).contracts[':Lottery'];