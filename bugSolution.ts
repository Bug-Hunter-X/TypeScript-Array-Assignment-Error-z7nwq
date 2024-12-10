function greeter(person: string): string {
  return "Hello, " + person;
}

function greetMultiple(people: string[]): string[] {
  return people.map(person => greeter(person));
}

let user = ["Jane User", "John Smith"];

console.log(greetMultiple(user)); // Correctly handles the array