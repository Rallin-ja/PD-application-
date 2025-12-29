document.addEventListener("DOMContentLoaded", function () {

  // NOTIFICATION DOT (SIMULATION)
  const notifyDot = document.getElementById("notifyDot");
  if (notifyDot) {
    notifyDot.style.display = "inline-block"; // unread notification
  }

  // LOGOUT MODAL
  const logoutBtn = document.getElementById("logoutBtn");
  const logoutModal = document.getElementById("logoutModal");
  const cancelLogout = document.getElementById("cancelLogout");
  const confirmLogout = document.getElementById("confirmLogout");

  if (logoutBtn && logoutModal) {
    logoutBtn.addEventListener("click", function () {
      logoutModal.style.display = "flex";
    });
  }

  if (cancelLogout && logoutModal) {
    cancelLogout.addEventListener("click", function () {
      logoutModal.style.display = "none";
    });
  }

  if (confirmLogout) {
    confirmLogout.addEventListener("click", function () {
      window.location.href = "login.html";
    });
  }

});

/* ===== DELETE ACCOUNT MODAL ===== */

const deleteBtn = document.getElementById("deleteBtn");
const deleteModal = document.getElementById("deleteModal");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");

if (deleteBtn && deleteModal) {
  deleteBtn.addEventListener("click", () => {
    deleteModal.style.display = "flex";
  });
}

if (cancelDelete && deleteModal) {
  cancelDelete.addEventListener("click", () => {
    deleteModal.style.display = "none";
  });
}

if (confirmDelete) {
  confirmDelete.addEventListener("click", () => {
    alert("Account deleted successfully!");
    window.location.href = "index.html"; // or login page
  });
}
