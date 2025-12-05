// profile.js - دوال خاصة بالملف الشخصي فقط

// بيانات المستخدم (يمكن جلبها من localStorage أو API)
const userProfile = {
  name: "moaz",
  role: "عضو فريق الرصد البصري",
  email: "moaz@paradox.team",
  joinDate: "2024-03-15",
  bio: "مهتم برصد الكويكبات والمذنبات، عضو في فريق Paradox منذ 2024.",
  stats: {
    reports: 7,
    projects: 3,
    activityDays: 142,
    achievements: 3
  },
  skills: ["رصد بصري", "تحليل بيانات", "محاكاة"]
};

// تحميل بيانات الملف الشخصي
function loadProfileData() {
  const userData = JSON.parse(localStorage.getItem('paradox_user') || '{}');
  
  document.getElementById('userName').textContent = userData.name || userProfile.name;
  document.getElementById('userRole').textContent = userProfile.role;
  document.getElementById('userBio').textContent = userProfile.bio;
  document.getElementById('reportsCount').textContent = userProfile.stats.reports;
  document.getElementById('projectsCount').textContent = userProfile.stats.projects;
  document.getElementById('activityDays').textContent = userProfile.stats.activityDays;
  document.getElementById('memberSince').textContent = new Date(userProfile.joinDate).getFullYear();
  
  // تحميل التقارير والمشاريع الخاصة بالمستخدم
  loadUserReports();
  loadUserProjects();
}

// تحميل تقارير المستخدم
function loadUserReports() {
  // جلب بيانات من localStorage أو API
  const userReports = JSON.parse(localStorage.getItem('user_reports') || '[]');
  
  const reportsContainer = document.getElementById('userReports');
  if (reportsContainer) {
    if (userReports.length === 0) {
      reportsContainer.innerHTML = '<p class="muted">لا توجد تقارير منشورة بعد.</p>';
    } else {
      // عرض التقارير
    }
  }
}

// تحميل مشاريع المستخدم
function loadUserProjects() {
  // جلب بيانات من localStorage أو API
  const userProjects = JSON.parse(localStorage.getItem('user_projects') || '[]');
  
  const projectsContainer = document.getElementById('userProjects');
  if (projectsContainer) {
    if (userProjects.length === 0) {
      projectsContainer.innerHTML = '<p class="muted">لا توجد مشاريع مشارك فيها بعد.</p>';
    } else {
      // عرض المشاريع
    }
  }
}

// دالة تبديل التبويبات
function switchTab(tabName) {
  // إزالة النشط من جميع الأزرار
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // إخفاء جميع المحتويات
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  // تفعيل التبويب المحدد
  const tabBtn = document.querySelector(`[onclick="switchTab('${tabName}')"]`);
  const tabContent = document.getElementById(`tab-${tabName}`);
  
  if (tabBtn) tabBtn.classList.add('active');
  if (tabContent) tabContent.classList.add('active');
}

// حفظ التعديلات في الملف الشخصي
function saveProfileChanges() {
  const name = document.getElementById('editName')?.value;
  const bio = document.getElementById('editBio')?.value;
  const email = document.getElementById('editEmail')?.value;
  
  if (name && email) {
    // حفظ في localStorage (مؤقت)
    const userData = JSON.parse(localStorage.getItem('paradox_user') || '{}');
    userData.name = name;
    userData.email = email;
    userData.bio = bio || userData.bio;
    localStorage.setItem('paradox_user', JSON.stringify(userData));
    
    // تحديث العرض
    loadProfileData();
    
    // إظهار رسالة نجاح
    showNotification('تم تحديث الملف الشخصي بنجاح', 'success');
    return true;
  } else {
    showNotification('يرجى ملء الحقول المطلوبة', 'error');
    return false;
  }
}

// تغيير صورة الملف الشخصي
function changeProfileImage(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  if (file.size > 2 * 1024 * 1024) { // 2MB حد
    showNotification('حجم الصورة يجب أن يكون أقل من 2MB', 'error');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = function(e) {
    // حفظ في localStorage (مؤقت)
    const userData = JSON.parse(localStorage.getItem('paradox_user') || '{}');
    userData.avatar = e.target.result;
    localStorage.setItem('paradox_user', JSON.stringify(userData));
    
    // تحديث الصورة في الصفحة
    const avatarElement = document.querySelector('.profile-avatar');
    if (avatarElement) {
      avatarElement.style.backgroundImage = `url(${e.target.result})`;
    }
    
    showNotification('تم تحديث صورة الملف الشخصي', 'success');
  };
  
  reader.readAsDataURL(file);
}

// إظهار إشعارات
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <span>${message}</span>
    <button onclick="this.parentElement.remove()">×</button>
  `;
  
  // إضافة أنماط للإشعارات
  if (!document.querySelector('.notification-styles')) {
    const style = document.createElement('style');
    style.className = 'notification-styles';
    style.textContent = `
      .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 16px;
        border-radius: 8px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 300px;
        z-index: 1000;
        animation: slideIn 0.3s;
      }
      .notification-success { background: rgba(34, 197, 94, 0.9); }
      .notification-error { background: rgba(239, 68, 68, 0.9); }
      .notification-info { background: rgba(59, 130, 246, 0.9); }
      .notification button {
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        margin-left: 10px;
      }
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // إزالة الإشعار تلقائياً بعد 5 ثواني
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// تهيئة صفحة الملف الشخصي
function initProfilePage() {
  if (!checkAuth()) {
    window.location.href = 'login.html';
    return;
  }
  
  loadProfileData();
  
  // إضافة مستمع لزر حفظ التعديلات
  const saveBtn = document.getElementById('saveProfileBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', saveProfileChanges);
  }
  
  // إضافة مستمع لرفع الصورة
  const imageUpload = document.getElementById('profileImageUpload');
  if (imageUpload) {
    imageUpload.addEventListener('change', changeProfileImage);
  }
  
  // إعداد التبويب الأول كنشط افتراضياً
  switchTab('activity');
}

// تشغيل التهيئة عند تحميل الصفحة
if (window.location.pathname.includes('profile.html')) {
  window.addEventListener('DOMContentLoaded', initProfilePage);
}