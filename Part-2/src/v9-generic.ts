const wrapInArray = <T>(value: T) => {
  //? "T" kono akta type
  return [value];
};

const stringArr = wrapInArray<string>("ABC");
const numberArr = wrapInArray<number>(123);
const booleanArr = wrapInArray<boolean>(true);

stringArr.map((item) => item.toUpperCase());

interface User {
  name: string;
  role: string;
}

interface Blog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse<T> {
  data: T;
  succese: boolean;
  statusCode: number;
}

type UserResponse = ApiResponse<User>;
type BlogResponse = ApiResponse<Blog>;

// const UserRes: UserResponse = {
const UserRes: ApiResponse<User> = {
  statusCode: 123,
  succese: true,
  data: {
    name: "themd",
    role: "admin",
  },
};

console.log(UserRes);
