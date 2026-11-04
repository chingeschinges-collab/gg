(function () {
  var DESKTOP = '/desktop/desktop.html';
  var MOBILE = '/mobile/mobile2.html';
  var MIN_DESKTOP_WIDTH = 1024;

  function isMobile() {
    var w = window.innerWidth || document.documentElement.clientWidth || screen.width;
    // iPad reports a Mac user agent, so touch capability is checked too.
    var touch = (window.matchMedia && matchMedia('(pointer: coarse)').matches) || navigator.maxTouchPoints > 1;
    return touch || w < MIN_DESKTOP_WIDTH;
  }

  function route() {
    var target = isMobile() ? MOBILE : DESKTOP;
    if (location.pathname !== target) location.replace(target + location.search + location.hash);
  }

  route();

  var t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(route, 300);
  });
})();
