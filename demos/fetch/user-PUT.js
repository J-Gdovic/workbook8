const newUSER2 = {
    name: "Doc Ellis",
    username: "#17#17",//changed from number17 in POST2ex
    email: "DocEL17PITT@RATS.com",
  };
  
  fetch("http://localhost:3000/users/16", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUSER2),
  })
    .then((response) => response.json())
    .then((newUSER2) => {
      // console.log(newUSER2);
      return newUSER2
    });