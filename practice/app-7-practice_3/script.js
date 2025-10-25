
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const content = document.getElementById('content');

  const state = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    route: window.location.hash || '#/about'
  };

  const routes = {
    '#/about': {
      template: `
        <div class="about-page">
          <h2>🌸 歡迎來到可愛會員系統！</h2>
          <p>這是公開頁面，人人都可以看喔 💕</p>
        </div>
      `
    },
    '#/login': {
      template: `
        <div class="login-page">
          <div class="login-card">
            <h2>🐻 會員登入</h2>
            <input id="username" placeholder="帳號（cuteuser）" />
            <input id="password" type="password" placeholder="密碼（1234）" />
            <button id="login-btn">登入</button>
            <p id="error-msg" class="error-msg" style="display: none;">帳號或密碼錯誤💔</p>
          </div>
        </div>
      `
    },
    '#/profile': {
      template: `
        <div class="profile-page">
          <div class="profile-card">
            <h2>🎀 哈囉，${state.user?.username}！</h2>
            <p>這是你的可愛個人頁 💖</p>
            <p>登入 Token：${state.user?.token}</p>
          </div>
        </div>
      `,
      requiresAuth: true
    }
  };

  function renderNavbar() {
    const isAuth = !!state.user;
    navbar.innerHTML = `
      <nav class="navbar">
        <a href="#/about" class="nav-link">🏡 關於</a>
        ${!isAuth ? '<a href="#/login" class="nav-link">🔐 登入</a>' : ''}
        ${isAuth ? '<a href="#/profile" class="nav-link">🐰 我的頁面</a>' : ''}
        ${isAuth ? '<button id="logout-btn" class="logout-btn">登出</button>' : ''}
      </nav>
    `;
  }

  function renderContent() {
    const route = routes[state.route];
    if (route) {
      if (route.requiresAuth && !state.user) {
        window.location.hash = '#/login';
        return;
      }
      content.innerHTML = route.template;
    } else {
        window.location.hash = '#/about';
    }
  }

  function handleNavigation() {
    state.route = window.location.hash || '#/about';
    if (state.route === '#/') {
        state.route = '#/about';
        window.location.hash = '#/about';
    }
    renderNavbar();
    renderContent();
    addEventListeners();
  }

  function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');
    const loginBtn = document.getElementById('login-btn');

    loginBtn.disabled = true;
    loginBtn.textContent = '登入中...';

    setTimeout(() => {
      if (username === 'cuteuser' && password === '1234') {
        state.user = { username, token: 'mock-token-abc' };
        localStorage.setItem('user', JSON.stringify(state.user));
        window.location.hash = '#/profile';
      } else {
        errorMsg.style.display = 'block';
        loginBtn.disabled = false;
        loginBtn.textContent = '登入';
      }
    }, 1000);
  }

  function handleLogout() {
    state.user = null;
    localStorage.removeItem('user');
    window.location.hash = '#/login';
  }

  function addEventListeners() {
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', handleLogin);
    }

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', handleLogout);
    }
  }

  window.addEventListener('hashchange', handleNavigation);

  // Initial load
  handleNavigation();
});
