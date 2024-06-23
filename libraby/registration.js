function Register(){
  const username=document.getElementById('Username').value;
  const email=document.getElementById('Email').value;
  const password=document.getElementById('password').value;
    // Basic validation
    if (username.length < 3) {
      alert('Username must be at least 3 characters long.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (!terms) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    alert('Registration successful!\nUsername: ' + username + '\nEmail: ' + email + '\nPassword: ' + password);
}