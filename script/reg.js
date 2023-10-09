function toggleForm(form) {
    if (form === 'login') {
      document.getElementById('login-form').classList.add('active');
      document.getElementById('register-form').classList.remove('active');
      document.getElementById('recovery-form').classList.remove('active');
      document.getElementsByClassName('tab')[0].classList.add('active');
      document.getElementsByClassName('tab')[1].classList.remove('active');
    } else if (form === 'register') {
      document.getElementById('register-form').classList.add('active');
      document.getElementById('login-form').classList.remove('active');
      document.getElementById('recovery-form').classList.remove('active');
      document.getElementsByClassName('tab')[1].classList.add('active');
      document.getElementsByClassName('tab')[0].classList.remove('active');
    }
  }

  function toggleRecoveryForm() {
    document.getElementById('recovery-form').classList.toggle('active');
  }