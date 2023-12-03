

    const form = document.querySelector('form');

    // Add event listener for form submission
    form.addEventListener('submit', validateForm);
    
    // Function to validate the form
    function validateForm(event) {
      // Prevent the form from being submitted to the server
      event.preventDefault();
    
      // Get the input values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const title = document.getElementById('title').value;
      const subject = document.getElementById('subject').value;
    
      // Perform your validation logic here
      if (name && email && title && subject) {
        // All fields are filled, form is valid
        console.log('Form is valid');
        return true;
      } else {
        // One or more fields are empty, form is invalid
        console.log('Please fill out everything correctly.');
        return false;
      }
    }