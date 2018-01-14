$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:['home', 'about', 'exp', 'skill', 'works', 'contact', 'footer'],
    sectionsColor: ['rgba(0,0,0,.05)', 'rgba(0,0,0,.05)', 'rgba(0,0,0,.05)', 'rgba(0,0,0,.05)', 'rgba(0,0,0,.05)', 'rgba(0,0,0,.05)', '#222'],
    scrollOverflow: true,
    menu: '#header'
  });
  $(document).on('click', '#btnGoDown', function(){
    $.fn.fullpage.moveSectionDown();
  });
});