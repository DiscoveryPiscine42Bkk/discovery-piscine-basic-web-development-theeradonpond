const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("new");

// โหลดจาก cookie ตอนเริ่ม
window.onload = function () {
  const data = getCookie("todo_list");
  if (data) {
    const todos = JSON.parse(data);
    todos.forEach(text => addTodo(text));
  }
};

// ปุ่มสร้างใหม่
newBtn.onclick = function () {
  const text = prompt("Enter a new to-do:");
  if (text && text.trim() !== "") {
    addTodo(text.trim());
    saveTodos();
  }
};

// สร้างและเพิ่ม TODO ใหม่ด้านบน
function addTodo(text) {
  const div = document.createElement("div");
  div.className = "todo";
  div.innerText = text;
  div.onclick = function () {
    if (confirm("Do you want to delete this to-do?")) {
      div.remove();
      saveTodos();
    }
  };
  ftList.insertBefore(div, ftList.firstChild);
}

// บันทึก TODO ทั้งหมดลง cookie
function saveTodos() {
  const todos = [];
  const items = ftList.querySelectorAll(".todo");
  items.forEach(item => todos.push(item.innerText));
  document.cookie = "todo_list=" + JSON.stringify(todos) + ";path=/;max-age=31536000";
}

// ดึงค่าจาก cookie
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [key, val] = cookie.trim().split('=');
    if (key === name) return decodeURIComponent(val);
  }
  return null;
}

