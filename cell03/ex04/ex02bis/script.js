$(function() {
  function isPositiveInt(val) {
    return /^\d+$/.test(val);
  }

  $('#tryme').on('click', function(e) {
    e.preventDefault();

    const left = $('#left').val();
    const right = $('#right').val();
    const op = $('#operator').val();

    if (!isPositiveInt(left) || !isPositiveInt(right)) {
      alert('Error :(');
      return;
    }

    const a = parseInt(left);
    const b = parseInt(right);

    if ((op === '/' || op === '%') && b === 0) {
      alert("It's over 9000!");
      console.log("It's over 9000!");
      return;
    }

    let result;
    switch (op) {
      case '+': result = a + b; break;
      case '-': result = a - b; break;
      case '*': result = a * b; break;
      case '/': result = a / b; break;
      case '%': result = a % b; break;
    }

    alert(result);
    console.log(result);
  });

  setInterval(() => alert('Please, use me...'), 30000);
});
