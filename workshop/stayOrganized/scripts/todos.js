"use strict";
//variables
let userIdSelect = document.querySelector("#userIdSelect");
let todoTbody = document.querySelector("#todoTbody");

//Put userin drop down!, fetch userArray
function loadUserArray() {
  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((users) => {
      for (const user of users) {
        let option = document.createElement("option");
        option.value = user.id;
        option.innerText = user.name;
        userIdSelect.appendChild(option);
      }
    });
}

function buildTodoTable() {
  fetch("http://localhost:8083/api/todos")
    .then((response) => response.json())
    .then((todos) => {
      todoTbody.innerText = "";
      let selectedUserId = userIdSelect.value;
      for (const todo of todos) {
        if (selectedUserId == todo.userid) {
          const tr = todoTbody.insertRow(-1);

          let td1 = tr.insertCell(0);
          td1.innerText = todo.category;

          let td2 = tr.insertCell(1);
          td2.innerText = todo.description;

          let td3 = tr.insertCell(2);
          td3.innerText = todo.deadline;

          let td4 = tr.insertCell(3);
          td4.innerText = todo.priority;
        }
      }
    });
}
loadUserArray();
userIdSelect.onchange = buildTodoTable;
