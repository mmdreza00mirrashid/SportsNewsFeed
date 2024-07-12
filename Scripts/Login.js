
function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
  }
  
  function showLoginForm() {
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }

  function login() {
   
    // Retrieve input values
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    
    // Retrieve data from localStorage
    var storedUsername = localStorage.getItem("contact");
    var storedPassword = localStorage.getItem("password");
    
    // Validate login
    if (username === storedUsername && password === storedPassword) {
      // Redirect to a new page
      var name=localStorage.getItem("name");
      localStorage.setItem("current", "admin");
      alert(`Welcome , ${localStorage.getItem("current")}`);
      // localStorage.setItem("current", name);
      window.location.href = "profile.html";
    } else {
      // Show message for failed login
      alert("Invalid username or password.");
      
      // Clear input fields
      document.getElementById("loginUsername").value = "";
      document.getElementById("loginPassword").value = "";
    }
    
  }
  
  function register() {
    const firstName = document.getElementById('firstNameInput').value;
    const middleName = document.getElementById('middleNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const contact = document.getElementById('contactInput').value;
    const password = document.getElementById('passwordInput').value;
    const confirmPassword = document.getElementById('confirmPasswordInput').value;
    const dob = document.getElementById('dobInput').value;
    const gender = document.querySelector('input[name="gender"]:checked').id;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Check if contact already exists
    var storedcontact = localStorage.getItem("contact");
    if (storedcontact === contact) {
      alert("contact already exists. Please choose a different one.");
      return;
    }

    // Store data in localStorage
    localStorage.setItem("contact", contact);
    localStorage.setItem("password", password);
    localStorage.setItem("name", firstName);

    // Clear input fields
    document.getElementById("registerUsername").value = "";
    document.getElementById("registerEmail").value = "";
    document.getElementById("registerPassword").value = "";
  
    alert("Registration successful!");
    showLoginForm();
  }