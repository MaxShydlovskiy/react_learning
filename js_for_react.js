// Reserved_word let
// variable at block if..else
var topic = "JavaScript";

if (topic) {
  var topic = "React";
  console.log("block", topic); // block React
  }

console.log("global", topic); // global React

// let for global variable

var topic = "JavaScript";

if (topic) {
  let topic = "React";
  console.log("block", topic); // React
  }

console.log("global", topic); // JavaScript

// cycle for

var div,
  container = document.getElementById("container");

for (var i = 0; i < 5; i++) {
  div = document.createElement("div");
  div.onclick = function() {
    alert("This is box #" + i);
  };
  container.appendChild(div);
}             // This is box #5

