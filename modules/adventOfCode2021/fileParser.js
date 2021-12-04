const fs = require('fs')
const path = require("path")

function parseToIntegerArray(fileName) {
    const file = fs.readFileSync(fileName, 'utf8');
    const integers = file.split('\n')
    return integers.map(i => parseInt(i))
}
function parseToStringArray(fileName) {
    const file = fs.readFileSync(fileName, 'utf8');
    return file.split('\n').map(s => s.trim())
}
module.exports = { parseToIntegerArray, parseToStringArray }