async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return await response.json();
  } catch (error) {
    console.error("There is an error while load todo record:", error);
  }
}

async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    return await response.json();
  } catch (error) {
    console.error("There is an error while loading user record:", error);
  }
}

async function run() {
  try {
    const allResults = await Promise.all([fetchTodo(), fetchUser()]);
    console.log("Promise.all results:", allResults);

    const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log("Promise.race result:", raceResult);
  } catch (error) {
    console.error("Error in process:", error);
  }
}

run();
