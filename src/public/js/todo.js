const todoForm = document.getElementById('todo_form')
const todoInput = document.querySelector('#todo_form input')

const todoUL = document.getElementById('todo_list')

const addTask = newTask => {
  const li = document.createElement('li')
  const span = document.createElement('span')

  li.appendChild(span)
  span.innerText = newTask

  todoUL.appendChild(li)
}

const handleNewTask = event => {
  event.preventDefault()

  addTask(todoInput.value)
  todoInput.value = ''
}

todoForm.addEventListener('submit', handleNewTask)
