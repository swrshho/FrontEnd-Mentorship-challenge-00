const tasksList = document.querySelector('.tasks');
const addBtn = document.querySelector('#add-btn');
const input = document.querySelector('#input');
const editInput = document.querySelectorAll('#edit-input')
const getKeyByValue = (value) => {
  return Object.keys(localStorage).find(key => localStorage[key] === value);
}

addBtn.addEventListener('click', () => {
  let inputValue = input.value;
  
  localStorage.setItem(localStorage.length, inputValue);
  input.value = '';
  location.reload();
});

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  tasksList.insertAdjacentHTML('beforeend', `<li class="single-task">
          <p class='p' >${value}</p>
          <div class="task-buttons">
            <button class="btn btn__edit">Edit</button>
            <button class="btn btn__delete">Delete</button>
          </div>
        </li>`)
}

const deleteBtn = document.querySelectorAll('.btn__delete');
deleteBtn.forEach((e) => {
  let parent = e.parentElement.parentElement;
  let text = parent.querySelector('.p').textContent;
  let textKey = getKeyByValue(text);
  e.addEventListener('click', () => {
    localStorage.removeItem(textKey);
    parent.remove();
  })
})

const editBtn = document.querySelectorAll('.btn__edit');
editBtn.forEach((e) => {
  let parent = e.parentElement.parentElement;
  let paragraph = parent.querySelector('.p');
  let editInput = document.createElement('input')
  editInput.id = 'edit-input';
  editInput.type = 'text';
  editInput.placeholder = paragraph.textContent;
  e.addEventListener('click', () => {
    
    if (e.textContent == 'save') {
      e.textContent = "edit";
      paragraph.textContent = editInput.value;
      parent.removeChild(editInput);
      parent.prepend(paragraph)
    } else {
      e.textContent = "save";
      parent.removeChild(paragraph);
      parent.prepend(editInput);
    }
  })
})

// const doneBtn = document.querySelectorAll('.btn__done');
// doneBtn.forEach((e) => {
//   e.addEventListener('click', () => {
//     console.log('hi');
//   })
// })