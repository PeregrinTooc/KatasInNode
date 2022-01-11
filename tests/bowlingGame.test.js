const bowlingGame = require('../modules/bowlingGame')

describe('bowlingGame', () => {

  let cut;
  let rolls = [];

  beforeEach(() => {
    cut = new bowlingGame()
    rolls = []
  });

  function playGame() {
    rolls.forEach(roll => { cut.roll(roll); });
  }

  function expectScore(expected) {
    expect(cut.getScore()).toBe(expected);
  }

  function fillUp(numberOfRolls) {
    rolls = rolls.concat(Array(numberOfRolls).fill(0))
  }


  test('all gutter scores 0', () => {
    fillUp(20)
    playGame(20);
    expectScore(0);
  })
  test('roll 1 score 1', () => {
    rolls[0] = 1
    fillUp(19)
    playGame();
    expectScore(1);
  })
  test('roll 1,1 score 2', () => {
    rolls[0] = 1
    rolls[1] = 1
    fillUp(18)
    playGame();
    expectScore(2);
  })

  test('spare then 5, then gutters', () => {
    rolls[0] = 5;
    rolls[1] = 5;
    rolls[2] = 5;
    fillUp(17)
    playGame();
    expectScore(20)
  });
  test('strike then 3,5, then gutters', () => {
    rolls[0] = 10;
    rolls[1] = 3;
    rolls[2] = 5;
    fillUp(17)
    playGame();
    expectScore(26)
  });

  test('strike in last frame', () => {
    fillUp(18)
    rolls.push(10)
    rolls.push(1)
    rolls.push(1)
    playGame()
    expectScore(12)
  })

  test('perfect game', () => {
    rolls = Array(12).fill(10)
    playGame()
    expectScore(300)
  })
});