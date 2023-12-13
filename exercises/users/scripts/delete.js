let userNameModalParagraph = document.querySelector("#userNameModalParagraph");
let confirmDeleteUser = document.querySelector("#confirmDeleteUser");
let confirmCancel = document.querySelector("#confirmCancel");

let urlParams = new URLSearchParams(location.search);

function deleteUserData() {
  let id = -1;
  if (urlParams.has("id") === true) {
    id = urlParams.get("id");

    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((user) => {
        window.location.href = "users.html";
      });
  }
}
confirmDeleteUser.onclick = deleteUserData;
