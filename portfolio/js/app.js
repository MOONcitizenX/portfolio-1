const BURGER = document.querySelector('.burger');
const NAV_MENU = document.querySelector('.header__list');
const BURGER_OPEN = document.querySelector('.burger__icon-open');
const BURGER_CLOSE = document.querySelector('.burger__icon-close');
const NAV_MENU_ITEMS = document.querySelectorAll('.header__list-link');
const DARK_BG = document.querySelector('#cover');
const PORTFOLIO_BUTTONS = document.querySelectorAll('.btn-portfolio');
const LANG_BUTTONS = document.querySelectorAll('#language');
const LANG_BLOCK = document.querySelector('.header__language-swap');

const bgClick = () => {
	DARK_BG.addEventListener('click', () => {
		NAV_MENU.classList.remove('burger__active');
		toggleBurger();
		darkenBg();
	});
};

const burgerButton = () => {
	BURGER.addEventListener('click', () => {
		NAV_MENU.classList.toggle('burger__active');
		toggleBurger();
		darkenBg();
	});
};

const navLinks = () => {
	NAV_MENU_ITEMS.forEach((link) => {
		link.addEventListener('click', () => {
			NAV_MENU.classList.remove('burger__active');
			toggleBurger();
			darkenBg();
		});
	});
};

const darkenBg = () => {
	if (
		NAV_MENU.classList.contains('burger__active') &&
		!DARK_BG.classList.contains('covering')
	) {
		DARK_BG.classList.add('covering');
	} else {
		DARK_BG.classList.remove('covering');
	}
};

const toggleBurger = () => {
	if (NAV_MENU.classList.contains('burger__active')) {
		BURGER_OPEN.classList.add('burger__close');
		BURGER_CLOSE.classList.remove('burger__close');
	} else {
		BURGER_CLOSE.classList.add('burger__close');
		BURGER_OPEN.classList.remove('burger__close');
	}
};

const activatePortfolioButton = () => {
	PORTFOLIO_BUTTONS.forEach((button) => {
		button.addEventListener('click', () => {
			PORTFOLIO_BUTTONS.forEach((btn) => {
				btn.classList.remove('btn-active');
			});
			button.classList.add('btn-active');
		});
	});
};

const navBarCloser = () => {
	window.addEventListener('resize', () => {
		if (window.innerWidth > 768) {
			NAV_MENU.classList.remove('burger__active');
			darkenBg();
			toggleBurger();
		}
	});
};

const langSwap = () => {
	LANG_BLOCK.addEventListener('click', () => {
		LANG_BUTTONS.forEach((btn) => {
			btn.classList.toggle('lang__active');
		});
	});
};

const app = () => {
	burgerButton();
	navLinks();
	bgClick();
	activatePortfolioButton();
	navBarCloser();
	langSwap();
};

app();
