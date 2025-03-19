function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const btn = document.querySelector('.change-color');
  btn.addEventListener('click', event => {
  const body = document.querySelector('body');
  body.style.backgroundColor = getRandomHexColor();
  const span = document.querySelector('.color');
  span.textContent = body.style.backgroundColor;
  });