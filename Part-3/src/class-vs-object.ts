class Employee {
  name: string;
  baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
}

const employee = new Employee("shakibul", 22000);
const employee2 = new Employee("Rakibul", 22000);

// console.log(employee);
console.log(employee instanceof Employee);
console.log(employee2 instanceof Employee);
