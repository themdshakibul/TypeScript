//* Encapsulation: protect a state and change it through methods.

//* Access Modifier
//? public
//? private
//? protected

//? readonly

class Employee {
  //   public name: string;
  //   private baseSalary: number;
  //   _baseSalary: number; //? "_" private property & "#" private identifer

  constructor(
    public name: string,
    private baseSalary: number,
  ) {
    
  }
}

const employee = new Employee("shakibul", 22000);
const employee2 = new Employee("Rakibul", 22000);
