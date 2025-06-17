function isPositiveInteger(value) {
  return /^\d+$/.test(value);
}

function calculate() {
  const left = document.getElementById("left").value;
  const right = document.getElementById("right").value;
  const operator = document.getElementById("operator").value;

  if (!isPositiveInteger(left) || !isPositiveInteger(right)) {
    alert("Error :(");
    return;
  }

  const a = parseInt(left);
  const b = parseInt(right);

  if ((operator === "/" || operator === "%") && b === 0) {
    alert("It's over 9000!");
    console.log("It's over 9000!");
    return;
  }

  let result;
  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = a / b; break;
    case "%": result = a % b; break;
  }

  alert(result);
  console.log(result);
}

// Show alert every 30 seconds
setInterval(() => {
  alert("Please, use me...");
}, 30000);
