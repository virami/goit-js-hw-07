const tInput = document.querySelector('.inp');

const output = document.querySelector('#name-output');

tInput.addEventListener('input', () => {
  const trimmedTInput = tInput.value.trim();
  output.textContent = trimmedTInput || 'Anonymous';
});