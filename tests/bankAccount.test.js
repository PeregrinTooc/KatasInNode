"use strict";
const bankAccount = require("../modules/bankAccount")
const balanceHeading = "Date        Amount          Balance\n";
let cut = {}

function assertStatementIs(expectedStatement) {
    expect(cut.printStatement()).toBe(expectedStatement);
}

function assertBalanceIs(expectedBalance) {
    expect(cut.getBalance()).toBe(expectedBalance);
}

beforeEach(() => {
    cut = new bankAccount();
})

test("should accept money", () => {
    cut.deposit(1)
})

test("balance should be 0 on init", () => {
    assertBalanceIs(0);
})

test("balance should follow deposits", () => {
    cut.deposit(1)
    assertBalanceIs(1);
})

test("should print statement", () => {
    assertStatementIs(balanceHeading);
})

test("statement contains deposit and balance", () => {
    cut.deposit(1)
    let expectedStatement = balanceHeading + "+1 1\n"
    assertStatementIs(expectedStatement);
    cut.deposit(1)
    expectedStatement += "+1 2\n"
    assertStatementIs(expectedStatement);
})

test("should handle withdrawels", () => {
    cut.withdraw(1)
    assertBalanceIs(-1);
    let expectedStatement = balanceHeading + "-1 -1\n"
    assertStatementIs(expectedStatement);
})




