///this will delete the user with the ID of 16
  fetch("http://localhost:3000/users/16", {
    method: "DELETE",
   
  })
    .then((response) => response.json())
    .then((newUSER2) => {
      console.log(newUSER2);
    
    });