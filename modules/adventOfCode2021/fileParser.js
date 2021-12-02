const fs = require('fs')
const path = require("path")

function parseToIntegerArray(fileName) {
    const file = fs.readFileSync(fileName, 'utf8');
    const integers = file.split('\n')
    return integers.map(i => parseInt(i))
}
module.exports = { parseToIntegerArray }