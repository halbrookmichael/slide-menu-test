$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('body').on('click', function(el) {

		if(el.target.getAttribute('class')) {
			let elClass = el.target.getAttribute('class');
			let elAttr = el.target.getAttribute('data-target');
			let elParent = el.target.parentElement.parentElement.parentElement.getAttribute('data-target');

			if(elClass.includes('sidebarCollapse'))
				openMenu();
			if(elClass.includes('page-submenu'))
				openSubMenu(elAttr);
			if(elClass.includes('dismiss-primary'))
				closeMenu();
			if(elClass.includes('dismiss-secondary'))
				closeSubMenu(elParent);
			if(elClass.includes('overlay')) {
				closeMenu();
				closeSubMenu();
			}
		}
		else
			return;
  })

  // Menu functionality
	function openMenu() {
		$('#sidebar').addClass('active');
		$('.overlay').addClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		$('body').addClass('fixed');
	}
	function openSubMenu(target) {
		$(`[data-target=${target}]`).addClass('active');
	}
  function closeMenu() {
		$('#sidebar').removeClass('active');
		$('.overlay').removeClass('active');
		$('a[aria-expanded=false]').attr('aria-expanded', 'true');
		$('body').removeClass('fixed');
  }
  function closeSubMenu(target) {
		$(`[data-target=${target}]`).removeClass('active');
  }
});