function loadMenuButton() {
	const dialogElem = document.getElementById('dialog') as HTMLDialogElement;
	const showBtn = document.getElementById('menu-btn') as HTMLButtonElement;

	if (!dialogElem || !showBtn) return;

	showBtn.addEventListener('mousedown', () => {
		if (showBtn.classList.contains('open')) {
			// dialogElem.close();
			showBtn.classList.remove('open');
			showBtn.classList.add('closed');
		} else {
			// dialogElem.showModal();
			showBtn.classList.remove('closed');
			showBtn.classList.add('open');
		}
	});
}

export default loadMenuButton;
