const createButton = document.querySelector(`.create-button-js`);
createButton.addEventListener(`click`, createElement);

const deleteButton = document.querySelector(`.delete-button-js`);
const section = document.querySelector(`.box-todo-js`);
const mainInput = document.querySelector(`.txt-input-js`);

const todoActions = {
  allData: [],
  add(text) {
    const todo = {
      id: Date.now(),
      text,
    };

    allData.push(todo);
  },

  delete(id) {
    this.allData = this.allData.filter((e) => e.id != id);
  },
};

console.log(createButton);

function createElement(e) {
  e.preventDefault();

  console.log(`hello`);
}
