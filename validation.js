function validation() {
  const email = document.querySelector('#email');
  const error = document.querySelector('error');

  error = email === email.toLowerCase() ? '' : 'You should write your mail in lower case';

  return error;
}