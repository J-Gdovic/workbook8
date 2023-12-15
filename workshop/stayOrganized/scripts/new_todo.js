"use strict";
//variables
//selects
let userIdSelect = document.querySelector("#userIdSelect");
let todoTbody = document.querySelector("#todoTbody");
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

//put priorites in drop down
function loadPrioritiesArray() {
  fetch("http://localhost:8083/api/todos")
    .then((response) => response.json())
    .then((todos) => {
      for (const todo of todos) {
        let option = document.createElement("option");
        option.value = todo.id;
        option.innerText = todo.priority;
        prioritySelect.appendChild(option);
      }
    });
}
//wire up
loadUserArray();
loadCategoriesArray();
loadPrioritiesArray();
