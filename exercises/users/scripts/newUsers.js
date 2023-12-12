const addedUser ={
    name:"Sidney Crosby",
    email:"sidTHAkid87@pens.net",
    username: "sidneyKidney877887",
    street:"BarDown Lane",
    city:"Pittsburgh",
}

fetch("http://localhost:3000/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(addedUser),
})
  .then((response) => response.json())
  .then((addedUser) => {
    console.log(addedUser);
  });
  