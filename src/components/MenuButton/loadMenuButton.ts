function loadMenuButton() {
	const dialogElem = document.getElementById('dialog') as HTMLDialogElement;
	const showBtn = document.getElementById('menu-btn') as HTMLButtonElement;

	if (!dialogElem || !showBtn) return;

	showBtn.addEventListener('mousedown', () => {
		dialogElem.showModal();
	});
}

export default loadMenuButton;
