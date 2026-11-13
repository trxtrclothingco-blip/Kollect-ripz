/* Updates Sign In link to Log Out when user is signed in.
   Separate from nav.js so it never breaks the burger menu. */
(function () {
  function updateAuthLink() {
    if (typeof firebase === 'undefined' || !firebase.auth) return;

    firebase.auth().onAuthStateChanged(function (user) {
      try {
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
      } catch (err) {
        console.warn('Auth link update failed:', err);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateAuthLink);
  } else {
    updateAuthLink();
  }
})();
