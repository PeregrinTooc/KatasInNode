function calculate(number) {
  let result = []
  let factor = 2;
  while (number > 1) {
    if (number % factor === 0) {
      addFactorToResult();
      number /= factor
    }
    else {
      factor++
    }
  }
  return result

  function addFactorToResult() {
    result.splice(0, 0, factor);
  }
}

module.exports = { calculate }