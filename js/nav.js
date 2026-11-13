/* Mobile burger menu - works on every page */
(function () {
  function initMenu() {
    var burger = document.getElementById('burger');
    var menu = document.getElementById('navMenu');

    if (!burger || !menu) return;

    burger.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      menu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    var links = menu.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function () {
        menu.classList.remove('open');
      });
    }

    // Close if user taps outside
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !burger.contains(e.target)) {
        menu.classList.remove('open');
      }
    });

    // Update Sign In / Log Out based on auth state
    updateAuthLink();
  }

  function updateAuthLink() {
    if (typeof firebase === 'undefined' || !firebase.auth) return;

    firebase.auth().onAuthStateChanged(function (user) {
      var signInLink = document.querySelector('a[href="auth.html"]');
      if (!signInLink) return;

      if (user) {
        signInLink.textContent = 'Log Out';
        signInLink.href = '#';
        signInLink.onclick = function (e) {
          e.preventDefault();
          firebase.auth().signOut().then(function () {
            window.location.href = 'index.html';
          });
        };
      } else {
        signInLink.textContent = 'Sign In';
        signInLink.href = 'auth.html';
        signInLink.onclick = null;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }
})();
