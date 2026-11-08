//* Inheritance: a Manager is an Employee width an additional responsibility.
class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary can not be negative value");
        }
        this._baseSalary = newSalary;
    }
    declare() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
//? Chilt to perent Component "Inheritance"
class Manager extends Employee {
    teamMemberCount;
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
}
const employee = new Employee("shakibul", 22000);
console.log(employee.declare());
const manager = new Manager("Rakibul", 1000, 1);
console.log(manager);
export {};
