//GET ALL
// fetch("http://localhost:3000/users")
// .then((response) => response.json())
// .then((users) => {
//     console.log(users);
// })

//GET ALL Await function
async function getUsers() {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();
  return users;
}

async function init() {
  const users = await getUsers();
  console.log(users);
}
init();

// POST
const newUSER = {
  name: "Kanye WEST",
  username: "YEEZYYE",
  email: "KW@fakeit.com",
};

fetch("http://localhost:3000/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newUSER)
})
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
  });
