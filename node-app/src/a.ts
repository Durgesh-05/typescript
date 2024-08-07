const x: number = 1;
// console.log(x);

function greet(firstName: string) {
  console.log(`Hello ${firstName}`);
}

// greet('Durgesh');

function sum(a: number, b: number): number {
  return a + b;
}

// console.log(sum(3, 4));

// function isLegal(age: number): boolean {
//   if (age < 18) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(isLegal(18));

function getFunction(fn: () => void) {
  setTimeout(() => {
    fn();
  }, 1000);
}

function printHelloWorld(): void {
  console.log('Hello World');
}

// getFunction(printHelloWorld);

// Interfaces -Very Imp
// It helps to remove duplicate code
// It helps to structure object in type-safe manner
interface User {
  firstName: string;
  lastName: string;
  age: number;
  // This will make it optional
  email?: string;
}

function greetUser(user: User): void {
  console.log('Hello ' + user.firstName);
}

function isLegal(user: User): boolean {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Type cannot extend class but interface can
interface Person {
  name: string;
  age: number;
  greet(parameter: string): void;
}

// class Employee implements Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   greet(parameter: string): void {
//     console.log('hello' + parameter);
//   }
// }

// Type - type and interface are almost the same, In type we have to use "="
// type User = {
//   firstName: string,
//   lastName: string,
//   age: number,
// }

// Union
type StringOrNumber = string | number;
function printId(id: StringOrNumber): void {
  console.log(typeof id);
}

// Intersection - if we want to create a type which is mixed of other types
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

// we have mixed 2 types to get new types
type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
  name: 'Durgesh',
  startDate: new Date(),
  department: 'Software Engineer',
};

function getMax(arr: number[]): number {
  let max: number = -1;
  arr.forEach((element) => (element > max ? (max = element) : max));
  return max;
}

let arr: number[] = [1, 2, 4, 6, 3, 0];

// console.log(getMax(arr));

const user1: User = {
  firstName: 'Durgesh',
  lastName: 'Dubey',
  age: 19,
};
const user2: User = {
  firstName: 'Rahul',
  lastName: 'Dhanak',
  age: 20,
};
const user3: User = {
  firstName: 'Arya',
  lastName: 'Gami',
  age: 17,
};

const userList: User[] = [user1, user2, user3];

const filteredUserList = userList.filter((user) => user.age >= 18);
console.log(filteredUserList);
