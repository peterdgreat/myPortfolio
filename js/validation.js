const form = document.querySelector('#form');
function validation() {
  const email = document.querySelector('#email');
  const error = document.querySelector('#error');
  if (email.value !== email.value.toLowerCase()) {
    error.innerHTML = `Your Email Should Be In LowerCase,Please Consider Using "${email.value.toLowerCase()}" instead`;

    return false;
  }
  return true;
}

form.addEventListener('submit', (subm) => {
  if (!validation()) {
    subm.preventDefault();
  }
});