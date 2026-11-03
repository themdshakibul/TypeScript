//* Top type

let helloWorld: any = "Hello";
helloWorld = 1234;

helloWorld.length;

const something: unknown = "Hello World";

// something.length;

//* Core type

let something2: unknown;

const num: number = 123;
something2 = num;

type Status = "pending" | "success";
let sumStatus: string;

let status: Status = "success";

sumStatus = status;


//* Nullish type

interface User {
  name: string;
}

type loggedInUser = User | null;

const currentUser: loggedInUser = null;

//*  Union type

const greet = () => {
  console.log("helloWorld");
};

greet();

//* Sub type of union type

const anotherGreet = (): undefined => {
  console.log("Hello World");
  return undefined;
};

const greetings = anotherGreet();
console.log(greetings);

//* Bottom type

let getError = (msg: string): never => {
  throw new Error(msg);
};

const x: string = getError("ABC"); //? all type define
