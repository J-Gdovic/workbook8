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
  }
}

window.onload = loadUserDataTable;
