const form = document.querySelector(`#get-form`);
form.addEventListener(`submit`, createElement);
const mainInput = document.querySelector(`.txt-input-js`);

const section = document.querySelector(`.box-todo-js`);
section.addEventListener(`click`, deleteElement);

let counter = 103;
const todoActions = {
  allData: [],
  add(text) {
    const todo = {
      id: Date.now(),
      text,
      num: counter,
    };
    counter += 14;
    this.allData.push(todo);
    return todo;
  },

  delete(id) {
    this.allData = this.allData.filter((e) => e.id != id);
  },
};

function createElement(e) {
  e.preventDefault();

  const todoItem = todoActions.add(mainInput.value);
  createTodo(todoItem);
  form.reset();
}

function createTodo(item) {
  section.insertAdjacentHTML(
    `beforeend`,
    `<div class="todo-item" data-id=${item.id}>
      <h2>Заметка № ${item.num}</h2>
      <p>
      ${item.text}
      </p>
      <button type="submit" class="delete-button delete-button-js">Удалить</button>
    </div>`
  );
}

function deleteElement(e) {
  if (e.target.nodeName !== `BUTTON`) {
    return;
  }
  const deleteButton = e.target;
  const toDelete = deleteButton.closest(`.todo-item`);
  const idToDelete = toDelete.dataset.id;
  todoActions.delete(Number(idToDelete));
  toDelete.remove();
  console.log(todoActions.allData);
}

const someAction = {
  memory: [],
  add(txt) {
    const todo = {
      identificator: Date.now(),
      txt
    };
    this.memory.push(todo)
    return todo
  },
  delete(id) {
    this.memory.filter((el) => {
      id != el.id;
    });
  },
};
