"use strict";
//variables
//selects
let userIdSelect = document.querySelector("#userIdSelect");
let categorySelect = document.querySelector("#categorySelect");
let prioritySelect = document.querySelector("#prioritySelect");
//input
let newTaskInput = document.querySelector("#newTaskInput");
//submit button
let newTaskSumbitButton = document.querySelector("#newTaskSumbitButton");

//Put userin drop down! fetch user
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

//put categories in dropdown! fetch categories
function loadCategoriesArray() {
  fetch("http://localhost:8083/api/categories")
    .then((response) => response.json())
    .then((categories) => {
      for (const category of categories) {
        let option = document.createElement("option");
        option.value = category.id;
        option.innerText = category.name;
        categorySelect.appendChild(option);
      }
    });
}

//add new todo!-connect to submitbutton and redirect back to todo.html
function addTodo() {
  let userIdSelect = userIdSelect.value;
  let categorySelect = categorySelect.value;
  let prioritySelect = prioritySelect.value;
  let newTaskInput = newTaskInput.value;
  fetch("http://localhost:3000/users", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addTodo),
  })
    .then((response) => response.json())
    .then((addTodo) => {
      window.location.href = "todo.html";
      // console.log(addTodo);
      return addTodo;
    });
}

//wire up
loadUserArray();
loadCategoriesArray();
newTaskSumbitButton.onclick = addTodo;
