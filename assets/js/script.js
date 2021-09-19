const tasksList = document.querySelector('.tasks');
const addBtn = document.querySelector('#add-btn');
const input = document.querySelector('#input');

addBtn.addEventListener('click', () => {
  let inputValue = input.value;
  
  localStorage.setItem(localStorage.length, inputValue);
  input.value = '';

  tasksList.insertAdjacentHTML('beforeend', `<li class="single-task">
          <p>${inputValue}</p>
          <div class="task-buttons">
            <button class="btn btn__edit">Edit</button>
            <button class="btn btn__delete">Delete</button>
          </div>
        </li>`)
});

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  tasksList.insertAdjacentHTML('beforeend', `<li class="single-task">
          <p>${value}</p>
          <div class="task-buttons">
            <button class="btn btn__edit">Edit</button>
            <button class="btn btn__delete">Delete</button>
          </div>
        </li>`)
}