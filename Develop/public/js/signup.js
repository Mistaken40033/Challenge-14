const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/userRoutes', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/Dashboard');
    } else {
      alert('Failed to sign up: ' + response.statusText);
    }
  } else {
    alert('Please fill out all fields');
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
