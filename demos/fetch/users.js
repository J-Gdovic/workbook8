//GET ALL
// fetch("http://localhost:3000/users")
// .then((response) => response.json())
// .then((users) => {
//     console.log(users);
// })

//GET ALL Await function
async function getUsers() {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json()
    return users;
}

async function init(){
const users = await getUsers();
console.log(users);
}
init();


// POST

fetch("http://localhost:3000/users",{method: 'POST',
headers:'',
body:

})
.then((response) => response.json())
.then((users) => {
    console.log(users);
})