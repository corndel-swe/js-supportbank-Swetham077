class AccountName{
    constructor(name) {
        this.name = name
    }

add Transaction(transaction) {
    this.transaction.push(transaction)
    if (transaction.from === this.name){
        this.balance-= transacation.amount;
    } else if (transaction.to === this.name) {
        this.balance += transaction.amount;
    }

}
}