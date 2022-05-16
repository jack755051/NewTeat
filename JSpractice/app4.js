// localStorage.setItem("name", "Jack");
// localStorage.setItem("address", "Hawaii");
// localStorage.setItem("car", "Toyota");

// console.log(localStorage);

// let myaddress = localStorage.getItem("address");
// let myCar = localStorage.getItem("car");
// let myData = localStorage.getItem("name");

// localStorage.removeItem("name");
// localStorage.clear();

// console.log(myaddress);
// console.log(myCar);
// console.log(myData);

let friends = ["John", "Josn", "Din"];

localStorage.setItem("friends", JSON.stringify(friends));

let myFriends = JSON.parse(localStorage.getItem("friends"));
console.log(myFriends);
