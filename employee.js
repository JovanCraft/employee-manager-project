// const Manager = require('./manager')

class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;
        if (manager) {
            manager.addEmployee(this)
            //console.log(this)
        }

    }

    calculateBonus(multiplier) {
        let bonus = (this.salary) * multiplier
        return bonus;
    }

}



module.exports = Employee



