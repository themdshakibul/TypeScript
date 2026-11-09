function pluckValues(items, key) {
    return items.map((items) => items[key]);
}
//? Simple test Cast
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" },
];
const names = pluckValues(users, "name");
const ids = pluckValues(users, "id");
console.log(names);
console.log(ids);
export {};
