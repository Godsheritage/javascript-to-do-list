const section = document.querySelector('section');

const h1 = document.createElement('h1');
h1.innerText = "To-Do list";
h1.classList.add("h-style");
section.appendChild(h1);

const h2 =document.createElement('h2')
h2.innerText = "This is my 2nd js Project and its a To-Do list";
h2.classList.add("h-style");
section.appendChild(h2);

const input = document.createElement('input')
input.setAttribute('placeholder', 'To-Do')
input.setAttribute('type', 'text')
section.appendChild(input);

const ul = document.createElement('ul')
section.appendChild(ul)

// to get the input and add the listener
const inputs = document.querySelector('input');
inputs.addEventListener('keypress',function(e){
    if(e.key === 'Enter'){
        const li = document.createElement('li')
        li.setAttribute('id','list-items')
        ul.appendChild(li)
        li.innerText = this.value;
        this.value = '';
    }
})

// const lists = document.querySelector('#list-items');
// lists.addEventListener('click', () => {
//     lists.style.list-style('underline');

// }) 

// this.li.addEventListener('click', e => {
//     console.log(this);
// })\\



