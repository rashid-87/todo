let tasks = [
  {
    id: 1,
    text: "Купить книгу",
    imPort: false,
    isDane: false,
  }
];

const todoForm = document.querySelector('.todo__form');
const todoList = document.querySelector(".todo__list");
const todoLinput = document.querySelector(".todo__input");
const todoError = document.querySelector('.todo__error');
const todoDel = document.querySelectorAll('.todo__del');

const addTodo = function () {
  todoList.innerHTML = ""
  tasks.forEach((item) => {
    todoList.innerHTML += `
    <li class="todo__item">
       <p class="todo__text">${item.text}</p>
       <span data-id="${item.id}" class="todo__bel">X</span>
     </li>
    `
  })
  let dodoDelit = document.querySelectorAll('.todo__bel')
    Array.from(dodoDelit).forEach((item) => {
      item.addEventListener('click', () => {
        tasks = tasks.filter(el => el.id != item.dataset.id)
        addTodo()
      })
    })
}
addTodo()

todoForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if (tasks.some(item => item.text === event.target[0].value)) {
    alert ('Нельзя добавить')
  } else {
    tasks = [...tasks, {
      id: tasks.length ? tasks.at(-1).id + 1 : 1,
      text: event.target[0].value,
      imPort: false,
      isDane: false,
    }]
    addTodo()
    event.target[0].value = ''
  }
})

todoLinput.addEventListener('input', (event) => {
  if(tasks.some(item => item.text.toUpperCase() === event.target.value.toUpperCase())){
    todoError.style.display = 'block'
  } else {
    todoError.style.display = 'none'
  }
})


















































































// const addTodoLIst = () => {
//   todoList.innerHTML = ''
//   tasks.forEach((item) => {
//     todoList.innerHTML += `
//     <li class="todo__item">
//     <p class="todo__text">${item.text}</p>
//     <span data-id="${item.id}" class="todo__bel">X</span>
//   </li>
//     `;
//   });

//   let todoDel = document.querySelectorAll('.todo__bel');

//   Array.from(todoDel).forEach((item) => {
//     item.addEventListener('click', () => {
//       tasks = tasks.filter(el => el.id != item.dataset.id)

//       addTodoLIst()
//     })
//   })
// }
// addTodoLIst();

// todoForm.addEventListener('submit', (event) => {
//   event.preventDefault()

//   if (tasks.some(item => item.text.toUpperCase() === event.target[0].value.toUpperCase())){
//     alert('Нельзя добавить')
//   } else {
//     tasks = [...tasks, {
//       id: tasks.length ? tasks.at(-1).id + 1 : 1,
//       text: event.target[0].value,
//       imPort: false,
//       isDane: false
//     }]
//     addTodoLIst();
//   event.target[0].value = ''
//   }
// })

// todoLinput.addEventListener('input', (event) => {
//   if(tasks.some(item => item.text.toUpperCase() === event.target.value.toUpperCase())){
//     todoError.style.display = 'block'
//   } else {
//     todoError.style.display = 'none'
//   }
// })