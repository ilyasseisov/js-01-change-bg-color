// Variables
const colors = ['#7b68ee', '#eb3dae', '#f7ce51', '#5bc5fa'];
let colorIndex = 0;
const button = document.querySelector('.change-color-btn');

// Functions
const changeColor = () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex < colors.length - 1 ? colorIndex++ : (colorIndex = 0);
};

// Event Listeners
button.addEventListener('click', changeColor);
