// I paired [by myself] on this challenge.




// Pseudocode
// secretNumber must be 7
// password should be 'just open the door'
// allowedIn = false
// members is an array with first element 'John' and fourth element 'Mary'


// __________________________________________
// Write your code below.

var secretNumber = 7;
var password = 'just open the door';
var allowedIn = false;
var members = ['John', true, true, 'Mary'];



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

//No need to refactor because I refactored as I wrote.



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// I accidentally started the solo challenge before this, so I came back to complete it. 
// My initial thought upon completing this challenge is that there isn't much practice here for the 
// solo challenge. That said, I enjoyed the challenge. I learned only recently that the boolean
// values 'true' and 'false' are objects! It was cool to use them in the members array.
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

