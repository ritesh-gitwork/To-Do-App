let ctr = 1;

function deleteTodo(index) {
  const delEl = document.getElementById(index);
  delEl.parentNode.removeChild(delEl);
}

function addTodo() {
  const selEl = document.querySelector("input");
  const todoText = selEl.value.trim();

  if (todoText === "") {
    alert("Please enter a todo item.");
    return;
  }

  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", ctr);

  const value = selEl.value;

  newDiv.innerHTML =
    "<div>" +
    value +
    '</div><button onclick="deleteTodo(' +
    ctr +
    ')">Delete</button>';

  document.querySelector("body").appendChild(newDiv);
  ctr = ctr + 1;
}
