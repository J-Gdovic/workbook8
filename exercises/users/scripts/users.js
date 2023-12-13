"use strict";

let userInfoTable = document.getElementById("userInfoTable");
let userInfoTbody = document.getElementById("userInfoTbody");

function loadUserDataTable() {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => buildDataTable(data));
}

function buildDataTable(users) {
  for (const user of users) {
    let tr = userInfoTbody.insertRow();

    let td1 = tr.insertCell();
    td1.innerText = user.id;

    let td2 = tr.insertCell();
    td2.innerText = user.name;

    let td3 = tr.insertCell();
    td3.innerText = user.email;

    let td4 = tr.insertCell();
    td4.innerText = user.username;

    let td5 = tr.insertCell();
    td5.innerText = user.address.street;

    let td6 = tr.insertCell();
    td6.innerText = user.address.city;

    let td7 = tr.insertCell();
    let anchor1 = document.createElement("a");
    anchor1.innerText = "Edit";
    anchor1.href = "edit.html";
    td7.appendChild(anchor1);

    let td8 = tr.insertCell();
    let anchor2 = document.createElement("a");
    anchor2.innerText = "Delete";
    anchor2.href = "delete.html";
    td8.appendChild(anchor2);


  }
}

window.onload = loadUserDataTable;
