const nameUser = document.getElementById('name');
const eMail = document.getElementById('email');
const comment = document.getElementById('comment');

let data = {
  userName: nameUser.value,
  userMail: eMail.value,
  userComment: comment.value,
};

const setValues = () => {
  data.userName = nameUser.value;
  data.userMail = eMail.value;
  data.userComment = comment.value;
  const dataStore = JSON.stringify(data);
  localStorage.setItem('formDetails', dataStore);
};

const populateStorage = () => {
  nameUser.onchange = setValues;
  eMail.onchange = setValues;
  comment.onchange = setValues;
};

const getItems = () => {
  data = JSON.parse(localStorage.getItem('formDetails'));
  nameUser.value = data.username;
  eMail.value = data.usermail;
  comment.value = data.usercomment;
  populateStorage();
};

if (data.userName !== 'undefined'
|| data.userMail !== 'undefined'
|| data.userComment !== 'undefined') {
  getItems();
} else {
  populateStorage();
}