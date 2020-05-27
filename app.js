$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('body').on('click', function(el) {

		if(el.target.getAttribute('class')) {
			let elClass = el.target.getAttribute('class').toString();

			if(elClass.includes('sidebarCollapse'))
				openMenu();
			if(elClass.includes('dismiss-primary'))
				closeMenu();
			if(elClass.includes('overlay')) {
				closeMenu();
				closeSubMenu();
			}
			if(elClass.includes('page-submenu'))
				openSubMenu();
			if(elClass.includes('dismiss-secondary'))
				closeSubMenu();
		}
		else
			return;
  })

  
	function openMenu() {
		$('#sidebar').addClass('active');
		$('.overlay').addClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		$('body').addClass('fixed');
	}
	function openSubMenu() {
		$('#secondary-nav').addClass('active');
	}
  function closeMenu() {
		$('#sidebar').removeClass('active');
		$('.overlay').removeClass('active');
		$('a[aria-expanded=false]').attr('aria-expanded', 'true');
  }
  function closeSubMenu() {
		$('#secondary-nav').removeClass('active');
  }
});