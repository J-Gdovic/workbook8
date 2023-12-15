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
        option.value = category.name;
        option.innerText = category.name;
        categorySelect.appendChild(option);
      }
    });
}

//add new todo!-connect to submitbutton and redirect back to todo.html
function addNewTodo() {
  let userIdSelect2 = userIdSelect.value;
  let categorySelect2 = categorySelect.value;
  let prioritySelect2 = prioritySelect.value;
  let newTaskInput2 = newTaskInput.value;

  let newTodo = {
    userid: userIdSelect2,
    category: categorySelect2,
    priority: prioritySelect2,
    description: newTaskInput2,
    completed:false,
    deadline:"02/30/2023"
  };

  fetch("http://localhost:8083/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTodo),
  })
    .then((response) => response.json())
    .then((newTodo) => {
        window.location.href = "todos.html";
      // console.log(addTodo);
      return newTodo;
    });
}

//wire up
loadUserArray();
loadCategoriesArray();
newTaskSumbitButton.onclick = addNewTodo;
