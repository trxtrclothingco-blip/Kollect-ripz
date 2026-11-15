/* Kollect Vault - Global Authentication Navigation
   Updates Sign In to Log Out across all pages.
   Separate from nav.js to protect burger menu functionality.
*/

(function () {

  // ADMIN LINK VISIBILITY (new)
  // Finds every admin link in the navigation
  function getAdminLinks() {
    return document.querySelectorAll(
      '#navMenu a[href="admin.html"], #navMenu a[data-admin-link="true"], ' +
      '.nav-menu a[href="admin.html"], .nav-menu a[data-admin-link="true"]'
    );
  }

  function setAdminLinksVisible(visible) {
    var links = getAdminLinks();
    for (var i = 0; i < links.length; i++) {
      var target = links[i].closest('li') || links[i];
      target.style.display = visible ? '' : 'none';
    }
  }

  // Resolves to the user's role string (e.g. 'admin' or 'customer')
  // 1) Checks Firebase custom claims  2) Falls back to Firestore users/{uid}.role
  function getUserRole(user) {
    return user.getIdTokenResult()
      .then(function (tokenResult) {
        var claims = tokenResult.claims || {};
        if (claims.role) return claims.role;
        if (claims.admin === true) return 'admin';

        if (typeof firebase.firestore === 'function') {
          return firebase.firestore().collection('users').doc(user.uid).get()
            .then(function (doc) {
              return doc.exists && doc.data().role ? doc.data().role : 'customer';
            });
        }

        return 'customer';
      })
      .catch(function (err) {
        console.warn('Role lookup failed:', err);
        return 'customer';
      });
  }

  function updateAdminLink(user) {
    // Hide by default (signed out, customer, or unknown role)
    setAdminLinksVisible(false);

    if (!user) return;

    getUserRole(user).then(function (role) {
      // Only the admin role can see the admin link
      if (String(role).toLowerCase() === 'admin') {
        setAdminLinksVisible(true);
      }
    });
  }

  function updateAuthLink() {

    if (typeof firebase === 'undefined' || !firebase.auth) {
      console.warn('Firebase Auth not loaded.');
      return;
    }

    firebase.auth().onAuthStateChanged(function (user) {

      // Show admin link for admin role only (new)
      try {
        updateAdminLink(user);
      } catch (adminErr) {
        console.warn('Admin link update failed:', adminErr);
      }

      try {

        // Find the authentication link in the navigation
        var signInLink = document.querySelector(
          '#navMenu a[href="auth.html"], #navMenu a[data-auth-link="true"], ' +
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
