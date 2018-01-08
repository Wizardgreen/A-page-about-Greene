$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:['home', 'about', 'exp', 'skills', 'works', 'contact', 'footer'],
    sectionsColor: ['', 'orange', '#C0C0C0', '#ADD8E6', '#ffffff', '#ffffff', '#222222'],
    scrollOverflow: true,
    menu: '#header'
  });
});