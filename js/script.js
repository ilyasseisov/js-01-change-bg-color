// Variables
const colors = ['#7b68ee', '#eb3dae', '#f7ce51', '#5bc5fa'];
let colorNumber = 0;
const button = document.querySelector('.change-color-btn');

// Functions
const changeColor = () => {
  document.body.style.backgroundColor = colors[colorNumber];
  colorNumber < colors.length - 1 ? colorNumber++ : (colorNumber = 0);
};

// Event Listeners
button.addEventListener('click', changeColor);
