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
  if (urlParams.has("id")) {
    id = urlParams.get("id");
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((user) => {
        nameFeild.value = user.name;
        emailFeild.value = user.email;
        userNameFeild.value = user.username;
        streetFeild.value = user.address.street;
        cityFeild.value = user.address.city;
      });
  }
}
function editUser() {
  let newNameFeild2 = nameFeild.value;
  let newEmailFeild2 = emailFeild.value;
  let newUserNameFeild2 = userNameFeild.value;
  let newStreetFeild2 = streetFeild.value;
  let newCityFeild2 = cityFeild.value;

  const editedUser = {
    name: `${newNameFeild2}`,
    email: `${newEmailFeild2}`,
    username: `${newUserNameFeild2}`,
    //had to add new object to get it listed in table
    address: {
      street: `${newStreetFeild2}`,
      city: `${newCityFeild2}`,
    },
  };
  let id = urlParams.get("id");
  fetch(`http://localhost:3000/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedUser),
  })
    .then((response) => response.json())
    .then((editedUser) => {
      window.location.href = "users.html";
    });
}

//wire up
editUserData();
inputFeildButton.onclick = editUser;
