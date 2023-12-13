let nameFeild = document.querySelector("#nameFeild");
let emailFeild = document.querySelector("#emailFeild");
let userNameFeild = document.querySelector("#userNameFeild");
let streetFeild = document.querySelector("#streetFeild");
let cityFeild = document.querySelector("#cityFeild");

let inputFeildButton = document.querySelector("#inputFeildButton");

let urlParams = new URLSearchParams(location.search);
//bring in user id data from clicking the edit link

function editUserData() {
  let id = -1;
  if (urlParams.has("id") === true) {
    id = urlParams.get("id");
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((user) => {
        return user;
      });
  }
}

function populateUserData() {
  if (user.id == user.name) {
    nameFeild.innerText = user.name;
    emailFeild.innerText = user.email;
    userNameFeild.innerText = user.username;
    streetFeild.innerText = user.address.street;
    cityFeild.innerText = user.address.city;
  }
}

//wire up
populateUserData();
inputFeildButton.onclick = editUserData;
