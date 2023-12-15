"use strict";
//variables
let userIdSelect = document.querySelector("#userIdSelect");
let todoTbody = document.querySelector("#todoTbody");
let todoArray;
//Put userid in drop down!, fetch todoArray
function loadTodoArray() {
  fetch("http://localhost:8083/api/todos")
    .then((response) => response.json())
    .then((todos) => {
      todoArray = todos; //assigns the fectch to the golbal var
      for (const user of todoArray) {
        let option = document.createElement("option");
        option.value = user.id;
        option.innerText = user.userid;
        userIdSelect.appendChild(option);
      }
    });
}
loadTodoArray();

function buildTodoTable() {
  todoTbody.innerText = "";
  const selectedUserId = userIdSelect.value;
  for (const user of todoArray) {
    if (user.userid == selectedUserId) {
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

userIdSelect.onclick = buildTodoTable;
