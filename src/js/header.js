const body = document.querySelector('body');
const header = document.querySelector('header');
const bodyWrapper = document.querySelector('.body-wrapper');
const scrollPosition = () =>  bodyWrapper.pageYOffset || bodyWrapper.scrollTop;
const isHeaderShadow = () => header.classList.contains('header--shadow')
const isHeaderHide = () => header.classList.contains('hide')

let lastScroll = 0;

// Появление и исчезание хеадера при скролле
bodyWrapper.addEventListener('scroll', () => {
	if (scrollPosition() > lastScroll && !isHeaderHide()) {
		header.classList.add('hide');
		header.classList.remove('header--shadow');
	} else if (scrollPosition() < lastScroll && isHeaderHide()) {
		header.classList.add('header--shadow');
		header.classList.remove('hide');
	}
		
	if (scrollPosition() < header.offsetHeight && isHeaderShadow()) {
		header.classList.remove('header--shadow');
	}
	lastScroll = scrollPosition();
});

const searchForm = document.querySelector('.search-form');
const formSearch = document.querySelector('.search-form input[type="search"]');
const formSearchPlaceholder = document.querySelector('.search-form input[type="search"]::placeholder');
const searcWrapper = document.querySelector('.search-list__wrapper');
const searchList = document.querySelector('.search-list');
const searchItems = searchList.querySelectorAll('li');

// Появление списка возможного поиска
formSearch.addEventListener('input', function() {
	if (searcWrapper.classList.contains('hide')) {
		searcWrapper.classList.remove('hide');
		
	}
});
formSearch.addEventListener('mouseover', function() {
	if (searcWrapper.classList.contains('hide')) {
		searcWrapper.classList.remove('hide');
	}
});
header.addEventListener('mouseleave', function() {
	searcWrapper.classList.add('hide');
});
// Появление списка возможного поиска
formSearch.addEventListener('focus', function() {
	if (searcWrapper.classList.contains('hide')) {
		searcWrapper.classList.remove('hide');
		searchForm.style.borderBottom = "2px solid transparent";
	}
});
formSearch.addEventListener('blur', function() {
	searchForm.style.borderBottom = "2px solid #131926"
	
		setTimeout(() => {
			searcWrapper.classList.add('hide');
		}, 200)
});

formSearch.addEventListener('input', function() {
	let val = this.value.trim().toLowerCase();

	if (val != '') {
		searchItems.forEach(function(elem) {
			if (elem.innerText.toLowerCase().search(val) == -1) {
				elem.classList.add('hide');
			}
			else {
				elem.classList.remove('hide');
			}
		})
	}
	else {
		// Перебираем все значения ввода
		searchItems.forEach(function(elem) {
				elem.classList.remove('hide');
			})
		}
});

// При клике на элемент списка возможного поиска - подставляет его значение в input
searchItems.forEach(function(item) {
	item.addEventListener('click', function() {
		formSearch.value = item.dataset.value;
	})
});

// Работа с бургером
const headerBurger = document.querySelector('.header-burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuClose = document.querySelector('.burger-menu__close');

console.log(burgerMenuClose);

headerBurger.addEventListener('click', () => {
	burgerMenu.classList.add('show');
});

burgerMenuClose.addEventListener('click', () => {
	burgerMenu.classList.remove('show');
});

// burgerMenu.addEventListener('mouseleave', () => {
// 	burgerMenu.classList.remove('show');
// })
document.addEventListener('click', (e) => {
	console.log(e.target);
	// burgerMenu.classList.remove('show');
})