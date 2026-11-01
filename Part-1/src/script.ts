// let myString: string = "10";
// let myNumber: number = 12345;
// let myBoolean: boolean = true;
// let mySymbol: symbol = Symbol();
// let myBigint: bigint = 100000n;

//* Type safe functino
const addTwo = (a: number, b: number) => {
  return a + b;
};

console.log(addTwo(20, 10));

//* Array and Tuple readonly modifier

// const arr: Array<String> = ["themd", "shakibul"]; //* jeneric Array
const arr: string[] = ["themd", "shakibul"];
const numArr: number[] = [10, 20, 30];

const dhakaLatLong: readonly [number, number] = [10.2, 20.1];

//* Optional, Defoult and  perameter (...args)

const conCatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }

  return firstName + "" + lastName;
};

console.log(conCatName("Shakibul"));

//* void
const grettings = (fullName: string, gretting = "Hello") => {
  console.log(gretting + "" + fullName);
};

grettings("Shakibul");

//* rest perameter (...args)

const sum = (...numbers: number[]) => {
  return numbers.reduce((total, sum) => total + sum, 0);
};

sum(1, 2, 3, 4, 5, 6);

const logUserActio = (
  ...args: [name: string, age: number, isActive: boolean]
) => {
  const [name, age] = args;
  console.log(name + "is" + age);
};

logUserActio("Shakibul", 19, true);

//* object type, type alias and interface

type userName = string;

type TUser = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
};

interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
}

const user: IUser = {
  name: "themdshakibul",
  age: 19,
  isActive: true,
  action: () => console.log("themdshakibul"),
  badges: ["themd", "shakibul"],
};
