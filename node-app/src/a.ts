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

class Employee implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(parameter: string): void {
    console.log('hello' + parameter);
  }
}

// Type - type and interface are almost the same
// type User = {
//   firstName: string,
//   lastName: string,
//   age: number,
// }
