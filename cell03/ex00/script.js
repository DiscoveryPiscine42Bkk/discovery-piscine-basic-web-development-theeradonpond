const button = document.getElementById('changeBtn');

button.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
