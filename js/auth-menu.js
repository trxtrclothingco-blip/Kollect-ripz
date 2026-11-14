/* Kollect Vault - Global Authentication Navigation
   Updates Sign In to Log Out across all pages.
   Separate from nav.js to protect burger menu functionality.
*/

(function () {

  function updateAuthLink() {

    if (typeof firebase === 'undefined' || !firebase.auth) {
      console.warn('Firebase Auth not loaded.');
      return;
    }

    firebase.auth().onAuthStateChanged(function (user) {

      try {

        // Find the authentication link in the navigation
        var signInLink = document.querySelector(
          '.nav-menu a[href="auth.html"], .nav-menu a[data-auth-link="true"]'
        );

        if (!signInLink) return;

        if (user) {

          // USER IS SIGNED IN
          signInLink.textContent = 'Log Out';
          signInLink.href = '#';
          signInLink.setAttribute('data-auth-link', 'true');

          signInLink.onclick = function (e) {

            e.preventDefault();

            signInLink.textContent = 'Logging out...';

            firebase.auth().signOut()

              .then(function () {

                window.location.href = 'index.html';

              })

              .catch(function (error) {

                console.error('Logout failed:', error);

                alert('Unable to log out. Please try again.');

                signInLink.textContent = 'Log Out';

              });

          };

        } else {

          // USER IS SIGNED OUT
          signInLink.textContent = 'Sign In';
          signInLink.href = 'auth.html';
          signInLink.removeAttribute('data-auth-link');
          signInLink.onclick = null;

        }

      } catch (err) {

        console.warn('Auth link update failed:', err);

      }

    });

  }


  // Initialise after page loads
  if (document.readyState === 'loading') {

    document.addEventListener('DOMContentLoaded', updateAuthLink);

  } else {

    updateAuthLink();

  }

})();
