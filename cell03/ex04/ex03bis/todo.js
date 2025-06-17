$(function() {
  let todos = [];

  function saveTodos() {
    document.cookie = 'todos=' + JSON.stringify(todos) + ';path=/';
  }

  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const c of cookies) {
      const [key, val] = c.split('=');
      if (key === name) return val;
    }
    return null;
  }

  function createTodo(text, addToTop = true) {
    const $todo = $('<div class="todo"></div>').text(text);
    $todo.on('click', function() {
      if (confirm('Do you want to delete this TO DO?')) {
        $(this).remove();
        todos = todos.filter(item => item !== text);
        saveTodos();
      }
    });
    if (addToTop) {
      $('#ft_list').prepend($todo);
    } else {
      $('#ft_list').append($todo);
    }
  }

  // Load saved todos from cookie
  const saved = getCookie('todos');
  if (saved) {
    todos = JSON.parse(saved);
    todos.forEach(todo => createTodo(todo, false));
  }

  $('#new').on('click', function() {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
      todos.unshift(text);
      saveTodos();
      createTodo(text);
    }
  });
});
