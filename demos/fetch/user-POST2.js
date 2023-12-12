const newUSER2 = {
  name: "Doc Ellis",
  username: "number17",
  email: "DocEL17PITT@RATS.com",
};

fetch("http://localhost:3000/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newUSER2),
})
  .then((response) => response.json())
  .then((newUSER2) => {
    console.log(newUSER2);
    // return newUSER2
  });
