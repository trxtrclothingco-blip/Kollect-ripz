/* ============================================
   KOLLECT VAULT - Global Styles
   Dark premium aesthetic for graded card packs
   ============================================ */

:root {
  --bg-primary: #0a0b0f;
  --bg-secondary: #12141c;
  --bg-card: #1a1d27;
  --bg-elevated: #222632;
  --border: #2a2f3d;
  --border-hover: #3d4455;
  --text-primary: #f0f2f5;
  --text-secondary: #9ca3af;
  --text-muted: #6b7280;
  --accent: #8b5cf6;
  --accent-hover: #7c3aed;
  --accent-glow: rgba(139, 92, 246, 0.35);
  --success: #10b981;
  --success-bg: rgba(16, 185, 129, 0.12);
  --warning: #f59e0b;
  --warning-bg: rgba(245, 158, 11, 0.12);
  --danger: #ef4444;
  --danger-bg: rgba(239, 68, 68, 0.12);
  --grade-10: #fbbf24;
  --grade-9: #94a3b8;
  --radius: 12px;
  --radius-sm: 8px;
  --shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font);
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  min-height: 100vh;
}

h1, h2, h3, h4 {
  font-weight: 700;
  letter-spacing: -0.02em;
}

a {
  color: var(--accent);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: var(--accent-hover);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page {
  display: none;
  min-height: calc(100vh - 70px);
  padding: 32px 0 80px;
}

.page.active {
  display: block;
}

/* Navigation */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 11, 15, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  height: 70px;
  display: flex;
  align-items: center;
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.03em;
}

.logo span {
  background: linear-gradient(135deg, var(--accent), #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
}

.nav-links a {
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9rem;
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  transition: all 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--text-primary);
  background: var(--bg-elevated);
}

.nav-links .btn {
  margin-left: 8px;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 22px;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
  white-space: nowrap;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent), #7c3aed);
  color: white;
  box-shadow: 0 4px 16px var(--accent-glow);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 24px var(--accent-glow);
}

.btn-secondary {
  background: var(--bg-elevated);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  border-color: var(--border-hover);
  background: var(--bg-card);
}

.btn-success {
  background: var(--success);
  color: white;
}

.btn-success:hover {
  filter: brightness(1.1);
}

.btn-danger {
  background: var(--danger);
  color: white;
}

.btn-outline {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
}

.btn-outline:hover {
  background: var(--accent);
  color: white;
}

.btn-sm {
  padding: 8px 14px;
  font-size: 0.85rem;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 1.1rem;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

/* Cards & Panels */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.card:hover {
  border-color: var(--border-hover);
}

.card-glow:hover {
  box-shadow: 0 0 30px var(--accent-glow);
}

/* Forms */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 8px;
}

.form-control {
  width: 100%;
  padding: 12px 16px;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color 0.2s;
}

.form-control:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.form-control::placeholder {
  color: var(--text-muted);
}

select.form-control {
  cursor: pointer;
}

textarea.form-control {
  resize: vertical;
  min-height: 100px;
}

/* Grid */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media (max-width: 900px) {
  .grid-3, .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid-2, .grid-3, .grid-4 {
    grid-template-columns: 1fr;
  }
  .nav-links {
    display: none;
  }
}

/* Hero */
.hero {
  text-align: center;
  padding: 60px 0 40px;
}

.hero h1 {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  margin-bottom: 16px;
  background: linear-gradient(135deg, #fff 30%, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 1.15rem;
  color: var(--text-secondary);
  max-width: 560px;
  margin: 0 auto 32px;
}

/* Pack Card */
.pack-card {
  background: linear-gradient(160deg, var(--bg-card) 0%, #1e1a2e 100%);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.pack-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), #c084fc, var(--accent));
}

.pack-price {
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 12px 0;
}

.pack-price small {
  font-size: 1.2rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.pack-features {
  list-style: none;
  text-align: left;
  margin: 24px 0;
}

.pack-features li {
  padding: 8px 0;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 10px;
}

.pack-features li::before {
  content: '✓';
  color: var(--success);
  font-weight: 700;
}

/* Grade Badges */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.badge-grade-10 {
  background: rgba(251, 191, 36, 0.15);
  color: var(--grade-10);
  border: 1px solid rgba(251, 191, 36, 0.3);
}

.badge-grade-9 {
  background: rgba(148, 163, 184, 0.15);
  color: var(--grade-9);
  border: 1px solid rgba(148, 163, 184, 0.3);
}

.badge-active {
  background: var(--success-bg);
  color: var(--success);
}

.badge-sold {
  background: var(--danger-bg);
  color: var(--danger);
}

.badge-pulled {
  background: var(--warning-bg);
  color: var(--warning);
}

/* Card Item */
.card-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s;
}

.card-item:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.card-item-img {
  width: 100%;
  aspect-ratio: 2.5 / 3.5;
  object-fit: cover;
  background: var(--bg-secondary);
}

.card-item-body {
  padding: 14px;
}

.card-item-name {
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-item-meta {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 10px;
}

.card-item-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* Recent Pulls */
.pulls-feed {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.pull-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 18px;
}

.pull-item img {
  width: 56px;
  height: 78px;
  object-fit: cover;
  border-radius: 6px;
  background: var(--bg-secondary);
}

.pull-item-info {
  flex: 1;
  min-width: 0;
}

.pull-item-name {
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pull-item-time {
  font-size: 0.8rem;
  color: var(--text-muted);
}

/* Reveal Overlay */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 200;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.overlay.active {
  display: flex;
}

.reveal-container {
  text-align: center;
  max-width: 420px;
  width: 100%;
}

.reveal-video {
  width: 100%;
  max-width: 360px;
  border-radius: var(--radius);
  margin-bottom: 24px;
  background: #000;
}

.reveal-card {
  background: var(--bg-card);
  border: 2px solid var(--accent);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 0 60px var(--accent-glow);
  animation: revealPop 0.5s ease-out;
}

@keyframes revealPop {
  0% { transform: scale(0.7); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.reveal-card img {
  width: 200px;
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
}

.reveal-card h2 {
  margin-bottom: 8px;
}

/* Modal */
.modal {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px;
  max-width: 480px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.5rem;
  cursor: pointer;
  line-height: 1;
}

.modal h2 {
  margin-bottom: 20px;
}

/* Auth */
.auth-box {
  max-width: 420px;
  margin: 40px auto;
}

.auth-tabs {
  display: flex;
  gap: 0;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.auth-tab {
  flex: 1;
  padding: 12px;
  text-align: center;
  background: none;
  border: none;
  color: var(--text-muted);
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.auth-tab.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

/* Stats */
.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  text-align: center;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-primary);
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 4px;
}

/* Admin Table */
.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

th, td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

th {
  background: var(--bg-elevated);
  font-weight: 600;
  color: var(--text-secondary);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

tr:last-child td {
  border-bottom: none;
}

tr:hover td {
  background: rgba(255,255,255,0.02);
}

table img {
  width: 40px;
  height: 56px;
  object-fit: cover;
  border-radius: 4px;
}

/* Toast */
.toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 300;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toast {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 14px 20px;
  box-shadow: var(--shadow);
  animation: slideIn 0.3s ease;
  max-width: 340px;
  font-size: 0.9rem;
}

.toast.success { border-left: 3px solid var(--success); }
.toast.error { border-left: 3px solid var(--danger); }
.toast.info { border-left: 3px solid var(--accent); }

@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* Loading */
.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 40px auto;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 11, 15, 0.8);
  z-index: 250;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
}

.loading-overlay.active {
  display: flex;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-muted);
}

.empty-state h3 {
  color: var(--text-secondary);
  margin-bottom: 8px;
}

/* Section Headers */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

.section-header h2 {
  font-size: 1.5rem;
}

/* Utility */
.text-muted { color: var(--text-muted); }
.text-secondary { color: var(--text-secondary); }
.text-success { color: var(--success); }
.text-warning { color: var(--warning); }
.text-danger { color: var(--danger); }
.mt-1 { margin-top: 8px; }
.mt-2 { margin-top: 16px; }
.mt-3 { margin-top: 24px; }
.mb-2 { margin-bottom: 16px; }
.mb-3 { margin-bottom: 24px; }
.flex { display: flex; }
.gap-2 { gap: 12px; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.hidden { display: none !important; }
.text-center { text-align: center; }
.w-full { width: 100%; }

/* Odds */
.odds-box {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  margin-top: 24px;
}

.odds-box h4 {
  margin-bottom: 12px;
}

.odds-bar {
  height: 12px;
  border-radius: 6px;
  background: var(--bg-elevated);
  overflow: hidden;
  display: flex;
  margin-bottom: 8px;
}

.odds-bar .grade-10-bar {
  background: var(--grade-10);
  height: 100%;
}

.odds-bar .grade-9-bar {
  background: var(--grade-9);
  height: 100%;
}

.buyback-price {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--success);
}

.img-preview {
  width: 120px;
  height: 168px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-secondary);
  margin-top: 8px;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  .nav-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    border-bottom: 1px solid var(--border);
    padding: 16px;
    gap: 4px;
  }
}

 * Kollect Vault — Main Application Logic
 * Firebase Auth + Firestore + Cloudinary
 */

(function () {
  'use strict';

  const { auth, db, CLOUDINARY, BUYBACK_PERCENT, PACK_PRICE, ADMIN_UIDS } = window.KollectConfig;

  // ---------- State ----------
  let currentUser = null;
  let isAdmin = false;
  let activeInventory = [];
  let lastPulledCard = null;

  // ---------- DOM Helpers ----------
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function showToast(msg, type = 'info') {
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.textContent = msg;
    $('#toastContainer').appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }

  function showLoading(show) {
    $('#loadingOverlay').classList.toggle('active', !!show);
  }

  function navigate(page) {
    $$('.page').forEach(p => p.classList.remove('active'));
    const target = $(`#page-${page}`);
    if (target) target.classList.add('active');

    $$('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.dataset.page === page);
    });

    $('#navLinks').classList.remove('open');

    if (page === 'buy') loadBuyOdds();
    if (page === 'pulls') loadRecentPulls();
    if (page === 'collection') loadCollection();
    if (page === 'admin') {
      if (!isAdmin) {
        showToast('Admin access required', 'error');
        navigate('home');
        return;
      }
      loadAdmin();
    }
    if (page === 'home') loadHomeOdds();
  }

  // ---------- Auth UI ----------
  function updateAuthUI(user) {
    currentUser = user;
    isAdmin = false;

    if (user) {
      $('#navAuth').classList.add('hidden');
      $('#navUser').classList.remove('hidden');
      $('#navCollection').classList.remove('hidden');
      $('#userEmail').textContent = user.email;

      const uid = user.uid;
      if (ADMIN_UIDS.includes(uid)) {
        isAdmin = true;
        $('#navAdmin').classList.remove('hidden');
      } else {
        db.collection('users').doc(uid).get().then(snap => {
          if (snap.exists && snap.data().role === 'admin') {
            isAdmin = true;
            $('#navAdmin').classList.remove('hidden');
          }
        });
      }
    } else {
      $('#navAuth').classList.remove('hidden');
      $('#navUser').classList.add('hidden');
      $('#navCollection').classList.add('hidden');
      $('#navAdmin').classList.add('hidden');
    }
  }

  // ---------- Auth Forms ----------
  $('#formLogin').addEventListener('submit', async (e) => {
    e.preventDefault();
    showLoading(true);
    try {
      await auth.signInWithEmailAndPassword(
        $('#loginEmail').value.trim(),
        $('#loginPassword').value
      );
      showToast('Welcome back!', 'success');
      navigate('home');
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      showLoading(false);
    }
  });

  $('#formRegister').addEventListener('submit', async (e) => {
    e.preventDefault();
    showLoading(true);
    try {
      const cred = await auth.createUserWithEmailAndPassword(
        $('#regEmail').value.trim(),
        $('#regPassword').value
      );
      await cred.user.updateProfile({ displayName: $('#regName').value.trim() });
      await db.collection('users').doc(cred.user.uid).set({
        email: cred.user.email,
        displayName: $('#regName').value.trim(),
        role: 'customer',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      showToast('Account created!', 'success');
      navigate('home');
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      showLoading(false);
    }
  });

  $('#btnLogout').addEventListener('click', () => auth.signOut());

  $$('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      $$('.auth-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const isLogin = tab.dataset.tab === 'login';
      $('#formLogin').classList.toggle('hidden', !isLogin);
      $('#formRegister').classList.toggle('hidden', isLogin);
    });
  });

  // ---------- Navigation ----------
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-page]');
    if (link) {
      e.preventDefault();
      const page = link.dataset.page;
      if ((page === 'collection' || page === 'buy') && !currentUser) {
        showToast('Please sign in first', 'info');
        navigate('auth');
        return;
      }
      navigate(page);
    }
  });

  $('#menuToggle').addEventListener('click', () => {
    $('#navLinks').classList.toggle('open');
  });

  // ---------- Inventory Helpers ----------
  async function getActiveCards() {
    const snap = await db.collection('inventory')
      .where('status', '==', 'active')
      .get();
    activeInventory = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    return activeInventory;
  }

  function calcOdds(cards) {
    if (!cards.length) return { g10: 0, g9: 0, total: 0 };
    const g10 = cards.filter(c => Number(c.grade) === 10).length;
    const g9 = cards.filter(c => Number(c.grade) === 9).length;
    const total = cards.length;
    return {
      g10,
      g9,
      total,
      g10Pct: Math.round((g10 / total) * 100),
      g9Pct: Math.round((g9 / total) * 100)
    };
  }

  async function loadHomeOdds() {
    try {
      const cards = await getActiveCards();
      const odds = calcOdds(cards);
      if (odds.total === 0) {
        $('#homeG10Pct').textContent = 'No stock';
        $('#homeG9Pct').textContent = '';
        return;
      }
      $('#homeOddsBar .grade-10-bar').style.width = odds.g10Pct + '%';
      $('#homeOddsBar .grade-9-bar').style.width = odds.g9Pct + '%';
      $('#homeG10Pct').textContent = `${odds.g10Pct}% (${odds.g10})`;
      $('#homeG9Pct').textContent = `${odds.g9Pct}% (${odds.g9})`;
    } catch (e) {
      console.warn('Odds load failed', e);
    }
  }

  async function loadBuyOdds() {
    const el = $('#buyOddsContent');
    try {
      const cards = await getActiveCards();
      const odds = calcOdds(cards);
      if (odds.total === 0) {
        el.innerHTML = `<p class="text-warning">No active cards in the vault right now. Check back soon.</p>`;
        $('#btnBuyPack').disabled = true;
        return;
      }
      $('#btnBuyPack').disabled = false;
      el.innerHTML = `
        <div class="odds-bar mb-2">
          <div class="grade-10-bar" style="width:${odds.g10Pct}%"></div>
          <div class="grade-9-bar" style="width:${odds.g9Pct}%"></div>
        </div>
        <div class="flex justify-between mb-2" style="font-size:0.9rem">
          <span><span class="badge badge-grade-10">Grade 10</span> ${odds.g10Pct}% · ${odds.g10} cards</span>
          <span><span class="badge badge-grade-9">Grade 9</span> ${odds.g9Pct}% · ${odds.g9} cards</span>
        </div>
        <p class="text-muted" style="font-size:0.85rem">${odds.total} cards currently available in the vault.</p>
      `;
    } catch (e) {
      el.innerHTML = `<p class="text-danger">Could not load inventory.</p>`;
    }
  }

  // ---------- Purchase Flow ----------
  $('#btnBuyPack').addEventListener('click', async () => {
    if (!currentUser) {
      showToast('Please sign in to buy a pack', 'info');
      navigate('auth');
      return;
    }

    const confirmed = confirm(`Confirm purchase of 1 Kollect Vault Pack for £${PACK_PRICE}?`);
    if (!confirmed) return;

    showLoading(true);
    try {
      const cards = await getActiveCards();
      if (!cards.length) {
        showToast('Sorry, the vault is empty right now.', 'error');
        return;
      }

      const pick = cards[Math.floor(Math.random() * cards.length)];
      const marketAtOpen = Number(pick.marketValue) || 0;
      const buybackLocked = Math.round(marketAtOpen * BUYBACK_PERCENT * 100) / 100;

      const cardRef = db.collection('inventory').doc(pick.id);
      const result = await db.runTransaction(async (tx) => {
        const snap = await tx.get(cardRef);
        if (!snap.exists || snap.data().status !== 'active') {
          throw new Error('Card already taken — please try again');
        }
        tx.update(cardRef, {
          status: 'pulled',
          pulledBy: currentUser.uid,
          pulledAt: firebase.firestore.FieldValue.serverTimestamp(),
          marketAtOpen,
          buybackLocked
        });
        return { ...snap.data(), id: snap.id, marketAtOpen, buybackLocked };
      });

      await db.collection('pulls').add({
        cardId: result.id,
        name: result.name,
        set: result.set || '',
        grade: result.grade,
        grader: result.grader,
        imageUrl: result.imageUrl,
        marketAtOpen,
        buybackLocked,
        pulledAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      await db.collection('sales').add({
        userId: currentUser.uid,
        cardId: result.id,
        packPrice: PACK_PRICE,
        cost: result.cost || 16,
        marketAtOpen,
        buybackLocked,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      await db.collection('users').doc(currentUser.uid)
        .collection('collection').doc(result.id).set({
          cardId: result.id,
          name: result.name,
          set: result.set || '',
          grade: result.grade,
          grader: result.grader,
          cert: result.cert || '',
          imageUrl: result.imageUrl,
          marketAtOpen,
          buybackLocked,
          status: 'owned',
          pulledAt: firebase.firestore.FieldValue.serverTimestamp()
        });

      lastPulledCard = result;
      showLoading(false);
      startReveal(result);
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Purchase failed', 'error');
      showLoading(false);
    }
  });

  // ---------- Reveal Animation ----------
  function startReveal(card) {
    const overlay = $('#revealOverlay');
    const anim = $('#revealAnim');
    const result = $('#revealResult');

    overlay.classList.add('active');
    anim.classList.remove('hidden');
    result.classList.add('hidden');

    const gradeText = $('#revealGradeText');
    gradeText.textContent = 'Opening pack...';

    setTimeout(() => {
      gradeText.textContent = 'Determining grade...';
    }, 800);

    setTimeout(() => {
      gradeText.innerHTML = `It's a <span class="badge badge-grade-${card.grade}">Grade ${card.grade}</span>!`;
    }, 1800);

    setTimeout(() => {
      anim.classList.add('hidden');
      result.classList.remove('hidden');

      $('#revealImg').src = card.imageUrl;
      $('#revealName').textContent = card.name;
      $('#revealMeta').textContent = `${card.grader} ${card.grade} · ${card.set || 'Unknown set'}`;
      $('#revealBadge').className = `badge badge-grade-${card.grade}`;
      $('#revealBadge').textContent = `${card.grader} ${card.grade}`;
      $('#revealBuyback').textContent = `£${Number(card.buybackLocked).toFixed(2)}`;
    }, 2800);
  }

  $('#btnKeepCard').addEventListener('click', () => {
    $('#revealOverlay').classList.remove('active');
    showToast('Card added to your collection!', 'success');
    navigate('collection');
  });

  $('#btnTakeBuyback').addEventListener('click', async () => {
    if (!lastPulledCard) return;
    const ok = confirm(`Accept locked cash buyback of £${Number(lastPulledCard.buybackLocked).toFixed(2)}?`);
    if (!ok) return;
    showLoading(true);
    try {
      await processBuyback(lastPulledCard.id, lastPulledCard.buybackLocked);
      $('#revealOverlay').classList.remove('active');
      showToast(`Buyback of £${Number(lastPulledCard.buybackLocked).toFixed(2)} recorded. We’ll process payment shortly.`, 'success');
      navigate('collection');
    } catch (e) {
      showToast(e.message, 'error');
    } finally {
      showLoading(false);
    }
  });

  $('#btnConsign').addEventListener('click', async () => {
    if (!lastPulledCard) return;
    showLoading(true);
    try {
      await processConsign(lastPulledCard.id);
      $('#revealOverlay').classList.remove('active');
      showToast('Card transferred to Kollect consignment. You’ll receive further instructions by email.', 'success');
      navigate('collection');
    } catch (e) {
      showToast(e.message, 'error');
    } finally {
      showLoading(false);
    }
  });

  // ---------- Buyback / Consign helpers ----------
  async function processBuyback(cardId, amount) {
    const batch = db.batch();
    const invRef = db.collection('inventory').doc(cardId);
    const userCardRef = db.collection('users').doc(currentUser.uid)
      .collection('collection').doc(cardId);

    batch.update(invRef, {
      status: 'buyback',
      buybackAt: firebase.firestore.FieldValue.serverTimestamp(),
      buybackAmount: amount
    });
    batch.update(userCardRef, {
      status: 'buyback',
      buybackAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    batch.set(db.collection('buybacks').doc(), {
      userId: currentUser.uid,
      cardId,
      amount,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      paid: false
    });
    await batch.commit();
  }

  async function processConsign(cardId) {
    const batch = db.batch();
    const invRef = db.collection('inventory').doc(cardId);
    const userCardRef = db.collection('users').doc(currentUser.uid)
      .collection('collection').doc(cardId);

    batch.update(invRef, {
      status: 'consigned',
      consignedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    batch.update(userCardRef, {
      status: 'consigned',
      consignedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    batch.set(db.collection('consignments').doc(), {
      userId: currentUser.uid,
      cardId,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      status: 'pending'
    });
    await batch.commit();
  }

  // ---------- Recent Pulls ----------
  async function loadRecentPulls() {
    const el = $('#pullsFeed');
    try {
      const snap = await db.collection('pulls')
        .orderBy('pulledAt', 'desc')
        .limit(40)
        .get();

      if (snap.empty) {
        el.innerHTML = `<div class="empty-state"><h3>No pulls yet</h3><p>Be the first to open a pack!</p></div>`;
        return;
      }

      el.innerHTML = snap.docs.map(d => {
        const p = d.data();
        const time = p.pulledAt?.toDate ? p.pulledAt.toDate().toLocaleString('en-GB') : 'Just now';
        return `
          <div class="pull-item">
            <img src="${p.imageUrl}" alt="${p.name}" loading="lazy" />
            <div class="pull-item-info">
              <div class="pull-item-name">${escapeHtml(p.name)}</div>
              <div class="pull-item-time">
                <span class="badge badge-grade-${p.grade}">${p.grader || ''} ${p.grade}</span>
                · ${time}
              </div>
            </div>
            <div class="text-muted" style="font-size:0.85rem">£${Number(p.marketAtOpen || 0).toFixed(0)} mkt</div>
          </div>
        `;
      }).join('');
    } catch (e) {
      console.error(e);
      el.innerHTML = `<p class="text-danger">Could not load pulls.</p>`;
    }
  }

  // ---------- My Collection ----------
  async function loadCollection() {
    const el = $('#collectionGrid');
    if (!currentUser) {
      el.innerHTML = `<div class="empty-state"><h3>Sign in to view your collection</h3></div>`;
      return;
    }
    try {
      const snap = await db.collection('users').doc(currentUser.uid)
        .collection('collection')
        .orderBy('pulledAt', 'desc')
        .get();

      if (snap.empty) {
        el.innerHTML = `
          <div class="empty-state" style="grid-column:1/-1">
            <h3>No cards yet</h3>
            <p>Open a pack to start your collection.</p>
            <button class="btn btn-primary mt-2" data-page="buy">Buy a Pack</button>
          </div>`;
        return;
      }

      el.innerHTML = snap.docs.map(d => {
        const c = d.data();
        const statusBadge = {
          owned: '<span class="badge badge-active">Owned</span>',
          buyback: '<span class="badge badge-sold">Buyback Taken</span>',
          consigned: '<span class="badge badge-pulled">Consigned</span>'
        }[c.status] || '';

        const actions = c.status === 'owned' ? `
          <button class="btn btn-success btn-sm" data-action="buyback" data-id="${d.id}" data-amount="${c.buybackLocked}">
            Cash £${Number(c.buybackLocked).toFixed(2)}
          </button>
          <button class="btn btn-primary btn-sm" data-action="consign" data-id="${d.id}">
            Sell with Kollect
          </button>
        ` : '';

        return `
          <div class="card-item">
            <img class="card-item-img" src="${c.imageUrl}" alt="${escapeHtml(c.name)}" loading="lazy" />
            <div class="card-item-body">
              <div class="card-item-name">${escapeHtml(c.name)}</div>
              <div class="card-item-meta">
                <span class="badge badge-grade-${c.grade}">${c.grader} ${c.grade}</span>
                ${statusBadge}
              </div>
              <div class="text-muted" style="font-size:0.8rem;margin-bottom:8px">
                Locked buyback: £${Number(c.buybackLocked).toFixed(2)}
              </div>
              <div class="card-item-actions">${actions}</div>
            </div>
          </div>
        `;
      }).join('');

      el.querySelectorAll('[data-action]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.dataset.id;
          const action = btn.dataset.action;
          if (action === 'buyback') {
            const amount = Number(btn.dataset.amount);
            if (!confirm(`Accept locked cash buyback of £${amount.toFixed(2)}?`)) return;
            showLoading(true);
            try {
              await processBuyback(id, amount);
              showToast('Buyback recorded', 'success');
              loadCollection();
            } catch (e) {
              showToast(e.message, 'error');
            } finally {
              showLoading(false);
            }
          }
          if (action === 'consign') {
            if (!confirm('Transfer this card to Kollect consignment?')) return;
            showLoading(true);
            try {
              await processConsign(id);
              showToast('Transferred to consignment', 'success');
              loadCollection();
            } catch (e) {
              showToast(e.message, 'error');
            } finally {
              showLoading(false);
            }
          }
        });
      });
    } catch (e) {
      console.error(e);
      el.innerHTML = `<p class="text-danger">Could not load collection.</p>`;
    }
  }

  // ---------- Admin ----------
  let uploadedImageUrl = '';

  $('#btnCloudinary').addEventListener('click', () => {
    if (!CLOUDINARY.cloudName || CLOUDINARY.cloudName.includes('YOUR_')) {
      showToast('Set your Cloudinary cloud name in firebase-config.js', 'error');
      return;
    }
    cloudinary.openUploadWidget(
      {
        cloudName: CLOUDINARY.cloudName,
        uploadPreset: CLOUDINARY.uploadPreset,
        sources: ['local', 'url', 'camera'],
        multiple: false,
        maxFileSize: 5000000,
        clientAllowedFormats: ['jpg', 'jpeg', 'png', 'webp'],
        folder: 'kollect-vault'
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          uploadedImageUrl = result.info.secure_url;
          $('#cardImageUrl').value = uploadedImageUrl;
          $('#cardImgPreview').src = uploadedImageUrl;
          $('#cardImgPreview').classList.remove('hidden');
          $('#uploadStatus').textContent = 'Image uploaded ✓';
          showToast('Image uploaded', 'success');
        }
      }
    );
  });

  $('#formUploadCard').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!isAdmin) return;

    const imageUrl = $('#cardImageUrl').value || uploadedImageUrl;
    if (!imageUrl) {
      showToast('Please upload a card image', 'error');
      return;
    }

    showLoading(true);
    try {
      await db.collection('inventory').add({
        name: $('#cardName').value.trim(),
        set: $('#cardSet').value.trim(),
        grade: Number($('#cardGrade').value),
        grader: $('#cardGrader').value,
        cert: $('#cardCert').value.trim(),
        cost: Number($('#cardCost').value),
        marketValue: Number($('#cardMarket').value),
        tcgPlayerId: $('#cardTcgId').value.trim() || null,
        imageUrl,
        status: 'active',
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        createdBy: currentUser.uid
      });

      showToast('Card added to inventory', 'success');
      e.target.reset();
      $('#cardImgPreview').classList.add('hidden');
      $('#uploadStatus').textContent = 'No image selected';
      uploadedImageUrl = '';
      loadAdmin();
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      showLoading(false);
    }
  });

  async function loadAdmin() {
    try {
      const [invSnap, salesSnap, pullsSnap] = await Promise.all([
        db.collection('inventory').get(),
        db.collection('sales').get(),
        db.collection('pulls').get()
      ]);

      const all = invSnap.docs.map(d => d.data());
      const active = all.filter(c => c.status === 'active').length;
      const pulled = pullsSnap.size;
      let revenue = 0;
      let totalCost = 0;
      salesSnap.forEach(d => {
        const s = d.data();
        revenue += s.packPrice || PACK_PRICE;
        totalCost += s.cost || 16;
      });
      const margin = revenue - totalCost;

      $('#statActive').textContent = active;
      $('#statPulled').textContent = pulled;
      $('#statRevenue').textContent = '£' + revenue.toFixed(0);
      $('#statMargin').textContent = '£' + margin.toFixed(0);
    } catch (e) {
      console.warn(e);
    }

    const filter = $('#filterStatus').value;
    let query = db.collection('inventory').orderBy('createdAt', 'desc');
    try {
      const snap = await query.get();
      let rows = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      if (filter !== 'all') rows = rows.filter(r => r.status === filter);

      const tbody = $('#inventoryTable');
      if (!rows.length) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted">No cards match.</td></tr>`;
        return;
      }

      tbody.innerHTML = rows.map(c => `
        <tr>
          <td><img src="${c.imageUrl}" alt="" /></td>
          <td>
            <strong>${escapeHtml(c.name)}</strong><br>
            <span class="text-muted" style="font-size:0.8rem">${escapeHtml(c.set || '')}</span>
          </td>
          <td><span class="badge badge-grade-${c.grade}">${c.grader} ${c.grade}</span></td>
          <td>£${Number(c.cost).toFixed(2)}</td>
          <td>£${Number(c.marketValue).toFixed(2)}</td>
          <td><span class="badge badge-${c.status === 'active' ? 'active' : c.status === 'pulled' ? 'pulled' : 'sold'}">${c.status}</span></td>
          <td>
            ${c.status === 'active' ? `<button class="btn btn-danger btn-sm" data-del="${c.id}">Remove</button>` : '—'}
          </td>
        </tr>
      `).join('');

      tbody.querySelectorAll('[data-del]').forEach(btn => {
        btn.addEventListener('click', async () => {
          if (!confirm('Remove this card from inventory?')) return;
          await db.collection('inventory').doc(btn.dataset.del).delete();
          showToast('Card removed', 'success');
          loadAdmin();
        });
      });
    } catch (e) {
      console.error(e);
      $('#inventoryTable').innerHTML = `<tr><td colspan="7" class="text-danger">Load failed. Check Firestore indexes / rules.</td></tr>`;
    }
  }

  $('#filterStatus').addEventListener('change', loadAdmin);

  $('#modalClose').addEventListener('click', () => {
    $('#actionModal').classList.remove('active');
  });

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  auth.onAuthStateChanged((user) => {
    updateAuthUI(user);
    if ($('#page-home').classList.contains('active')) loadHomeOdds();
  });

  loadHomeOdds();
})();
