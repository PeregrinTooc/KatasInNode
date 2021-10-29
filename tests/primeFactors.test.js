const primeFactors = require('../modules/primeFactors.js')
const cut = primeFactors.calculate

test("primeFactors", async function () {
    expectPrimeFactorsToBe(1, []);
    expectPrimeFactorsToBe(2, [2]);
    expectPrimeFactorsToBe(3, [3]);
    expectPrimeFactorsToBe(4, [2, 2]);
    expectPrimeFactorsToBe(5, [5]);
    expectPrimeFactorsToBe(6, [3, 2]);
    expectPrimeFactorsToBe(2 * 3 * 5 * 5 * 7 * 13, [13, 7, 5, 5, 3, 2]);
});

function expectPrimeFactorsToBe(number, factors) {
    expect(cut(number)).toEqual(factors);
}
