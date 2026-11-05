//* "typeof"

let x = 1234;
console.log(typeof x);

//* Type Guard

const print = (value: string | number) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
};

//* Truthness

type TUser = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const loggedInUser: TUser = {
  name: "the md shakibul",
  address: {
    street: "dhaka",
  },
};

const showAddress = (user: TUser) => {
  if (user && user.address) {
    console.log(user.address.street);

    return;
  }

  throw new Error("user not found");
};

//* Equality

//* "in" operator

//* "instanceof" check

//* Discriminated union
