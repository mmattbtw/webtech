function my_function() {
  let firstName = prompt("What is your first name?");
  let lastName = prompt("What is your last name?");
  let fullName = firstName + " " + lastName;
  console.log(firstName, lastName);

  let userConfirmed = confirm(
    "Hello! " + fullName + " Welcome to CSCI4410/5410! Click OK to continue.",
  );

  if (userConfirmed) {
    alert("You clicked OK! Enjoy the course.");
    console.log(fullName + " has joined the course.");
  } else {
    alert("You clicked Cancel. Let us know if you need help.");
    console.log(fullName + " declined to continue.");
  }
}

function scream() {
  alert("HELP ME HAADHKDJAFHSDKFJHSDKJF");
}

function showAlert() {
  alert("hello?");
}

document.getElementById("text").addEventListener("click", showAlert);

let title = document.querySelector("#mytitle");
console.log(title.innerHTML);

let box = document.querySelector(".box");
console.log(box.innerHTML);

let firstParagraph = document.querySelector("p");
console.log(firstParagraph.innerHTML);

let firstItem = document.querySelector("ul li");
console.log(firstItem.innerHTML);

document.getElementById("title1").innerHTML = "asdfwow";

function changeText() {
  let elements = document.querySelectorAll("#title1, #title2, #title3");

  elements.forEach((element) => {
    element.innerHTML = "xd";
    element.style.color = "blue";
  });
}

document.getElementById("btn").addEventListener("click", changeText);

let cars = ["Nissan", "BMW"];
document.getElementById("demo").innerText = cars;
console.log(cars);

cars.push("Toyota");
document.getElementById("demo").innerText = cars;
console.log(cars);

cars.shift();
document.getElementById("demo").innerText = cars;
console.log(cars);

cars.unshift("Nissan");
document.getElementById("demo").innerText = cars;
console.log(cars);

cars.forEach((car) => {
  console.log(car);
});

for (const car of cars) {
  console.log(car);
}

let text = "<ul>";
for (const car of cars) {
  text += `<li>${car}</li>`;
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;

const person = { 
  firstName: "matt",
  lastName: "morris",
  age: "20",
  isStudent: true,

  printInfo: function() {
    return `hello ${this.firstName} ${this.lastName} who is ${this.age} years old wow!`
  }
}

console.log(person.printInfo())

document.getElementById("demo3").innerText = person.printInfo();