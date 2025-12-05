// دالة التحقق من المصادقة المشتركة
function checkAuth() {
  return localStorage.getItem('paradox_user') !== null;
}

// إضافة مستمع لروابط التواصل الاجتماعي
function initSocialLinks() {
  const fbLinks = document.querySelectorAll('[data-social="facebook"]');
  const liLinks = document.querySelectorAll('[data-social="linkedin"]');
  
  fbLinks.forEach(link => {
    link.href = 'https://www.facebook.com/Paradox2026/';
    link.target = '_blank';
  });
  
  liLinks.forEach(link => {
    link.href = 'https://www.linkedin.com/company/paradox2024';
    link.target = '_blank';
  });
}

// تهيئة عامة
window.addEventListener('DOMContentLoaded', function() {
  initCommon();
  initSocialLinks();
  
  // إضافة السنة في الفوتر
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});

// Enhanced sample data and UI helpers for Paradox site
const sampleAsteroids = [
  { 
    id: '2025AB', 
    name: '2025 AB', 
    diameter: '120 m', 
    hazard: 'آمن', 
    classification: 'NEO', 
    distance_km: 1500000, 
    discovery_date: '2025-01-12',
    velocity: '5.2 km/s',
    magnitude: 22.1
  },
  { 
    id: '99942', 
    name: 'Apophis', 
    diameter: '370 m', 
    hazard: 'مراقب', 
    classification: 'PHA', 
    distance_km: 384000, 
    discovery_date: '2004-06-19',
    velocity: '7.4 km/s',
    magnitude: 19.7
  },
  { 
    id: '2001FO32', 
    name: '2001 FO32', 
    diameter: '1 km', 
    hazard: 'منخفض', 
    classification: 'NEO', 
    distance_km: 7200000, 
    discovery_date: '2001-03-21',
    velocity: '8.9 km/s',
    magnitude: 17.7
  },
  { 
    id: '2024XY', 
    name: '2024 XY', 
    diameter: '540 m', 
    hazard: 'منخفض', 
    classification: 'PHA', 
    distance_km: 220000, 
    discovery_date: '2024-11-02',
    velocity: '6.3 km/s',
    magnitude: 20.3
  },
  { 
    id: '2023DW', 
    name: '2023 DW', 
    diameter: '50 m', 
    hazard: 'آمن', 
    classification: 'NEO', 
    distance_km: 4500000, 
    discovery_date: '2023-02-26',
    velocity: '4.8 km/s',
    magnitude: 24.5
  },
  { 
    id: '101955', 
    name: 'Bennu', 
    diameter: '490 m', 
    hazard: 'مراقب', 
    classification: 'PHA', 
    distance_km: 120000, 
    discovery_date: '1999-09-11',
    velocity: '6.1 km/s',
    magnitude: 20.2
  }
];

const sampleTeams = [
  { title: 'الرصد البصري', desc: 'شبكة تلسكوبات وملاحظات', members: 24, projects: 5 },
  { title: 'تحليل المدارات', desc: 'نمذجة ومحاكاة الاصطدام', members: 18, projects: 3 },
  { title: 'المحاكاة والذكاء الاصطناعي', desc: 'اختبار السيناريوهات والتنبؤ', members: 12, projects: 4 },
  { title: 'التوعية والتعليم', desc: 'مقالات ومحاضرات وورش عمل', members: 32, projects: 8 },
  { title: 'التطوير التقني', desc: 'برمجيات وأدوات الرصد', members: 15, projects: 6 },
  { title: 'التعاون الدولي', desc: 'شراكات مع وكالات الفضاء', members: 8, projects: 3 }
];

const sampleProjects = [
  { 
    title: 'بناء مرصد متنقل', 
    progress: 65,
    description: 'تطوير مرصد متنقل مزود بتقنيات حديثة للرصد الميداني',
    budget: '$250,000',
    timeline: '18 شهر'
  },
  { 
    title: 'محاكاة اصطدام كويكب', 
    progress: 42,
    description: 'محاكاة ديناميكية لسيناريوهات اصطدام الكويكبات بالأرض',
    budget: '$180,000',
    timeline: '12 شهر'
  },
  { 
    title: 'نظام فرز الصور الذكي', 
    progress: 78,
    description: 'نظام ذكاء اصطناعي لتحليل صور الكويكبات تلقائياً',
    budget: '$120,000',
    timeline: '9 شهر'
  },
  { 
    title: 'نظام تتبع آلي للكويكبات', 
    progress: 30,
    description: 'منصة تتبع تلقائية للكويكبات القريبة من الأرض',
    budget: '$300,000',
    timeline: '24 شهر'
  },
  { 
    title: 'شبكة التلسكوبات الأفريقية', 
    progress: 55,
    description: 'إنشاء شبكة من التلسكوبات عبر القارة الأفريقية',
    budget: '$1,200,000',
    timeline: '36 شهر'
  },
  { 
    title: 'قمر صناعي لرصد الكويكبات', 
    progress: 15,
    description: 'تصميم وتطوير قمر صناعي مخصص لرصد الكويكبات',
    budget: '$2,500,000',
    timeline: '48 شهر'
  }
];

const sampleReports = [
  { 
    title: 'تقرير شهرى - أكتوبر 2024', 
    excerpt: 'ملخص الاكتشافات الأخيرة وتحليل الكويكبات الجديدة',
    date: '2024-10-31',
    pages: 24,
    download: 'report-oct-2024.pdf'
  },
  { 
    title: 'محاكاة مدار كويكب أبوفيس', 
    excerpt: 'نتائج المحاكاة والرؤى حول مسار كويكب أبوفيس',
    date: '2024-09-15',
    pages: 18,
    download: 'apophis-simulation.pdf'
  },
  { 
    title: 'دليل المرصد المتنقل', 
    excerpt: 'دليل بناء وتجهيز مرصد منخفض التكلفة',
    date: '2024-08-20',
    pages: 32,
    download: 'mobile-observatory-guide.pdf'
  },
  { 
    title: 'تحليل مخاطر الكويكبات 2024', 
    excerpt: 'تقرير شامل عن الكويكبات الخطرة وتقييم المخاطر',
    date: '2024-07-10',
    pages: 45,
    download: 'asteroid-risk-2024.pdf'
  },
];

// وظيفة إنشاء عنصر HTML
function el(tag, cls, inner){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(inner !== undefined) e.innerHTML = inner;
  return e;
}

// إنشاء النجوم المتلألئة
function createStars(){
  const starsContainer = document.getElementById('stars');
  if(!starsContainer) return;
  
  for(let i = 0; i < 150; i++){
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = Math.random() * 3 + 'px';
    star.style.height = star.style.width;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 5 + 's';
    star.style.opacity = Math.random() * 0.7 + 0.3;
    starsContainer.appendChild(star);
  }
}

// عرض الكويكبات
function renderAsteroids(){
  const root = document.getElementById('asteroidList');
  if(!root) return;
  root.innerHTML = '';
  
  sampleAsteroids.forEach(a => {
    const card = el('div','card asteroid');
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: start;">
        <div>
          <div style="font-weight:800; font-size: 1.2rem;">${a.name}</div>
          <div class="small">ID: ${a.id}</div>
        </div>
        <span class="tag" style="background: ${getHazardColor(a.hazard)}">${a.hazard}</span>
      </div>
      
      <div style="margin-top: 15px;">
        <div class="kv">
          <span class="small">القطر:</span>
          <span style="font-weight:600;">${a.diameter}</span>
        </div>
        <div class="kv">
          <span class="small">المسافة:</span>
          <span style="font-weight:600;">${a.distance_km.toLocaleString()} كم</span>
        </div>
        <div class="kv">
          <span class="small">السرعة:</span>
          <span style="font-weight:600;">${a.velocity}</span>
        </div>
      </div>
      
      <div style="margin-top: 15px; display:flex; gap:10px; flex-wrap: wrap;">
        <a class="btn" href="asteroid-details.html?id=${encodeURIComponent(a.id)}">
          <i class="fas fa-info-circle"></i> التفاصيل
        </a>
        <button class="btn primary" onclick="trackAsteroid('${a.id}')">
          <i class="fas fa-satellite"></i> تتبع
        </button>
      </div>
    `;
    root.appendChild(card);
  });
}

// لون الخطر
function getHazardColor(hazard){
  switch(hazard){
    case 'آمن': return 'rgba(76, 175, 80, 0.1)';
    case 'منخفض': return 'rgba(255, 193, 7, 0.1)';
    case 'مراقب': return 'rgba(244, 67, 54, 0.1)';
    default: return 'rgba(158, 158, 158, 0.1)';
  }
}

// عرض الفرق
function renderTeams(){
  const root = document.getElementById('teamsGrid') || document.getElementById('teamsList');
  if(!root) return;
  root.innerHTML = '';
  
  sampleTeams.forEach(t => {
    const card = el('div','card');
    card.innerHTML = `
      <div style="font-weight:800; font-size: 1.2rem;">${t.title}</div>
      <div class="small" style="margin-top:10px; min-height: 40px;">${t.desc}</div>
      
      <div style="margin-top: 15px; display: flex; justify-content: space-between;">
        <div>
          <div class="small">الأعضاء</div>
          <div style="font-weight:600;">${t.members}</div>
        </div>
        <div>
          <div class="small">المشاريع</div>
          <div style="font-weight:600;">${t.projects}</div>
        </div>
      </div>
      
      <div style="margin-top:15px;">
        <button class="btn" onclick="viewTeam('${t.title}')">
          <i class="fas fa-users"></i> عرض الفريق
        </button>
      </div>
    `;
    root.appendChild(card);
  });
}

// عرض المشاريع
function renderProjects(){
  const root = document.getElementById('projectsGrid');
  if(!root) return;
  root.innerHTML = '';
  
  sampleProjects.forEach(p => {
    const card = el('div','card');
    card.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <div style="font-weight:800; font-size: 1.2rem;">${p.title}</div>
        <span style="font-weight:800; color: var(--accent);">${p.progress}%</span>
      </div>
      
      <div class="small" style="margin-top:10px; min-height: 40px;">${p.description}</div>
      
      <div class="progress-bar" style="margin: 15px 0;">
        <div class="progress-fill" style="width: ${p.progress}%;"></div>
      </div>
      
      <div style="display: flex; justify-content: space-between; margin-top: 10px;">
        <div>
          <div class="small">الميزانية</div>
          <div style="font-weight:600;">${p.budget}</div>
        </div>
        <div>
          <div class="small">المدة</div>
          <div style="font-weight:600;">${p.timeline}</div>
        </div>
      </div>
      
      <div style="margin-top:15px;">
        <button class="btn" onclick="viewProject('${p.title}')">
          <i class="fas fa-external-link-alt"></i> تفاصيل المشروع
        </button>
      </div>
    `;
    root.appendChild(card);
  });
}

// عرض التقارير
function renderReports(){
  const root = document.getElementById('reportsGrid');
  if(!root) return;
  root.innerHTML = '';
  
  sampleReports.forEach(r => {
    const card = el('div','card');
    card.innerHTML = `
      <div style="font-weight:800; font-size: 1.2rem;">${r.title}</div>
      <div class="small" style="margin-top:10px; min-height: 40px;">${r.excerpt}</div>
      
      <div style="display: flex; justify-content: space-between; margin-top: 15px;">
        <div>
          <div class="small">التاريخ</div>
          <div style="font-weight:600;">${r.date}</div>
        </div>
        <div>
          <div class="small">الصفحات</div>
          <div style="font-weight:600;">${r.pages}</div>
        </div>
      </div>
      
      <div style="margin-top:15px; display: flex; gap: 10px;">
        <button class="btn" onclick="downloadReport('${r.download}')">
          <i class="fas fa-download"></i> تحميل PDF
        </button>
        <button class="btn ghost" onclick="previewReport('${r.title}')">
          <i class="fas fa-eye"></i> معاينة
        </button>
      </div>
    `;
    root.appendChild(card);
  });
}

// إحصائيات لوحة التحكم
function renderDashboardStats(){
  const ca = document.getElementById('countAsteroids');
  const cp = document.getElementById('countProjects');
  const cr = document.getElementById('countReports');
  
  if(ca) ca.textContent = sampleAsteroids.length;
  if(cp) cp.textContent = sampleProjects.length;
  if(cr) cr.textContent = sampleReports.length;
  
  // تحديث الإحصائيات الحية
  const liveAsteroids = document.getElementById('liveAsteroids');
  const hazardAsteroids = document.getElementById('hazardAsteroids');
  const teamMembers = document.getElementById('teamMembers');
  const activeProjects = document.getElementById('activeProjects');
  
  if(liveAsteroids) {
    // تأثير عد متزايد
    animateValue(liveAsteroids, 0, 1245, 2000);
  }
  
  if(hazardAsteroids) {
    const hazardCount = sampleAsteroids.filter(a => a.hazard === 'مراقب' || a.hazard === 'منخفض').length;
    animateValue(hazardAsteroids, 0, hazardCount, 1500);
  }
  
  if(teamMembers) {
    const totalMembers = sampleTeams.reduce((sum, team) => sum + team.members, 0);
    animateValue(teamMembers, 0, totalMembers, 1800);
  }
  
  if(activeProjects) {
    animateValue(activeProjects, 0, sampleProjects.length, 1200);
  }
  
  // عرض الكويكبات في لوحة التحكم
  const root = document.getElementById('dashboardAsteroids');
  if(root){
    root.innerHTML='';
    sampleAsteroids.slice(0, 4).forEach(a => {
      const card = el('div','card small');
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between;">
          <strong>${a.name}</strong>
          <span class="tag" style="font-size: 11px; padding: 3px 8px;">${a.hazard}</span>
        </div>
        <div style="margin-top: 8px;">${a.diameter}</div>
        <a class="btn" style="margin-top:10px; width: 100%; text-align: center;" 
           href="asteroid-details.html?id=${encodeURIComponent(a.id)}">
           <i class="fas fa-chart-line"></i> تحليل مفصل
        </a>
      `;
      root.appendChild(card);
    });
  }
}

// تأثير العد التصاعدي
function animateValue(element, start, end, duration){
  let startTimestamp = null;
  const step = (timestamp) => {
    if(!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    element.textContent = value.toLocaleString();
    if(progress < 1){
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// تتبع كويكب
function trackAsteroid(id){
  const asteroid = sampleAsteroids.find(a => a.id === id);
  if(asteroid){
    alert(`بدأ تتبع الكويكب ${asteroid.name}\nسيتم تحديث موقعك ببياناته كل ساعة.`);
    // هنا يمكن إضافة كود التتبع الفعلي
  }
}

// عرض فريق
function viewTeam(teamName){
  alert(`جاري تحميل معلومات فريق ${teamName}...`);
  // يمكن توجيه المستخدم لصفحة الفريق التفصيلية
}

// عرض مشروع
function viewProject(projectName){
  alert(`جاري تحميل تفاصيل مشروع ${projectName}...`);
  // يمكن توجيه المستخدم لصفحة المشروع التفصيلية
}

// تحميل تقرير
function downloadReport(filename){
  alert(`جاري تحميل الملف: ${filename}\n(هذه محاكاة - في الواقع سيتم تحميل الملف الفعلي)`);
  // محاكاة التحميل
  const link = document.createElement('a');
  link.href = `reports/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// معاينة تقرير
function previewReport(reportTitle){
  alert(`معاينة تقرير: ${reportTitle}\n(هذه محاكاة - في الواقع ستظهر نافذة معاينة)`);
}

// تهيئة عامة
function initCommon(){
  // إضافة السنة الحالية
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
  
  // إنشاء النجوم
  createStars();
  
  // تنفيذ وظائف العرض
  renderAsteroids();
  renderTeams();
  renderProjects();
  renderReports();
  renderDashboardStats();
  
  // ربط روابط وسائل التواصل الاجتماعي
  const fb = document.querySelectorAll('[data-social="facebook"]');
  fb.forEach(el => {
    if(!el.href || el.href === '#') {
      el.href = 'https://www.facebook.com/Paradox2026/';
    }
  });
  
  const li = document.querySelectorAll('[data-social="linkedin"]');
  li.forEach(el => {
    if(!el.href || el.href === '#') {
      el.href = 'https://www.linkedin.com/company/paradox2024';
    }
  });
  
  // إضافة تأثيرات تفاعلية للأزرار
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// تهيئة عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', initCommon);

// وظائف البحث (لصفحة البحث)
if(typeof doSearch === 'undefined'){
  window.doSearch = function(){
    const text = document.getElementById("searchInput")?.value.trim().toLowerCase() || '';
    const hazard = document.getElementById("hazardFilter")?.value || '';
    const cls = document.getElementById("classFilter")?.value || '';
    const diameter = document.getElementById("diameterFilter")?.value || '';

    let filtered = sampleAsteroids.filter(a => {
      const matchText =
        a.name.toLowerCase().includes(text) ||
        a.id.toLowerCase().includes(text);

      const matchHazard = hazard === "" || a.hazard === hazard;
      const matchClass = cls === "" || a.classification === cls;

      let matchDiameter = true;
      if (diameter !== "") {
        const d = parseInt(a.diameter);
        if (!isNaN(d)) {
          matchDiameter = d >= parseInt(diameter);
        }
      }

      return matchText && matchHazard && matchClass && matchDiameter;
    });

    const countElement = document.getElementById("resultsCount");
    if(countElement) countElement.textContent = filtered.length;

    const grid = document.getElementById("resultsGrid");
    if(grid){
      grid.innerHTML = "";

      filtered.forEach(a => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div style="display: flex; justify-content: space-between;">
            <strong style="font-size: 1.1rem;">${a.name}</strong>
            <span class="tag" style="background: ${getHazardColor(a.hazard)}">${a.hazard}</span>
          </div>
          <div class="small" style="margin-top: 8px;">ID: ${a.id}</div>
          <div class="small">القطر: ${a.diameter}</div>
          <div class="small">التصنيف: ${a.classification}</div>
          <div class="small">السرعة: ${a.velocity}</div>
          <a class="btn primary" style="margin-top:15px; width: 100%; text-align: center;" 
             href="asteroid-details.html?id=${a.id}">
             <i class="fas fa-chart-bar"></i> عرض التفاصيل الكاملة
          </a>
        `;
        grid.appendChild(card);
      });
    }
  };
}

// دوال جديدة للملف الشخصي ورفع التقارير

// تحميل بيانات الملف الشخصي
async function loadUserProfile(userId) {
  // في التطبيق الحقيقي، ستأتي البيانات من API
  return {
    id: userId,
    name: "أحمد محمد",
    email: "ahmed@paradox.team",
    role: "عضو فريق الرصد البصري",
    avatar: "👨‍🚀",
    joinDate: "2024-03-15",
    bio: "مهتم برصد الكويكبات والمذنبات، عضو في فريق Paradox منذ 2024.",
    stats: {
      reports: 7,
      projects: 3,
      activityDays: 142,
      achievements: 3
    }
  };
}

// رفع تقرير جديد
async function uploadReport(reportData) {
  console.log('Uploading report:', reportData);
  
  // محاكاة عملية الرفع
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        reportId: 'REP-' + Date.now(),
        message: 'تم رفع التقرير بنجاح وهو قيد المراجعة'
      });
    }, 2000);
  });
}

// الحصول على تقارير المستخدم
async function getUserReports(userId) {
  return [
    {
      id: 'REP-2025001',
      title: 'تحليل مدار الكويكب 2025 AB',
      type: 'رصدي',
      status: 'منشور',
      date: '2025-01-15',
      downloadUrl: '#'
    },
    {
      id: 'REP-2024009',
      title: 'محاكاة تأثير الكويكب على المناطق الحضرية',
      type: 'محاكاة',
      status: 'منشور',
      date: '2024-12-03',
      downloadUrl: '#'
    }
  ];
}

// تحديث الملف الشخصي
async function updateProfile(userId, profileData) {
  console.log('Updating profile for user:', userId, profileData);
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'تم تحديث الملف الشخصي بنجاح'
      });
    }, 1000);
  });
}

// دالة تسجيل الدخول المحسنة
async function login(email, password) {
  // بيانات تجريبية
  const demoUsers = [
    { email: 'admin@paradox.local', password: 'secret', name: 'مدير النظام' },
    { email: 'user@paradox.local', password: 'user123', name: 'مستخدم عادي' }
  ];
  
  const user = demoUsers.find(u => u.email === email && u.password === password);
  
  if (user) {
    // حفظ حالة الدخول
    localStorage.setItem('paradox_user', JSON.stringify({
      email: user.email,
      name: user.name,
      loggedIn: true,
      timestamp: Date.now()
    }));
    
    return { success: true, user: user };
  }
  
  return { success: false, message: 'البريد الإلكتروني أو كلمة المرور غير صحيحة' };
}

// دالة تسجيل الخروج
function logout() {
  localStorage.removeItem('paradox_user');
  window.location.href = 'login.html';
}

// التحقق من حالة الدخول
function checkAuth() {
  const user = localStorage.getItem('paradox_user');
  if (user) {
    return JSON.parse(user);
  }
  return null;
}

// إضافة هذه الدوال للكائن العام
window.paradox = {
  ...window.paradox,
  loadUserProfile,
  uploadReport,
  getUserReports,
  updateProfile,
  login,
  logout,
  checkAuth
};