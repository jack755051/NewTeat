// 1. Write a function called "mySort" that takes an array of integers as input, and returns the sorted version of the input array.
let mySort = (n) => {
  let newArr = n.sort((a, b) => {
    return a - b;
  });

  console.log(newArr);
};

// mySort([17, 0, -3, 2, 1, 0.5]);

// 2.  Write a function called "isPrime" that takes an integer as input, and returns a boolean value that indicates if the input number is prime.

let isPrime = (n) => {
  if (n === 1 || (n > 2 && n % 2 === 0)) {
    return false;
  }
  return true;
};

// console.log(isPrime(11));
// console.log(isPrime(13));
// console.log(isPrime(17));
// console.log(isPrime(19));
// console.log(isPrime(23));
// console.log(isPrime(31));

//3. Write a function called "confirmEnding" that takes 2 strings as input, and returns a boolean value that indicates if the first input ends with the second input.

//4.Write a function called "findDuplicate" that an array of integers as inputs, and check if there's any duplicate values in the array.

let findDuplicate = (items) => {
  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (i != j && items[i] == items[j]) {
        return true;
      }
    }
  }
  return false;
};

// let findDuplicate = (items) => {
//   for (let i = 0; i < items.length; i++) {
//     for (let j = i + 1; j <= items.length; j++) {
//       if (items[i] == items[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(findDuplicate([1, 3, 5, 7, 9, 3]));
// console.log(findDuplicate([]));
// console.log(findDuplicate([3, 4, 5, 6, 7, 10000, 0]));

// 5. Write a function called "palindrome" that checks if the input string is a palindrome. (Search on google if you don't know what a palindrome is.)

let palindrome = (n) => {
  let halfNumber = Math.floor(n.split("").length / 2);
  let halfString = n.slice(0, halfNumber).toLowerCase().split("").join("");
  let unHalfString = n
    .slice(-halfNumber)
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  if (halfString == unHalfString) {
    // return true;
    console.log(true);
  } else {
    console.log(false);
  }
  // return false;
  console.log(halfString);
  console.log(unHalfString);
};

// palindrome("bearaeb"); // halfNumber =3
// palindrome("Whatever revetahw"); // halfNumber =8

// 6. Write a function called "pyramid" that takes an integer as input, and prints a pyramid in the following pattern:

//看解答

let drawStar = (n, m) => {
  let result = "";
  //n = space / m = star
  for (let i = 0; i < n; i++) {
    result += " ";
  }
  for (let i = 0; i < m; i++) {
    result += "*";
  }
  console.log(result);
};

let pyramid = (o) => {
  let i = o - 1;
  let j = 1;
  for (let k = 1; k <= o; k++) {
    drawStar(i, j);
    i--;
    j += 2;
  }
};

// pyramid(4);
// pyramid(10);

// 7. Write a function called "inversePyramid" that draws pyramid upside down.

let inversePyramid = (o) => {
  let i = 0;
  let j = 2 * o - 1;
  for (let k = 1; k <= o; k++) {
    drawStar(i, j);
    i++;
    j -= 2;
  }
};

// inversePyramid(4);
// inversePyramid(10);

//1. Write a function called "factorPrime" that takes an integer as input, and returns the prime factorization of the input.

let factorPrime = (n) => {
  let result = n + " = ";
  let p = 2;
  while (p <= n) {
    if (n % p == 0) {
      result += p + "*";
      n /= p;
    } else {
      p++;
    }
  }
  console.log(result.slice(0, result.length - 1));
};

// factorPrime(120);

// 2. Write a function called "intersection" that takes 2 arrays, and returns an array of elements that are in the intersection of 2 arrays.

let intersection = (n, m) => {
  let newArr = [];
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < m.Length; j++) {
      if (n[i] == m[j]) {
        let isOkay = true;
        for (let k = 0; k < newArr.length; k++) {
          if (n[i] == newArr[k]) {
            isOkay = false;
          }
        }
        if (isOkay) {
          newArr.push(n[i]);
        }
      }
    }
  }
  console.log(newArr);
};

// intersection([1, 3, 4, 6, 10], [5, 11, 4, 3, 100, 144, 0]);

//3. Write a function called "flatten" that flattens an array.

let flatten = (n) => {
  let result = [];

  let helper
};
