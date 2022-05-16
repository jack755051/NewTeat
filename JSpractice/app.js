// 1. Write a function called "printMany" that prints out integers 1, 2, 3, ..., 100.

let arrPrintMany = [];
let printMany = () => {
  for (let i = 1; i <= 100; i++) {
    arrPrintMany.push(i);
  }
};
printMany();
console.log(arrPrintMany);

//Write a function called "printEvery3" that prints out integers 1, 4, 7, 10, ..., 88.
let arrPrintEvery3 = [];
let printEvery3 = () => {
  for (let i = 1; i <= 88; i += 3) {
    arrPrintEvery3.push(i);
  }
};
printEvery3();
console.log(arrPrintEvery3);

// Write a function called "stars" that takes an integer as input, and returns the concatenation of n continuous "*".
let stars = (n) => {
  let starArr = [];
  for (let i = 0; i < n; i++) {
    starArr.push("*");
  }
  console.log(starArr);
};
stars(3);

let starsTwo = (n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += "*";
  }
  return result;
};

console.log(starsTwo(3));

//4.Write a function called "isUpperCase" that checks if the first letter of the string is uppercase.
let isUpperCase = (yourInput) => {
  let n = yourInput[0];
  if (n >= "A" && n <= "Z") {
    return true;
  } else {
    return false;
  }
};

// console.log(isUpperCase("baaaaaaaaaaa"));
// console.log(isUpperCase("BAaaaaaaaaaaa"));

//5. Write a function called "isAllUpperCase" that checks if all letters in the given string is uppercase.
let isAllUpperCase = (n) => {
  if (n.length == 0) {
    return false;
  }

  let upCase = true;

  for (let i = 0; i < n.length; i++) {
    if (n[i] != n[i].toUpperCase()) {
      upCase = false;
    }
  }
  return upCase;
};

// console.log(isAllUpperCase("AbbbbA"));
// console.log(isAllUpperCase("ABCVDESS"));
// console.log(isAllUpperCase(""));

//6.Write a function called "position" that prints out the first uppercase letter and its index location. If not found, prints -1.
let position = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] == n[i].toUpperCase()) {
      return n[i] + " " + i;
    }
  }
  return -1;
};
console.log(position("CBssss"));
// console.log(position("ABCVDESS"));
// console.log(position(""));

// 7. Write a function called "findSmallCount" that takes one array of integers and one integer as input, and returns an integer indicating how many elements in the array is smaller than the input integer.

let findSmallCount = (n, m) => {
  let newArr = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] < m) {
      newArr.push(n[i]);
    }
  }
  return newArr.length;
};

console.log(findSmallCount([1, 2, 3, 4], 5));

// 8. Write a function called "findSmallerTotal" that takes one array of integers and one integer as input, and returns the sum of all elements in the array that are smaller than the input integer.

let findSmallerTotal = (n, m) => {
  let newArr = [];
  let result = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < m) {
      newArr.push(n[i]);
    }
  }
  newArr.map((x) => (result += x));
  return result;
};

console.log(findSmallerTotal([1, 999], 1000));

//9. Write a function called "findAllSmall" that takes one array of integers and another integer as input, and returns an array of integers that contains all elements that are smaller than the input integer.

let findAllSmall = (n, m) => {
  let newArr = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] < m) {
      newArr.push(n[i]);
    }
  }
  return newArr;
};

console.log(findAllSmall([1, 3, 2, 4], 5));

//10. Write a function called "sum" that takes one array of numbers, and return the sum of all elements in the input array.
let sum = (n) => {
  let result = 0;
  n.map((x) => {
    result += x;
  });

  return result;
};

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sum([]));
console.log(sum([-10, -20, -30]));
