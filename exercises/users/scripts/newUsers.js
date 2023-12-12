let nameFeild = document.querySelector("#nameFeild");
let emailFeild = document.querySelector("#emailFeild");
let userNameFeild = document.querySelector("#userNameFeild");
let streetFeild = document.querySelector("#streetFeild");
let cityFeild = document.querySelector("#cityFeild");

let inputFeildButton = document.querySelector("#inputFeildButton");





function addNewUser() {
    let newNameFeild = nameFeild.value;
    let newEmailFeild = emailFeild.value;
    let newUserNameFeild = userNameFeild.value;
    let newStreetFeild = streetFeild.value;
    let newCityFeild = cityFeild.value;

const addedUser = {
  name: `${newNameFeild}`,
  email: `${newEmailFeild}`,
  username: `${newUserNameFeild}`,
  address:{
    street: `${newStreetFeild}`,
    city: `${newCityFeild}`,
  }
  
};
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addedUser),
  })
    .then((response) => response.json())
    .then((addedUser) => {
      // console.log(addedUser);
      return addedUser;
    });
}

//wire up
inputFeildButton.onclick = addNewUser;
