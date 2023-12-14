"use strict";
//variables
let userIdSelect = document.querySelector("#userIdSelect");
let todoTbody = document.querySelector("#todoTbody");

//Put userid in drop down!, fetch todoArray
function loadTodoArray() {
  fetch("http://localhost:8083/api/todos")
    .then((response) => response.json())
    .then((todoArray) => {
      todoArray;
      //   console.log(todoArray);
    });
}
loadTodoArray();

function selectByUserId() {
  for (const user of users) {
    let option = document.createElement("option");
    option.value = user.id;
    option.innerText = user.userid;
    userIdSelect.appendChild(option);
  }
}
selectByUserId();
