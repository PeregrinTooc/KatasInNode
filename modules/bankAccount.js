"use strict";
const balanceHeading = "Date        Amount          Balance\n";
class BankAccount {
    constructor() {
        this.movements = []
    }
    deposit(amount) {
        this.movements.push(amount)
    }
    withdraw(amount) {
        this.deposit(0 - amount)
    }
    getBalance() {
        let result = 0
        this.movements.forEach(movement => {
            result += movement
        });
        return result
    }
    printStatement() {
        class Statement {
            constructor(movements) {
                this.movements = movements
                this.subBalance = 0
                this.statement = balanceHeading
            }
            print() {
                this.movements.forEach(movement => {
                    this.subBalance += movement
                    this.statement += this.parseMovement(movement)
                });
                return this.statement
            }

            parseMovement(movement) {
                return `${this.parseSign(movement)}${movement} ${this.subBalance}\n`;
            }

            parseSign(movement) {
                return (movement > 0 ? "+" : "");
            }
        }
        let statement = new Statement(this.movements)
        return statement.print()


    }
};



module.exports = BankAccount;