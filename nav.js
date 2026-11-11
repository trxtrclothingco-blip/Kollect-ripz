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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }
})();
