class Account {
    constructor(name) {
      this.name = name;
      this.transactions = [];
      this.balance = 0;
    }
  
    addTransaction(transaction) {
      this.transactions.push(transaction);
      if (transaction.from === this.name) {
        this.balance -= transaction.amount;
      }
      if (transaction.to === this.name) {
        this.balance += transaction.amount;
      }
    }
  }
  
  export default Account;