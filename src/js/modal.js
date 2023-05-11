const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const showModalButton = document.querySelector('.header__button');
const modalCloseButton = modal.querySelector('.modal-close');
const modalContent = modal.querySelector('.modal-content');

const modalCloses = (modalClass) => {
	modalClass.classList.add('hide');
	body.classList.remove('_lock');
}

showModalButton.addEventListener('click', () => {
	modal.classList.remove('hide');
	body.classList.add('_lock');

});

modalCloseButton.addEventListener('click', () => {
	modalCloses(modal);
});
modal.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal-wrapper')) {
		modalCloses(modal);
	}
});