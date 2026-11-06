//*  some cavate of Type Guard

// const printAll = (x: string | string[] | null) => {
//   if (x && typeof x === "object") {
//     for (let str of x) {
//       console.log(str);
//     }
//   } else if (typeof x === "string") {
//     console.log(x);
//   } else {
//     console.log("");
//   }
// };

// printAll(null);

//* Equality

const compare = (x: number | string, y: number | boolean) => {
  if (x === y) {
    console.log(x, y);
  }
};

const printAll = (x: string | string[] | null) => {
  if (x !== null) {
    if (typeof x === "object") {
      for (let str of x) {
        console.log(str);
      }
    }

    console.log(x);
    return;
  }
  console.log("");
};

printAll("themdshakibul");

//* "in" operator

type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    animal.fly();
    return;
  }
  animal.swim();
};

//* "interfaceof" chek

// const date = new Date();
// const err = new Error("Something went wrong");

// console.log(date instanceof Date);
// console.log(err instanceof Error);

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  }

  const date = new Date(x);
  console.log(date.toISOString());
};

// showDate(new Date("12-12-2026"));
showDate("12-16-1971");

//* Descriminated union

interface Circle {
  kind: "circle";
  round: number;
}

interface Squre {
  kind: "squre";
  sideLength: number;
}

const getArea = (shape: Circle | Squre) => {
  if (shape.kind === "circle") {
    console.log(shape.round);
  } else {
    console.log(shape.sideLength);
  }
};
