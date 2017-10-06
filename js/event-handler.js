function checkUsername() {
  var elMsg = document.getElementById('feedback');
  if (this.value.length < 5) {
    elMsg.textContent = 'Username must be 5 characters or more';
  } else {
    elMsg.textContent = '';
  }
}

var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername

function checkPassword() {
  var elMsg = document.getElementById('feedback-password');
  if (this.value.length < 6) {
    elMsg.textContent = 'Password must be 6 characters or more'
  } else {
    elMsg.textContent = '';
  }
}

var elPassword = document.getElementById('password');
elPassword.onblur = checkPassword
