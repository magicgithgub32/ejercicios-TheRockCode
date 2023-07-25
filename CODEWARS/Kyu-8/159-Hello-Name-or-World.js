// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"

function hello(name) {
  if (name) {
    const lowC = name.toLowerCase();
    const arr = lowC.split("");
    const newName = [];

    newName.push(arr[0].toUpperCase());

    for (let i = 1; i < arr.length; i++) {
      newName.push(arr[i]);
    }

    let nameWithFirstUpperCase = newName.join("");

    return `Hello, ${nameWithFirstUpperCase}!`;
  } else return "Hello, World!";
}

console.log(hello());
