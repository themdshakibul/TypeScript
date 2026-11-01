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
