//* Type alias vs interface

//? Interface is generally connected to object
//? Type alias is more connected to literals, unions, tuples, primitives

//TODO: type alias

type Id = number;

//! interface id = number

type Role = "admin" | "member";

//!  interface "admin" | "member"

interface User {
  name: string;
  id: Id;
  Role: "admin" | "member";
}

const user: User = {
  name: "themdshakibul",
  id: 123,
  Role: "admin",
};

//TODO: interface

interface Animal {
  species: string;
}

interface Cat extends Animal {
  breed: string;
}

const cat: Cat = {
  species: "Felix Catus",
  breed: "Persian",
};

type Vehicle = {
  brand: string;
};

type Car = Vehicle & {
  //? "&" symbole is used to perform intersection
  model: string;
};

const car: Car = {
  brand: "Tesla",
  model: "Toyata",
};

interface IEmployee {
  name: string;
}

interface IEmployee {
  id: number;
}

//! this is not valid

// type TEmployee = {
//   name: string;
// };

// type TEmployee = {};

const employee: IEmployee = {
  name: "shakibul",
  id: 123,
};
