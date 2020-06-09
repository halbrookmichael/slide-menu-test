$(document).ready(function () {
	let navContainer = document.querySelectorAll('nav');
	const parentNav = [
		{
			img: 'img/parentNav/search_by_gun.jpg',
			alt: 'Search by gun',
			text: 'Search By Gun',
			link: 'search.html'
		},
		{
			img: 'img/parentNav/concealed-carry-holsters.jpg',
			alt: '',
			text: 'Shop Now',
			link: '#',
			dataTarget: 'shop',
			extraClass: 'page-submenu',
			more: true
		},
		{
			img: 'img/parentNav/concealed-carry-holster-reviews.jpg',
			alt: '',
			text: 'Reviews',
			link: 'reviews.html'
		},
		{
			img: 'img/parentNav/concealed-carry-blog.jpg',
			alt: '',
			text: 'Blog',
			link: 'blog.html'
		},
		{
			img: 'img/parentNav/concealed-carry-videos.jpg',
			alt: '',
			text: 'Videos',
			link: '#'
		},
		{
			img: 'img/parentNav/concealed-carry-help.jpg',
			alt: '',
			text: 'Help',
			link: '#',
			dataTarget: 'help',
			extraClass: 'page-submenu',
			more: true
		},
		{
			img: 'img/parentNav/alien-gear-customer-service.jpg',
			alt: '',
			text: 'Contact Us',
			link: '#'
		},
		{
			img: 'img/parentNav/concealed-carry-deals.jpg',
			alt: '',
			text: 'Holster Deals',
			link: '#'
		},
	];
	const shopNowNav = [
		{
			img: 'img/otherNav/holster-attachments-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Shapeshift CCP',
			link: '#'
		},
		{
			img: 'img/otherNav/aiwb-carry-expansion-pack-parts-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'ShapeShift Expansion Packs',
			link: '#'
		},
		{
			img: 'img/iwbNav/alien-gear-iwb-holsters.jpg',
			alt: 'Placeholder',
			text: 'Conceal Carry Holsters',
			link: '#',
			dataTarget: 'conceal-carry',
			extraClass: 'page-submenu',
			more: true
		},
		{
			img: 'img/owbNav/alien-gear-owb-holsters.jpg',
			alt: 'Placeholder',
			text: 'Open Carry Holsters',
			link: '#',
			dataTarget: 'open-carry',
			extraClass: 'page-submenu',
			more: true
		},
		{
			img: 'img/otherNav/alien-gear-rapid-force-glock-17-law-enforcement-holster-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Duty Holsters',
			link: '#'
		},
		{
			img: 'img/otherNav/alien-gear-tactical-holsters.jpg',
			alt: 'Placeholder',
			text: 'Tactical Holsters',
			link: '#'
		},
		{
			img: 'img/otherNav/shapeshift-family-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'All Holsters',
			link: '#'
		},
		{
			img: 'img/otherNav/shapeshift-holster-shell-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Holster Shells',
			link: '#'
		},
		{
			img: 'img/otherNav/shapeshift-wall-holster-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Car Holsters and Mounts',
			link: '#'
		},
		{
			img: 'img/otherNav/alien-gear-gun-mat-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Gun Mats',
			link: '#'
		},
		{
			img: 'img/otherNav/shapeshift-concealed-holster-clip-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Holster Gear',
			link: '#'
		},
		{
			img: 'img/otherNav/owb-mag-holster-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Mag Carriers',
			link: '#'
		},
		{
			img: 'img/otherNav/ccw-gun-belt-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Gun Belts',
			link: '#'
		},
		{
			img: 'img/otherNav/wearing-the-tactica-womens-defense-iwb-holster-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Women\'s Holsters',
			link: '#'
		},
		{
			img: 'img/otherNav/gift-cards-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Gift Cards',
			link: '#'
		},
	];
	const helpNav = [
		{
			text: 'About Us',
			link: '#'
		},
		{
			text: 'Warranty',
			link: '#'
		},
		{
			text: 'Returns and Exchanges',
			link: '#'
		},
		{
			text: 'Product Testing',
			link: '#'
		},
		{
			text: 'Product FAQ',
			link: '#'
		},
		{
			text: 'International FAQ',
			link: '#'
		},
		{
			text: 'Shapeshift Release Calendar',
			link: '#'
		},
		{
			text: 'Contest',
			link: '#'
		},
	];
	const concealCarryNav = [
		{
			img: 'img/iwbNav/how-to-wear-the-shapeshift-iwb-holster-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'IWB Holsters (Inside the Waistband)',
			link: '#'
		},
		{
			img: 'img/iwbNav/how-to-wear-appendix-carry-holster-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Appendix Carry Holsters (AIWB)',
			link: '#'
		},
		{
			img: 'img/iwbNav/Expansion Black Side View-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Shoulder Holsters',
			link: '#'
		},
		{
			img: 'img/otherNav/alien-gear-pocket-holsters.jpg',
			alt: 'Placeholder',
			text: 'Pocket Holsters',
			link: '#'
		},
		{
			img: 'img/iwbNav/drawing-your-gun-from-an-ankle-holster-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Ankle Holsters',
			link: '#'
		},
		{
			img: 'img/iwbNav/belly-band-iwb-holster-in-use-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Belly Band Holsters',
			link: '#'
		}
	];
	const openCarryNav = [
		{
			img: 'img/owbNav/best-paddle-holsters-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'OWB Holster (Outside the Waistband)',
			link: '#'
		},
		{
			img: 'img/owbNav/wearing-drop-leg-holster-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Drop Leg Holsters',
			link: '#'
		},
		{
			img: 'img/owbNav/wearing-a-molle-holster-on-the-waistline-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'MOLLE Holsters',
			link: '#'
		},
		{
			img: 'img/owbNav/wearing-a-backpack-pistol-holster-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Backpack Holsters',
			link: '#'
		},
		{
			img: 'img/owbNav/shapeshift-hook-and-loop-velcro-holster-mounted-on-wall-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Hook and Loop Holsters',
			link: '#'
		},
		{
			img: 'img/owbNav/drawing-from-cloak-chest-holster-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Chest Holsters',
			link: '#'
		},
		{
			img: 'img/owbNav/shapeshift-backpack-holster-in-hunting-bundle-mobile-nav.jpg',
			alt: 'Placeholder',
			text: 'Hunting Holsters',
			link: '#'
		}
	];
	navToPopulate();

  /**
	 *  Check which nav, then call population method
	 */
	function navToPopulate() {
		navContainer.forEach(nav => {
			let navId = nav.getAttribute('id');

			switch(navId) {
				case 'sidebar': 
					populateNav(parentNav, '.components-parent', 'parent');
					break;
				case 'shop-nav': 
					populateNav(shopNowNav, '.components-shop', 'sub');
					break;
				case 'help-nav': 
					populateNav(helpNav, '.components-help', 'help');
					break;
				case 'conceal-carry-nav': 
					populateNav(concealCarryNav, '.components-conceal-carry', 'sub');
					break;
				case 'open-carry-nav': 
					populateNav(openCarryNav, '.components-open-carry', 'sub');
					break;
			}
		})
		
	}
	/**
	 *  Populate each nav
	 *  @param {array} nav
	 *  @param {string} navUl
	 *  @param {string} linkType
	 */
	function populateNav(nav, navUl, linkType) {
		nav.forEach(link => {
			if(linkType == 'parent') {
				$(navUl).append(
					`<li class="rec-container-base rec-container-base__link">
						<a href="${link.link}" class="${link.extraClass ? link.extraClass : ''}" data-target="${link.dataTarget ? link.dataTarget : ''}">
							<div class="skew"></div>
							${link.text}
							${link.more ? `<i class="fas fa-chevron-right parent"></i>` : ''}
							<div class="img-container">
								<img src="${link.img}" alt="${link.alt}">
							</div>
						</a>
					</li>`
				)
			}
			else if(linkType == 'help') {
				$(navUl).append(
					`<li class="rec-container-base rec-container-base__link-sub-menu">
						<a href="${link.link}" class="link-no-image" data-target="${link.dataTarget ? link.dataTarget : ''}">
							${link.text}
							${link.more ? `<i class="fas fa-chevron-right parent"></i>` : ''}
						</a>
					</li>`
				)
			}
			else {
				$(navUl).append(
					`<li class="rec-container-base rec-container-base__link-sub-menu">
						<a href="${link.link}" class="${link.extraClass ? link.extraClass : ''}" data-target="${link.dataTarget ? link.dataTarget : ''}">
							<div class="img-container">
								${link.img ? `<img src="${link.img}" alt="${link.alt}">` : '<i class="fas fa-chevron-right"></i>'}
							</div>
							${link.text}
							${link.more ? `<i class="fas fa-chevron-right"></i>` : ''}
						</a>
					</li>`
				)
			}
		});
	}
	// Check for clicks on the menu
	$('body').on('click', function(el) {
		let width = $(window).width();
		let elClass = el.target.getAttribute('class');

		if(elClass) {
			let elAttr = el.target.getAttribute('data-target');
			let elParent = el.target.parentElement.parentElement.getAttribute('data-target');

			if(elClass.includes('sidebarCollapse'))
				openMenu();
			if(elClass.includes('page-submenu'))
				openSubMenu(elAttr);
			if(elClass.includes('dismiss-secondary'))
				closeSubMenu(elParent);
			if(elClass.includes('dismiss-all') || elClass.includes('overlay')) {
				closeAllMenus();
			}
		}
		else
			return;
		
		if(width <= 320 && $('#sidebar').hasClass('active'))
			$('.dismiss-all-mobile').addClass('active');
		else
			$('.dismiss-all-mobile').removeClass('active');
	});
	/**
	 *  Open menu
	 */
	function openMenu() {
		$('#sidebar').addClass('active');
		$('.overlay').addClass('active');
		$('.dismiss-all').addClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		$('body').addClass('fixed');
	}
	/**
	 *  Open sub menu
	 *  @param {element} target
	 */
	function openSubMenu(target) {
		$(`[data-target=${target}]`).addClass('active');
	}
	/**
	 *  Close Menu
	 */
  function closeAllMenus() {
		navContainer.forEach(nav => {
			$(nav).removeClass('active');
		});
		$('.overlay').removeClass('active');
		$('.dismiss-all').removeClass('active');
		$('a[aria-expanded=false]').attr('aria-expanded', 'true');
		$('body').removeClass('fixed');
	}
	/**
	 *  Close Sub Menu
	 *  @param {element} target
	 */
  function closeSubMenu(target) {
		$(`[data-target=${target}]`).removeClass('active');
	}
});