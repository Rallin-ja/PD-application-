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

/* time filter button */

document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".time-filter button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      // Remove all active classes
      buttons.forEach(b => {
        b.classList.remove(
          "active-today",
          "active-week",
          "active-month",
          "active-all"
        );
      });

      // Apply correct shade
      const type = btn.dataset.type;

      if (type === "today") btn.classList.add("active-today");
      if (type === "week") btn.classList.add("active-week");
      if (type === "month") btn.classList.add("active-month");
      if (type === "all") btn.classList.add("active-all");

    });
  });

});
