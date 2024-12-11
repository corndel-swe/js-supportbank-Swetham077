class Bill {
    constructor(total) {
        this.total = total;
    }
    split(people) {
        if (people <=0) {
            throw new Error("Number of people must be greater than 0"); 
        }
        return this.total / people;
    }
}
export default Bill;
