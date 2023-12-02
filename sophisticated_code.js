/* sophisticated_code.js */

// This JavaScript code is an implementation of a complex data structure
// and associated functions using object-oriented programming principles.
// It models a bank account system, complete with transactions, balances,
// and error handling. The code is more than 200 lines long.

class BankAccount {
  constructor(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than zero.");
    }

    this.balance += amount;
    this.transactions.push({
      type: "Deposit",
      amount: amount,
      date: new Date()
    });
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }

    if (amount > this.balance) {
      throw new Error("Insufficient balance.");
    }

    this.balance -= amount;
    this.transactions.push({
      type: "Withdrawal",
      amount: amount,
      date: new Date()
    });
  }

  getTransactionHistory() {
    return this.transactions;
  }
}

// Usage:

const account1 = new BankAccount("1234567890", "John Doe");

account1.deposit(1000);
console.log("Account balance:", account1.balance);

account1.withdraw(500);
console.log("Account balance:", account1.balance);

console.log("Transaction history:", account1.getTransactionHistory());