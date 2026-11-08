//* Encapsulation: protect a state and change it through methods.

//* Access Modifier
//? public
//? private
//? protected

//? readonly

class Employee {
  constructor(
    public name: string,
    private _baseSalary: number, //? "_" private property & "#" private identifer
  ) {}

  //? "get" methods
  get baseSalary(): number {
    return this._baseSalary;
  }

  get salaryWithBonus(): number {
    return this._baseSalary + 5000;
  }

  //? "set" methods
  set baseSalary(newSalary: number) {
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
