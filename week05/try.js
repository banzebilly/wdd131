const user = {
    name: "Billy",
    age: 30
};

localStorage.setItem("user", JSON.stringify(user));

const saved = JSON.parse(localStorage.getItem("user"));

console.log(saved);