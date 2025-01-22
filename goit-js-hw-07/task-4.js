// Select the login form
const loginForm = document.querySelector(".login-form");

// Add a submit event listener to the form
loginForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Access form elements
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  // Check if any field is empty
  if (!email || !password) {
    alert("All form fields must be filled in.");
    return;
  }

  // Create an object with the entered data
  const formData = {
    email,
    password,
  };

  // Log the object to the console
  console.log(formData);

  // Reset the form fields
  loginForm.reset();
});
