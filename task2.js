function fetchTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .catch((err) =>
      console.error("Poo Poo Poo... you got the error for todo:", err)
    );
}

function fetchUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .catch((err) =>
      console.error("Poo Poo Poo... you got the error for user:", err)
    );
}

Promise.all([fetchTodo(), fetchUser()])
  .then((results) => {
    console.log("Promise.all results:", results);
  })
  .catch((err) => console.error("You got an error in Promise.all:", err));

Promise.race([fetchTodo(), fetchUser()])
  .then((result) => {
    console.log("Promise.race result:", result);
  })
  .catch((err) => console.error("You got an error in Promise.race:", err));
