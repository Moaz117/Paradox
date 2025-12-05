// dashboard.js - دوال خاصة بلوحة التحكم

function loadDashboardStats() {
  // جلب الإحصائيات من localStorage أو API
  const stats = {
    asteroids: localStorage.getItem('tracked_asteroids') ? 
      JSON.parse(localStorage.getItem('tracked_asteroids')).length : 0,
    projects: sampleProjects.length,
    reports: sampleReports.length,
    activeUsers: 42
  };
  
  // تحديث الأرقام في الصفحة
  document.getElementById('countAsteroids').textContent = stats.asteroids;
  document.getElementById('countProjects').textContent = stats.projects;
  document.getElementById('countReports').textContent = stats.reports;
  document.getElementById('countUsers').textContent = stats.activeUsers;
}