const form = document.querySelector('form');


form.addEventListener('submit', validateForm);

function validateForm(event) {
  event.preventDefault();

 
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const title = document.getElementById('title').value;
  const subject = document.getElementById('subject').value;


  if (name && email && title && subject) {
    console.log('Form is valid');
    form.submit();
  } else {
    console.log('Please fill out everything correctly.');
   
  }
} 