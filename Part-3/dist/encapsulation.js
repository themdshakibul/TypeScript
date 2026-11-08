//* Encapsulation: protect a state and change it through methods.
//* Access Modifier
//? public
//? private
//? protected
//? readonly
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    //? "get" methods
    get baseSalary() {
        return this._baseSalary;
    }
    get salaryWithBonus() {
        return this._baseSalary + 5000;
    }
    //? "set" methods
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary can not be negative value");
        }
        this._baseSalary = newSalary;
    }
}
const employee = new Employee("shakibul", 22000);
const employee2 = new Employee("Rakibul", 22000);
// employee.baseSalary = -6000;
console.log(employee.salaryWithBonus);
export {};
