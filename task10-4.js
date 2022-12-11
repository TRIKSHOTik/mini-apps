const input = document.querySelector("input");
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const btn = document.querySelector("button");



form.addEventListener('submit', (event)=> {
    event.preventDefault();
    const li = document.createElement('li');
    const button = document.createElement('button');
    const checkbox = document.createElement('input');
    button.innerText = "X";
    checkbox.type = "checkbox";
    li.innerText = input.value;
    input.value = '';
    li.append(button)
    li.prepend(checkbox)
    ul.appendChild(li);
    checkbox.addEventListener('click', ()=>{
        if(checkbox.checked){
            li.classList.add('checked')
            ul.appendChild(li);
        }
        else{
            li.classList.remove('checked');
            ul.prepend(li)
        }
    })
    button.addEventListener('click', ()=>{
        li.remove();
    })
})

