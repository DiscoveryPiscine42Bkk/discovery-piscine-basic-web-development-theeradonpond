let todos = [];

window.onload = function () {
  // โหลด TODO จาก cookie ถ้ามี
  const saved = getCookie("todos");
  if (saved) {
    todos = JSON.parse(saved);
    todos.forEach((text) => createTodoElement(text));
  }
};

function addTodo() {
  const text = prompt("Enter a new TO DO:");
  if (text && text.trim() !== "") {
    todos.unshift(text); // เพิ่มไปที่ต้น array
    saveTodos();
    createTodoElement(text, true); // เพิ่ม DOM
  }
}

function createTodoElement(text, prepend = false) {
  const div = document.createElement("div");
  div.className = "todo";
  div.innerText = text;

  div.onclick = function () {
    if (confirm("Do you want to delete this TO DO?")) {
      div.remove();
      todos = todos.filter(t => t !== text); // ลบออกจาก array
      saveTodos();
    }
  };

  const list = document.getElementById("ft_list");
  if (prepend) {
    list.insertBefore(div, list.firstChild);
  } else {
    list.appendChild(div);
  }
}

function saveTodos() {
  document.cookie = "todos=" + JSON.stringify(todos) + ";path=/";
}

function getCookie(name) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}
