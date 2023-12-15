"use strict";
//variables
let userIdSelect = document.querySelector("#userIdSelect");
let todoTbody = document.querySelector("#todoTbody");

//Put userin drop down!, fetch userArray
function loadTodoArray() {
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
  todoTbody.innerText = "";
  let selectedUserId = userIdSelect.value;
  for (const user of users) {
    if (user.id == selectedUserId) {
      const tr = todoTbody.insertRow(-1);

      let td1 = tr.insertCell(0);
      td1.innerText = user.category;

      let td2 = tr.insertCell(1);
      td2.innerText = user.description;

      let td3 = tr.insertCell(2);
      td3.innerText = user.deadline;

      let td4 = tr.insertCell(3);
      td4.innerText = user.priority;
    }
  }
}
loadTodoArray();
userIdSelect.onclick = buildTodoTable;
