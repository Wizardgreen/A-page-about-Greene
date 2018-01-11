$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:['home', 'about', 'exp', 'skill', 'works', 'contact', 'footer'],
    sectionsColor: ['rgba(0,0,0,.3)', '#fff', '#fff', '#fff', '#fff', '#fff', '#222'],
    scrollOverflow: true,
    menu: '#header'
  });
  $(document).on('click', '#btnGoDown', function(){
    $.fn.fullpage.moveSectionDown();
  });
});