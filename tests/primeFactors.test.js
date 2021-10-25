const primeFactors = require('../modules/primeFactors.js')
const cut = primeFactors.calculate

beforeAll(async function () {
    // Add setup code here!

});

afterAll(async function () {
    // Add teardown code here!

});

test("primeFactors", async function () {
    expect(cut(1)).toEqual([]);
    expect(cut(2)).toEqual([2]);
    expect(cut(3)).toEqual([3]);
    expect(cut(4)).toEqual([2, 2]);
});