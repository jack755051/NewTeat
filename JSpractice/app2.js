// 1. Write a function called "stars" which prints out layers of stars in the following pattern
let Newstars = (n) => {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    console.log(result);
  }
};

// console.log("----------------");
// Newstars(1);
// console.log("----------------");
// Newstars(5);
// console.log("----------------");

// 2. 1. Write a function called "makeStars" which prints out stars in the following pattern:
// (If you are using code runner, node.js or web developer's tool, the result of makeStars function will look exactly the same as exercise 1 stars. This is 100% okay. The reason why I am putting this exercise right here is because, many programming languages that deal with files would require you to write codes like this.)

let makeStars = (n) => {
  let result = "*";
  for (let i = 2; i <= n; i++) {
    let m = "\n";
    for (let j = 0; j < i; j++) {
      m += "*";
    }
    result += m;
  }
  console.log(result);
};

makeStars(6);

// 3. Write a function called "stars2" which prints out layers of stars in the following pattern:
let stars2 = (n) => {
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    console.log(result);
  }

  for (let i = n - 1; i > 0; i--) {
    let result = "";
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    console.log(result);
  }
};

stars2(3);

// 4. Write a function called "table" which takes an input n, and prints out n x 1 to n x 9
let table = (n) => {
  for (let i = 1; i <= n; i++) {
    let result = "";
    console.log(n + " * " + i + " = " + n * i);
  }
};

// table(6);

// 5. Write a function called "table9to9" that prints out the multiplication table:
let table9to9 = () => {
  for (let i = 1; i <= 9; i++) {
    let result = "";
    for (let j = 1; j <= 9; j++) {
      console.log(i + " * " + j + " = " + i * j);
    }
  }
};

// table9to9();

// 6.  Write a function called "fib" that takes an integer $n$ as input, and returns the $n$th element of the Fibonacci Sequence.
// If you never hear about Fibonacci Sequence, read about it from:

// 7. Write a function called "reverse" that takes a string as input, and returns the reverse string.

let reverse = (n) => {
  let m = n.split("").reverse().join("");
  console.log(m);
};

// reverse("I am a good guy.");

// 8. Write a function called "swap" that takes a string as input, and returns a new string with lowercase changed to uppercase, uppercase changed to lowercase.

let swap = (n) => {
  let m = n.split("");
  for (let i = 0; i < m.length; i++) {
    if (m[i] == m[i].toUpperCase()) {
      m[i].toLowerCase();
    } else {
      m[i].toUpperCase();
    }
  }
  console.log(m.join(""));
};

// swap("Love you.");
// swap("Aloha");

// 9. Write a function called "findMin" which takes an array as input, and returns the minimum element in the input array.
let findMin = (n) => {
  if (n.length == 0) {
    console.log("undefined");
  } else {
    let m = Math.min(...n);
    console.log(m);
  }
};

// findMin([1, 2, 5, 6, 99, 4, 5]);
// findMin([]);
// findMin([1, 6, 0, 33, 44, 88, -10]);

// 10. Write a function called "findNthMin", which takes an array of integers and another integer n, and returns the nth smallest number in the given array.

// let findNthMin = (n, m) => {
//   let newArr = n
//     .sort((a, b) => {
//       return a - b;
//     })
//     .reverse()
//     .slice(0, m);

//   let findMin = Math.min(...newArr);

//   console.log(newArr);
//   console.log(findMin);
// };

let findNthMin = (n, m) => {
  let newArr = n
    .sort((a, b) => {
      return a - b;
    })
    .reverse()
    .slice(0, n.length - m + 1);

  let findMin = Math.min(...newArr);
  console.log(newArr);
  console.log(findMin);
};

// findNthMin([2, 6, 33, 1000, 1, -50, 63, -100], 3);
findNthMin([1, 2, 3, 4, 5], 1);
findNthMin([1, 3, 5, 7, 9], 3);
findNthMin([1, -6, -3, 2, 4], 3);
// findNthMin([1, 3, 5, 7, 9, 11, 13], 3);
