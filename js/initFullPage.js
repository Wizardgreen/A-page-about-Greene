$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:['home', 'about', 'exp', 'skill', 'works', 'contact', 'footer'],
    sectionsColor: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#222'],
    scrollOverflow: true,
    menu: '#header'
  });
});