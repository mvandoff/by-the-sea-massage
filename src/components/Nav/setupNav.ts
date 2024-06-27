function setupNav() {
	const slide = document.getElementById('slide');
	const primaryBtn = document.getElementById('primary-btn');
	const navItems = Array.from(document.getElementsByClassName('nav-item')) as HTMLElement[];
	const logoBtn = document.getElementById('logo-btn');

	if (!slide || !primaryBtn || !navItems || navItems?.length === 0 || !logoBtn) return;

	slide.style.width = navItems[0].offsetWidth + 'px';

	navItems.forEach((navItem) => {
		const currentItemIndex = navItems.indexOf(navItem);

		navItem.onmousedown = () => {
			navItem.classList.add('selected');
			navItems.forEach((item, i) => {
				if (i !== currentItemIndex) item.classList.remove('selected');
			});

			slide.style.width = navItem.offsetWidth + 'px';

			const marginLeft = navItems.reduce((acc, item, i) => {
				// Not sure why the 4.5 is needed here
				if (i < currentItemIndex) return acc + item.offsetWidth + 4.5;
				return acc;
			}, 0);

			slide.style.marginLeft = marginLeft + 'px';
		};
	});

	logoBtn.onmousedown = () => {
		navItems.forEach((item) => item.classList.remove('selected'));
		navItems[0].classList.add('selected');
		slide.style.width = navItems[0].offsetWidth + 'px';
		slide.style.marginLeft = '0';
	};

	primaryBtn.onmousedown = () => {
		navItems.forEach((item) => item.classList.remove('selected'));
		slide.style.width = '0';
	};
}

export default setupNav;
