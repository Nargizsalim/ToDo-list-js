const addTodoBtn = document.querySelector('#add-new-todo-btn');
const newTodoInput = document.querySelector('#new-todo-input');

const ulTodoList = document.querySelector('#todo-list');



// 1
// addTodoBtn.addEventListener('click', function () {
//   console.log('add new todo');
// });

// 2
// function addTodoFn() {
//   console.log('add new todo');
// }

// addTodoBtn.addEventListener('click', addTodoFn);

// 3
// const addTodoFn = () => {
//   console.log('add new todo');
// }

// addTodoBtn.addEventListener('click', addTodoFn);

// 4
const addTodoFn = function () {
  // console.log('add new todo');

  const inputValue = newTodoInput.value;
  // console.log(inputValue);

  // li list item
  const listItem = document.createElement('li');
  console.log(listItem)

  // Multiple ways to add class to a tag
  // 1
  // listItem.setAttribute('class', 'single-todo');

  // 2
  // listItem.className = 'single-todo';

  // 3
  listItem.classList.add('single-todo');
  // listItem.classList.remove('single-todo');

  // input checkbox
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.setAttribute('class', 'single-todo-check');

  checkBox.addEventListener('click', (e) => {
    console.log('todo checked', e.target.checked);
    const checkState = e.target.checked;

    // 1
    checkBox.nextElementSibling.classList.toggle('cross-line');

    // 2
    // if (checkState) {
    //   checkBox.nextElementSibling.classList.add('cross-line');
    // } else {
    //   checkBox.nextElementSibling.classList.remove('cross-line');
    // }

    // 3
    // const classExist = checkBox.nextElementSibling.className.includes('cross-line');

    // if (classExist) {
    //   checkBox.nextElementSibling.classList.remove('cross-line');
    // } else {
    //   checkBox.nextElementSibling.classList.add('cross-line');
    // }
  });

  // paragraph
  const todoText = document.createElement('p');
  todoText.setAttribute('class', 'single-todo-text');
  todoText.innerText = inputValue;

  // edit button
  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit';
  editBtn.setAttribute('class', 'edit-btn');
  editBtn.addEventListener('click', () => {
    console.log('edit btn clicked');
    edit ()
    editInput.style.display = "block",
    editBtn.style.display = "none"
    editDone.style.display = "block"

   

  });

  function edit(){
    
    editInput.value=inputValue;
    todoText.style.display = "none"
    
  }


  const editInput = document.createElement('input');
  editInput.setAttribute('type', 'editInput');
  editInput.setAttribute('class', 'edit-single-todo-text');

  const editDone = document.createElement('button');
  editDone.setAttribute('class', 'done-btn');
  editDone.innerText = "Done"


   editDone.addEventListener('click', ()=>{
    
    todoText.innerText = editInput.value;
    todoText.style.display = "block"
    editInput.style.display = "none"
    editDone.style.display = "none"
    editBtn.style.display = "block"
    console.log(todoText)

  });

    

  // delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.setAttribute('class', 'delete-btn');
  // deleteBtn.innerHtml = 'Delete';
  // deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    console.log('delete btn clicked');

    // 1
    deleteBtn.parentElement.remove();

    // 2
    // const item = deleteBtn.parentElement;
    // const ul = item.parentElement;
    // ul.removeChild(item);

    // 3
    // deleteBtn.parentNode.remove();
  });

  // Add child elements to listItem
  // 1
  listItem.appendChild(checkBox);
  listItem.appendChild(todoText);
  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);
  listItem.appendChild(editInput);
  listItem.appendChild(editDone);

  // 2
  // listItem.append(checkBox, todoText, deleteBtn);

  if (inputValue !== '') {
    ulTodoList.appendChild(listItem);
  }

  // Reset input value
  newTodoInput.value = '';
};

// function myBtnFn() {
//   console.log('delete btn clicked');
// }

// function myCheckBoxFn() {
//   console.log('checkbox clicked');
// }

// const addTodoFn = function () {
//   const inputValue = newTodoInput.value;

//   if (inputValue !== '') {
//     ulTodoList.innerHTML += `
//       <li class="single-todo">
//         <input type="checkbox" class="single-todo-check" onclick="myCheckBoxFn()" />
//         <p class="single-todo-text">${inputValue}</p>
//         <button class="delete-btn" onclick="myBtnFn()">Delete</button>
//       </li>
//     `;

//     // Reset input value
//     newTodoInput.value = '';
//   }
// };

addTodoBtn.addEventListener('click', addTodoFn);

// 5
// addTodoBtn.addEventListener('click', () => {
//   console.log('add new todo');
// });

// button => btn/Btn