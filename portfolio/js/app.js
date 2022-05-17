const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.header__list');
const burgerOpen = document.querySelector('.burger__icon-open');
const burgerClose = document.querySelector('.burger__icon-close');
const navMenuItems = document.querySelectorAll('.header__list-link');
const darkBg = document.querySelector('#cover');
const portfolioButtons = document.querySelectorAll('.btn-portfolio');
const langButtons = document.querySelectorAll('#language');
const langBlock = document.querySelector('.header__language-swap');

const bgClick = () => {
	darkBg.addEventListener('click', () => {
		navMenu.classList.remove('burger__active');
		toggleBurger();
		darkenBg();
	});
};

const burgerButton = () => {
	burger.addEventListener('click', () => {
		navMenu.classList.toggle('burger__active');
		toggleBurger();
		darkenBg();
	});
};

const navLinks = () => {
	navMenuItems.forEach((link) => {
		link.addEventListener('click', () => {
			navMenu.classList.remove('burger__active');
			toggleBurger();
			darkenBg();
		});
	});
};

const darkenBg = () => {
	if (
		navMenu.classList.contains('burger__active') &&
		!darkBg.classList.contains('covering')
	) {
		darkBg.classList.add('covering');
	} else {
		darkBg.classList.remove('covering');
	}
};

const toggleBurger = () => {
	if (navMenu.classList.contains('burger__active')) {
		burgerOpen.classList.add('burger__close');
		burgerClose.classList.remove('burger__close');
	} else {
		burgerClose.classList.add('burger__close');
		burgerOpen.classList.remove('burger__close');
	}
};

const activatePortfolioButton = () => {
	portfolioButtons.forEach((button) => {
		button.addEventListener('click', () => {
			portfolioButtons.forEach((btn) => {
				btn.classList.remove('btn-active');
			});
			button.classList.add('btn-active');
		});
	});
};

const navBarCloser = () => {
	window.addEventListener('resize', () => {
		if (window.innerWidth > 768) {
			navMenu.classList.remove('burger__active');
			darkenBg();
			toggleBurger();
		}
	});
};

const langSwap = () => {
	langBlock.addEventListener('click', () => {
		langButtons.forEach((btn) => {
			btn.classList.toggle('lang__active');
		});
	});
};

const toggleLang = () => {};

const app = () => {
	burgerButton();
	navLinks();
	bgClick();
	activatePortfolioButton();
	navBarCloser();
	langSwap();
};

app();
