
// document.getElementById('ac').addEventListener("click",funn)
// function funn()
// {
//   document.getElementById('ac').document.write("Login Sucessfully !!!")
// }

function fn()
{
let w = document.getElementById('fn')
w = document.write("Submited Sucessfully !!! ")
}

let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    Menu.classList.remove('active');
    ShoppingCart.classList.remove('active');
    Login.classList.remove('active');
}
let ShoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>{
    ShoppingCart.classList.toggle('active');
    Menu.classList.remove('active');
    searchForm.classList.remove('active');
    Login.classList.remove('active');
}
let Login=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{
    Login.classList.toggle('active');
    Menu.classList.remove('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
}
let Menu=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    Menu.classList.toggle('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    Login.classList.remove('active');
}
window.onscroll=()=>{
    Menu.classList.remove('active');
    searchForm.classList.remove('active');
    ShoppingCart.classList.remove('active');
    Login.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,

    },
    750: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const messageDiv = document.getElementById("message");

  form.onsubmit = (event) => {
      event.preventDefault();
      
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
          showMessage("Passwords do not match.", "error");
          return;
      }

      // Here you would typically handle form submission (e.g., send data to a server)
      showMessage("Registration successful!", "success");
      form.reset();  // Reset the form after successful submission
  };

  function showMessage(message, type) {
      messageDiv.textContent = message;
      messageDiv.className = `message ${type}`;
      messageDiv.classList.remove("hidden");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const messageDiv = document.getElementById("message");

  form.onsubmit = (event) => {
      event.preventDefault();
      
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Here you would typically check the credentials against a server
      // For this example, we'll use dummy validation
      if (username === "user@example.com" && password === "password123") {
          showMessage("Login successful!", "success");
          // Redirect or perform further actions
      } else {
          showMessage("Invalid username or password.", "error");
      }
  };

  function showMessage(message, type) {
      messageDiv.textContent = message;
      messageDiv.className = `message ${type}`;
      messageDiv.classList.remove("hidden");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("forgotPasswordForm");
  const messageDiv = document.getElementById("message");

  form.onsubmit = (event) => {
      event.preventDefault();
      
      const email = document.getElementById("email").value;

      // Here you would typically send the email to the server for processing
      // For this example, we'll use a simple check
      if (email) {
          showMessage("A password reset link has been sent to your email.", "success");
          form.reset();  // Reset the form after submission
      } else {
          showMessage("Please enter a valid email address.", "error");
      }
  };

  function showMessage(message, type) {
      messageDiv.textContent = message;
      messageDiv.className = `message ${type}`;
      messageDiv.classList.remove("hidden");
  }
});
