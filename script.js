let ctr = 1;

function deleteTodo(index) {
  const delEle = document.getElementById(index);
  delEle.parentNode.removeChild(delEle);
}

function addTodo() {
  const inputEl = document.querySelector("input");
  const value = inputEl.value;

  const newDivEle = document.createElement("div");
  newDivEle.setAttribute("id", ctr);

  newDivEle.innerHTML =
    "<div>" +
    value +
    '</div><button onclick="deleteTodo(' +
    ctr +
    ')">Delete</button>';

  document.querySelector("body").appendChild(newDivEle);
  ctr = ctr + 1;
}
