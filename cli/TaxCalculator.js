class SalaryCalculator {
    calculateTax(salary) {
        let tax = 0;

        if (salary > 125140) {
            tax += (salary - 125140) * 0.45;
            salary = 125140;
        }
        if (salary > 50270) {
            tax += (salary - 50270) * 0.40;
            salary = 50270;
        }
        if (salary > 12570) {
            tax += (salary - 12570) * 0.20;
            salary = 12570;
        }

        return tax;
    }

    calculateNetSalary(salary) {
        const tax = this.calculateTax(salary);
        return salary - tax;
    }
}

export default SalaryCalculator;