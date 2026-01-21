/* analysis page */
let progressChart, studyChart, strengthChart;

/* =======================
   INITIALIZE CHARTS
======================= */

function initProgressChart() {
  const ctx = document.getElementById("progressChart");
  progressChart = new Chart(ctx, {
    type: "line",
    data: { labels: [], datasets: [{
      data: [],
      borderColor: "#1e88e5",
      backgroundColor: "rgba(30,136,229,0.2)",
      fill: true,
      tension: 0.4
    }]},
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, max: 100 } }
    }
  });
}

function initStudyChart() {
  const ctx = document.getElementById("studyChart");
  studyChart = new Chart(ctx, {
    type: "bar",
    data: { labels: [], datasets: [{
      data: [],
      backgroundColor: "#43a047",
      borderRadius: 6
    }]},
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } }
    }
  });
}

function initStrengthChart() {
  const ctx = document.getElementById("strengthChart");
  strengthChart = new Chart(ctx, {
    type: "pie",
    data: { labels: [], datasets: [{
      data: [],
      backgroundColor: ["#1e88e5", "#43a047", "#f4511e"]
    }]},
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

/* =======================
   UPDATE CHARTS
======================= */

function updateCharts(data) {
  // Progress
  progressChart.data.labels = data.progress.labels;
  progressChart.data.datasets[0].data = data.progress.values;
  progressChart.update();

  // Study Time
  studyChart.data.labels = data.studyTime.labels;
  studyChart.data.datasets[0].data = data.studyTime.values;
  studyChart.update();

  // Strength
  strengthChart.data.labels = data.strength.labels;
  strengthChart.data.datasets[0].data = data.strength.values;
  strengthChart.update();
}

/* =======================
   FETCH DATA FROM BACKEND
======================= */

function loadDashboardData(period) {
  fetch(`/api/dashboard?period=${period}`)
    .then(res => res.json())
    .then(data => {
      updateCharts(data);
    })
    .catch(err => console.error("Dashboard error:", err));
}

/* =======================
   BUTTON EVENTS
======================= */

document.addEventListener("DOMContentLoaded", () => {
  initProgressChart();
  initStudyChart();
  initStrengthChart();

  // Default load
  loadDashboardData("today");

  document.getElementById("todayBtn").onclick = () => loadDashboardData("today");
  document.getElementById("weekBtn").onclick = () => loadDashboardData("week");
  document.getElementById("monthBtn").onclick = () => loadDashboardData("month");
  document.getElementById("allBtn").onclick = () => loadDashboardData("all");
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

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("userName").textContent = "";
  document.getElementById("schoolName").textContent = "";
});

window.addEventListener("load", () => {
  document.querySelectorAll("canvas").forEach(canvas => {
    canvas.style.opacity = "1";
  });
});


