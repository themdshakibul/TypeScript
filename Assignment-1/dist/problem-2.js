function processInput(input) {
    if (typeof input === "string") {
        return input.trim().toLocaleLowerCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else {
        return input ? "Active" : "Inactive";
    }
}
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
export {};
