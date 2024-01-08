const inputEl = document.getElementById('input');
const errorEl = document.getElementById('error');
const resultEl = document.getElementById('result');

let errorTime;
let resultTime;

function updateResults() {
  //console.log('Change');
  //console.log(inputEl.value);
  if (inputEl.value <= 0 || isNaN(inputEl.value)) {
    errorEl.innerHTML = 'Please enter a valid number'

    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = '';
      inputEl.value = '';
    }, 2000);
  } else {
    resultEl.innerText =( +inputEl.value / 2.2).toFixed(2);

    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      inputEl.value = '';
      resultEl.innerText = '';
    }, 5000);
  }
}

inputEl.addEventListener('change', updateResults)