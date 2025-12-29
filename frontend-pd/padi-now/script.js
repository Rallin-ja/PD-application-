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
/* analysis page */

document.addEventListener("DOMContentLoaded", () => {

  /* PROGRESS LINE CHART */
  const progressCanvas = document.getElementById("progressChart");

  if (progressCanvas) {
    new Chart(progressCanvas, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
          data: [10, 25, 40, 55, 65, 80, 90],
          borderColor: "#1e88e5",
          backgroundColor: "rgba(30,136,229,0.2)",
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });
  }

  /* STUDY TIME BAR / TIMELINE */
  const studyCanvas = document.getElementById("studyChart");

  if (studyCanvas) {
    new Chart(studyCanvas, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
          data: [1, 2, 1.5, 3, 2.5, 4, 3],
          backgroundColor: "#43a047"
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }

});



/* =========settings page ===========*/

document.addEventListener("DOMContentLoaded", () => {

  const notifyToggle = document.getElementById("notifyToggle");
  const aboutBtn = document.getElementById("aboutBtn");
  const inviteBtn = document.getElementById("inviteBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const deleteBtn = document.getElementById("deleteBtn");

  // Notifications
  if (notifyToggle) {
    notifyToggle.addEventListener("change", () => {
      alert(
        notifyToggle.checked
          ? "Notifications enabled"
          : "Notifications disabled"
      );
    });
  }

  // About
  if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
      alert("This app helps you track study progress.");
    });
  }

  // Invite friends
  if (inviteBtn) {
    inviteBtn.addEventListener("click", () => {
      alert("Invite link copied!");
    });
  }

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to logout?")) {
        window.location.href = "login.html";
      }
    });
  }

  // Delete account
  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      if (confirm("This action is permanent. Delete account?")) {
        alert("Account deleted");
      }
    });
  }

});

document.addEventListener("DOMContentLoaded", () => {

  const notifyBtn = document.getElementById("notificationBtn");
  const notifyDot = document.getElementById("notifyDot");

  // Simulate unread notifications (you can replace with backend later)
  const hasNotification = true;

  if (notifyDot && hasNotification) {
    notifyDot.style.display = "inline-block";
  }

});

/*notification page */

document.addEventListener("DOMContentLoaded", () => {

  const notificationMsg = document.getElementById("notificationMsg");
  const profileImg = document.getElementById("notifyProfileImg");

  // Example: Load profile image (later from backend/localStorage)
  if (profileImg) {
    profileImg.src = "https://via.placeholder.com/150";
  }

  // Example notification data
  const notifications = [];

  if (notificationMsg) {
    if (notifications.length === 0) {
      notificationMsg.textContent = "No updates";
    } else {
      notificationMsg.textContent = notifications[0];
    }
  }

});


