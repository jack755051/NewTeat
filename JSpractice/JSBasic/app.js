// let answer = Math.floor(Math.random() * 100);
// let n1 = 0;
// let n2 = 99;

// while (true) {
//   let input = prompt(`plz enter a number between ${n1} and ${n2}`);
//   if (input < n1 || input >= n2) {
//     alert(`you're number is wrong`);
//     continue;
//   }
//   if (input == answer) {
//     alert(`you're anwer is ${answer}. you're right`);
//     break;
//   } else if (input >= answer) {
//     n2 = input;
//   } else if (input <= answer) {
//     n1 = input;
//   }
// }

// const friends = ["Harry", "Ron", "Snap"];
// const reversed_friends = [];

// for (let i = friends.length - 1; i >= 0; i--) {
//   //   let friend = friends[i];
//   reversed_friends.push(friends[i]);
// }
// // console.log(friends.reverse());
// console.log(reversed_friends);

// 練習2
// function findsmallNumber(HowManyNumbers) {
//   let newArrray = [];
//   for (let i = 0; i < HowManyNumbers; i++) {
//     let randomNumber = Math.floor(Math.random() * 100);
//     newArrray.push(randomNumber);
//   }
//   let smallNumber = Math.min(...newArrray);
//   console.log(newArrray);
//   console.log(`find the small number ${smallNumber}`);
// }

// findsmallNumber(5);

//練習3
// function addUpTo(n) {
//   let result = 0;
//   for (let i = 0; i <= n; i++) {
//     result += i;
//   }
//   console.log(result);
// }
// addUpTo(5000);

// 隨機
// function findsmallNumber(HowManyNumbers) {
//   let newArrray = [];
//   let checkNumberArray = [];

//   for (let i = 0; i < HowManyNumbers; i++) {
//     let randomNumber = Math.floor(Math.random() * 100);
//     newArrray.push(randomNumber);
//   }

//   let smallNumber = Math.min(...newArrray);
//   newArrray.forEach((n) => {
//     if (n > smallNumber) {
//       checkNumberArray.push(n);
//     }
//   });

//   console.log(newArrray);
//   console.log(`find the small number ${smallNumber}`);
//   console.log(
//     `it's ${checkNumberArray.length} number bigger than ${smallNumber}`
//   );
//   console.log(checkNumberArray);
// }

// findsmallNumber(5);

// let body = document.querySelector("body");
// let myh1 = document.createElement("h1");
// let myh2 = document.createElement("h1");

// myh1.innerHTML = "<mark>I'm fucking asshole</mark>";
// myh2.innerText = "<mark>I'm fucking asshole</mark>";

// body.appendChild(myh1);
// body.appendChild(myh2);
let input = document.querySelector("input");
let button = document.querySelector("button");

let submitBTN = button.addEventListener("click", (e) => {
  console.log(e);
});
