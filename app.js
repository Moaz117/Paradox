// Enhanced sample data and UI helpers for Paradox site
const sampleAsteroids = [
  { id: '2025AB', name: '2025 AB', diameter: '120 m', hazard: 'آمن', classification: 'NEO', distance_km: 1500000, discovery_date: '2025-01-12' },
  { id: '99942', name: 'Apophis', diameter: '370 m', hazard: 'مراقب', classification: 'PHA', distance_km: 384000, discovery_date: '2004-06-19' },
  { id: '2001FO32', name: '2001 FO32', diameter: '1 km', hazard: 'منخفض', classification: 'NEO', distance_km: 7200000, discovery_date: '2001-03-21' },
  { id: '2024XY', name: '2024 XY', diameter: '540 m', hazard: 'منخفض', classification: 'PHA', distance_km: 220000, discovery_date: '2024-11-02' }
];

const sampleTeams = [
  { title: 'الرصد البصري', desc: 'شبكة تلسكوبات وملاحظات' },
  { title: 'تحليل المدارات', desc: 'نمذجة ومحاكاة الاصطدام' },
  { title: 'المحاكاة', desc: 'اختبار السيناريوهات' },
  { title: 'التوعية', desc: 'مقالات ومحاضرات' },
];

const sampleProjects = [
  { title: 'بناء مرصد متنقل', progress: 65 },
  { title: 'محاكاة اصطدام', progress: 42 },
  { title: 'أنظمة فرز الصور', progress: 78 },
  { title: 'نظام تتبع آلي', progress: 30 }
];

const sampleReports = [
  { title: 'تقرير شهرى - أكتوبر', excerpt: 'ملخص الاكتشافات الأخيرة...' },
  { title: 'محاكاة مدار - مشروع X', excerpt: 'نتائج المحاكاة والرؤى...' },
  { title: 'دليل المرصد المتنقل', excerpt: 'بناء وتجهيز مرصد منخفض التكلفة...' },
];

function el(tag, cls, inner){
  const e = document.createElement(tag);
  if(cls) e.className = cls;
  if(inner !== undefined) e.innerHTML = inner;
  return e;
}

function renderAsteroids(){
  const root = document.getElementById('asteroidList');
  if(!root) return;
  root.innerHTML = '';
  sampleAsteroids.forEach(a => {
    const card = el('div','card asteroid');
    card.innerHTML = `
      <div class="asteroid-meta">
        <div>
          <div style="font-weight:700">${a.name}</div>
          <div class="small">ID: ${a.id}</div>
        </div>
        <div class="small">${a.hazard}</div>
      </div>
      <div class="small" style="margin-top:8px">قطر تقريبي: ${a.diameter}</div>
      <div style="margin-top:10px;display:flex;gap:8px">
        <a class="btn" href="asteroid-details.html?id=${encodeURIComponent(a.id)}">عرض التفاصيل</a>
        <button class="btn primary" onclick="track('${a.id}')">تتبع</button>
      </div>
    `;
    root.appendChild(card);
  });
}

function renderTeams(){
  const root = document.getElementById('teamsGrid') || document.getElementById('teamsList');
  if(!root) return;
  root.innerHTML = '';
  sampleTeams.forEach(t => {
    const card = el('div','card');
    card.innerHTML = `<div style="font-weight:700">${t.title}</div><div class="small" style="margin-top:6px">${t.desc}</div>
      <div style="margin-top:10px"><button class="btn" onclick="alert('عرض المهام: ${t.title}')">عرض المهام</button></div>`;
    root.appendChild(card);
  });
}

function renderProjects(){
  const root = document.getElementById('projectsGrid');
  if(!root) return;
  root.innerHTML = '';
  sampleProjects.forEach(p => {
    const card = el('div','card');
    card.innerHTML = `<div style="display:flex;justify-content:space-between"><div style="font-weight:700">${p.title}</div><div class="small">${p.progress}%</div></div>
      <div style="margin-top:8px;height:8px;background:#061021;border-radius:8px;overflow:hidden">
        <div style="width:${p.progress}%;height:100%;background:linear-gradient(90deg, var(--accent), var(--accent-2))"></div>
      </div>`;
    root.appendChild(card);
  });
}

function renderReports(){
  const root = document.getElementById('reportsGrid');
  if(!root) return;
  root.innerHTML = '';
  sampleReports.forEach(r => {
    const card = el('div','card');
    card.innerHTML = `<div style="font-weight:700">${r.title}</div><div class="small" style="margin-top:8px">${r.excerpt}</div>
      <div style="margin-top:10px"><button class="btn" onclick="alert('تحميل ${r.title}')">تحميل PDF</button></div>`;
    root.appendChild(card);
  });
}

function renderDashboardStats(){
  const ca = document.getElementById('countAsteroids');
  const cp = document.getElementById('countProjects');
  const cr = document.getElementById('countReports');
  if(ca) ca.textContent = sampleAsteroids.length;
  if(cp) cp.textContent = sampleProjects.length;
  if(cr) cr.textContent = sampleReports.length;
  const root = document.getElementById('dashboardAsteroids');
  if(root){
    root.innerHTML='';
    sampleAsteroids.forEach(a=>{
      const card = el('div','card small');
      card.innerHTML = `<strong>${a.name}</strong><br><span>${a.diameter}</span><br><a class="btn" href="asteroid-details.html?id=${encodeURIComponent(a.id)}">تفاصيل</a>`;
      root.appendChild(card);
    });
  }
}

function track(id){
  alert('بدء تتبع ' + id);
}

function initCommon(){
  // insert year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
  renderAsteroids();
  renderTeams();
  renderProjects();
  renderReports();
  renderDashboardStats();
  // footer social links dynamic (if present)
  const fb = document.querySelectorAll('[data-social="facebook"]');
  fb.forEach(el=>el.href = 'https://www.facebook.com/Paradox2026/');
  const li = document.querySelectorAll('[data-social="linkedin"]');
  li.forEach(el=>el.href = 'https://www.linkedin.com/company/paradox2024');
}

window.addEventListener('DOMContentLoaded', initCommon);
