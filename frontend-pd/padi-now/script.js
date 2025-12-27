document.getElementById("sendBtn").addEventListener("click", sendMessage);

document.getElementById("messageInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let input = document.getElementById("messageInput");
    let messageText = input.value.trim();

    if (messageText === "") return;

    let chat = document.getElementById("chatArea");

    let messageDiv = document.createElement("div");

    // IMPORTANT: This makes the message move to the RIGHT side
    messageDiv.classList.add("message", "user");

    messageDiv.innerText = messageText;

    chat.appendChild(messageDiv);

    chat.scrollTop = chat.scrollHeight;

    input.value = "";
}


// ===============================
// Welcome Back Page Logic (wb-)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  const continueBtn = document.getElementById("wbContinueBtn");
  const signupLink = document.getElementById("wbSignupLink");
  const emailInput = document.getElementById("wbEmail");

  // Run only if Welcome Back page exists
  if (continueBtn && emailInput) {

    continueBtn.addEventListener("click", () => {
      const email = emailInput.value.trim();

      if (email === "") {
        alert("Please enter your email address");
        return;
      }

      // Simple email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      // Save email for next page
      localStorage.setItem("loginEmail", email);

      // Redirect to password page
      window.location.href = "password.html";
    });
  }

  if (signupLink) {
    signupLink.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "signup.html";
    });
  }

});


/* profile page */


// PROFILE PAGE SCRIPT
const profilePage = document.querySelector(".page-profile");

if (profilePage) {

  console.log("Profile JS loaded");

  const editBtn = document.getElementById("editPicBtn");
  const fileInput = document.getElementById("fileInput");
  const profileImg = document.getElementById("profileImg");

  editBtn.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (file) {
      profileImg.src = URL.createObjectURL(file);
    }
  });

  const submitBtn = document.getElementById("submitProfile");
  const popup = document.getElementById("passwordPopup");

  submitBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  document.getElementById("confirmSubmit").addEventListener("click", () => {
    alert("Profile Updated Successfully");
    popup.style.display = "none";
  });
}

/* create account page */

// CREATE ACCOUNT PAGE SCRIPT
const createAccountPage = document.querySelector(".page-create-account");

if (createAccountPage) {
  const submitBtn = document.getElementById("caSubmitBtn");
  const popup = document.getElementById("caPopup");
  const confirmBtn = document.getElementById("caConfirmBtn");

  submitBtn.addEventListener("click", () => {
    popup.style.display = "flex";
  });

  confirmBtn.addEventListener("click", () => {
    alert("Account Created Successfully");
    popup.style.display = "none";
  });

  // Close popup when clicking outside
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
}
