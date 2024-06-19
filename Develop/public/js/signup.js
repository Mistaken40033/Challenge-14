const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log('Signup form submitted'); // Debugging line

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  console.log(`Name: ${name}, Email: ${email}, Password: ${password}`); // Debugging line

  if (name && email && password) {
    try {
      const response = await fetch('/api/Dashboard', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/project');
      } else {
        alert('Failed to sign up: ' + response.statusText);
      }
    } catch (error) {
      console.error('Error:', error); // Debugging line
      alert('An error occurred. Please try again.');
    }
  } else {
    alert('Please fill out all fields');
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

