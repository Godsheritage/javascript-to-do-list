const section = document.querySelector("section");
const lists = document.querySelector(".listss");
const h1 = document.createElement("h1");
const input = document.createElement("input");
const ul = document.createElement("ul");

h1.innerText = "To-Do list";
h1.classList.add("h-style");
section.appendChild(h1);

input.setAttribute("placeholder", "To-Do");
input.setAttribute("type", "text");
input.classList.add("form-control");
section.appendChild(input);

lists.appendChild(ul);

// to get the input and add the listener
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && this.value ) {
    const li = document.createElement("li");
    li.setAttribute("id", "list-items");
    ul.appendChild(li);
    li.innerText = this.value;
    this.value = "";
  }
});

// const lists = document.querySelector('#list-items');
// lists.addEventListener('click', () => {
//     lists.style.list-style('underline');

// })

// this.li.addEventListener('click', e => {
//     console.log(this);
// })\\
