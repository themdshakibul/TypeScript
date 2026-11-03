//* Literal Type

type Status = "themd";

const status: Status = "themd";
console.log(status);

//* Basic Union

type Identity = string | number;

const id: Identity = "themd";
console.log(id);

//* Literal Type

type Role = "user" | "admin";

const role: Role = "admin";
console.log(role);

//* Object Union

type Admin = { id: number; role: "admin"; priviLeges: string[] };
type Member = { id: number; role: "Member"; plans: string[] };

type User = Admin | Member;

const user: User = {
  id: 1234,
  role: "Member",
  plans: ["abc", "def"],
};
