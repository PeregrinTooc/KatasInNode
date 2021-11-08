const prompt = require('prompt-sync')({ sigint: true });
const BankAccount = require('./modules/bankAccount')
const bankAccount = new BankAccount()

function getAmount() {
    return Number(prompt(`how much? `));
}
while (true) {
    let op = prompt(`(D)eposit, (W)ithdraw, (S)tatement or (E)xit? `);
    switch (op.toUpperCase()) {
        case 'D':
            bankAccount.deposit(getAmount());
            break;
        case 'W':
            bankAccount.withdraw(getAmount());
            break;
        case 'S':
            console.log(bankAccount.printStatement())
            break;
        case 'E':
            console.log(`Bye`);
            return

        default:
            break;
    }
}
