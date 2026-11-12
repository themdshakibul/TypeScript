//* Inheritance: a Manager is an Employee width an additional responsibility.
class Employee {
    name;
    _baseSalary;
    constructor(name, 
    // private _baseSalary: number,
    _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    // get baseSalary(): number {
    //   return this._baseSalary;
    // }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary can not be negative value");
        }
        this._baseSalary = newSalary;
    }
    describe() {
        return `${this.name} earns ${this.baseSalary}`;
    }
}
//? Chilt to perent Component "Inheritance"
class Manager extends Employee {
    teamMemberCount;
    // teamMemberCount: number;
    // constructor(name: string, _baseSalary: number, teamMemberCount: number) {
    //   super(name, _baseSalary);
    //   this.teamMemberCount = teamMemberCount;
    // }
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
        this.teamMemberCount = teamMemberCount;
    }
    describeWork() {
        return `${this.name} Manages ${this.teamMemberCount} People`;
    }
    describeManager() {
        return `${this.name} earns ${this._baseSalary}`;
    }
}
const employee = new Employee("shakibul", 22000);
console.log(employee.describe());
const manager = new Manager("Rakibul", 1000, 1);
console.log(manager.describeWork());
export {};
