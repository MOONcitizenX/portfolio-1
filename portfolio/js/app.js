const BURGER = document.querySelector('.burger');
const NAV_MENU = document.querySelector('.header__list');
const BURGER_OPEN = document.querySelector('.burger__icon-open');
const BURGER_CLOSE = document.querySelector('.burger__icon-close');
const NAV_MENU_ITEMS = document.querySelectorAll('.header__list-link');
const DARK_BG = document.querySelector('#cover');
const PORTFOLIO_BUTTONS = document.querySelectorAll('.btn-portfolio');
const PORTFOLIO_IMGS = document.querySelectorAll('.portfolio__pictures');
const LANG_BUTTONS = document.querySelectorAll('.language');
const LANG_BLOCK = document.querySelector('.header__language-swap');
const LANG_EN = document.querySelector('#lang-en');
const LANG_RU = document.querySelector('#lang-ru');

const LANGUAGES = {
	en: {
		hero_title: 'Alexa Rise',
		hero_desc:
			'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
		hero_hire: 'Hire me',
		lang_skills: 'Skills',
		lang_portfolio: 'Portfolio',
		lang_video: 'Video',
		lang_price: 'Price',
		lang_contacts: 'Contacts',
		skills_photo_title: 'Digital photography',
		skills_photo_desc:
			'High-quality photos in the studio and on the nature',
		skills_video_title: 'Video shooting',
		skills_video_desc:
			'Capture your moments so that they always stay with you',
		skills_retouch_title: 'Retocuh',
		skills_retouch_desc: 'I strive to make photography surpass reality',
		skills_audio_title: 'Audio',
		skills_audio_desc:
			'Professional sounds recording for video, advertising, portfolio',
		portfolio_winter: 'Winter',
		portfolio_spring: 'Spring',
		portfolio_summer: 'Summer',
		portfolio_autumn: 'Autumn',
		standard_title: 'Standard',
		standard_list: [
			'One location',
			'120 photos in color',
			'12 photos in retouch',
			'Readiness 2-3 weeks',
			'Make up, visage'
		],
		premium_title: 'Premium',
		premium_list: [
			'One or two locations',
			'200 photos in color',
			'20 photos in retouch',
			'Readiness 1-2 weeks',
			'Make up, visage'
		],
		gold_title: 'Gold',
		gold_list: [
			'Three locations or more',
			'300 photos in color',
			'50 photos in retouch',
			'Readiness 1 week',
			'Make up, visage, hairstyle'
		],
		price__button: 'Order shooting',
		contact_title: 'Contact me',
		contact_email: 'E-mail',
		contact_phone: 'Phone',
		contact_message: 'Message',
		contact_button: 'Send message'
	},
	ru: {
		hero_title: 'Алекса Райз',
		hero_desc:
			'Сохраните искренние эмоции, романтические чувства и счастливые моменты жизни вместе с профессиональным фотографом Алексой Райз.',
		hero_hire: 'Заказать',
		lang_skills: 'Навыки',
		lang_portfolio: 'Портфолио',
		lang_video: 'Видео',
		lang_price: 'Тарифы',
		lang_contacts: 'Контакты',
		skills_photo_title: 'Цифровая фотография',
		skills_photo_desc: 'Качественные фото в студии и на природе',
		skills_video_title: 'Видеосъемка',
		skills_video_desc:
			'Запечатлите свои моменты, чтобы они всегда оставались с вами',
		skills_retouch_title: 'Ретушь',
		skills_retouch_desc:
			'Я стремлюсь к тому, чтобы фотография превзошла реальность',
		skills_audio_title: 'Аудио',
		skills_audio_desc:
			'Профессиональная звукозапись для видео, рекламы, портфолио',
		portfolio_winter: 'Зима',
		portfolio_spring: 'Весна',
		portfolio_summer: 'Лето',
		portfolio_autumn: 'Осень',
		standard_title: 'Стандарт',
		standard_list: [
			'Одна локация',
			'120 цветных фото',
			'12 фото в ретуши',
			'Готовность 2-3 недели',
			'Макияж, визаж'
		],
		premium_title: 'Премиум',
		premium_list: [
			'Одна или две локации',
			'200 цветных фото',
			'20 фото в ретуши',
			'Готовность 1-2 недели',
			'Макияж, визаж'
		],
		gold_title: 'Золотой',
		gold_list: [
			'Три или больше локаций',
			'300 цветных фото',
			'50 фото в ретуши',
			'Готовность 1 неделя',
			'Макияж, визаж, прическа'
		],
		price__button: 'Заказать съемку',
		contact_title: 'Связаться со мной',
		contact_email: 'Электронная почта',
		contact_phone: 'Телефон',
		contact_message: 'Сообщение',
		contact_button: 'Отправить сообщение'
	}
};

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
			switchPortfolioTabs();
		});
	});
};

const switchPortfolioTabs = () => {
	const currentTab = document.querySelector('.btn-portfolio.btn-active').id;
	const currentTabID = `#${currentTab.trim().toLowerCase()}_img`;
	PORTFOLIO_IMGS.forEach((img) => {
		img.classList.remove('portfolio-active');
	});
	const currentTabBlock = document.querySelector(currentTabID);
	currentTabBlock.classList.add('portfolio-active');
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
		changeCurrentLang();
	});
};

const changeCurrentLang = () => {
	const currentLang = document.querySelector('.lang__active').textContent;
	// Header links
	document.querySelector('#lang_skills').textContent =
		LANGUAGES[currentLang].lang_skills;
	document.querySelector('#lang_portfolio').textContent =
		LANGUAGES[currentLang].lang_portfolio;
	document.querySelector('#lang_video').textContent =
		LANGUAGES[currentLang].lang_video;
	document.querySelector('#lang_price').textContent =
		LANGUAGES[currentLang].lang_price;
	document.querySelector('#lang_contacts').textContent =
		LANGUAGES[currentLang].lang_contacts;
	// Hero content
	document.querySelector('#lang_hero_title').textContent =
		LANGUAGES[currentLang].hero_title;
	document.querySelector('#lang_hero_desc').textContent =
		LANGUAGES[currentLang].hero_desc;
	document.querySelector('#lang_hero_hire').textContent =
		LANGUAGES[currentLang].hero_hire;
	// Section titles
	document.querySelector('#skills').textContent =
		LANGUAGES[currentLang].lang_skills;
	document.querySelector('#portfolio').textContent =
		LANGUAGES[currentLang].lang_portfolio;
	document.querySelector('#video').textContent =
		LANGUAGES[currentLang].lang_video;
	document.querySelector('#price').textContent =
		LANGUAGES[currentLang].lang_price;
	// Skills
	document.querySelector('#skills_photo_title').textContent =
		LANGUAGES[currentLang].skills_photo_title;
	document.querySelector('#skills_photo_desc').textContent =
		LANGUAGES[currentLang].skills_photo_desc;
	document.querySelector('#skills_video_title').textContent =
		LANGUAGES[currentLang].skills_video_title;
	document.querySelector('#skills_video_desc').textContent =
		LANGUAGES[currentLang].skills_video_desc;
	document.querySelector('#skills_retouch_title').textContent =
		LANGUAGES[currentLang].skills_retouch_title;
	document.querySelector('#skills_retouch_desc').textContent =
		LANGUAGES[currentLang].skills_retouch_desc;
	document.querySelector('#skills_audio_title').textContent =
		LANGUAGES[currentLang].skills_audio_title;
	document.querySelector('#skills_audio_desc').textContent =
		LANGUAGES[currentLang].skills_audio_desc;
	// Portfolio
	document.querySelector('#portfolio_winter').textContent =
		LANGUAGES[currentLang].portfolio_winter;
	document.querySelector('#portfolio_spring').textContent =
		LANGUAGES[currentLang].portfolio_spring;
	document.querySelector('#portfolio_summer').textContent =
		LANGUAGES[currentLang].portfolio_summer;
	document.querySelector('#portfolio_autumn').textContent =
		LANGUAGES[currentLang].portfolio_autumn;
	document.querySelector('#portfolio_winter').textContent =
		LANGUAGES[currentLang].portfolio_winter;
	// Price
	document.querySelector('#standard_title').textContent =
		LANGUAGES[currentLang].standard_title;
	document.querySelectorAll('#standard_list li').forEach((el, index) => {
		el.textContent = LANGUAGES[currentLang].standard_list[index];
	});
	document.querySelector('#premium_title').textContent =
		LANGUAGES[currentLang].premium_title;
	document.querySelectorAll('#premium_list li').forEach((el, index) => {
		el.textContent = LANGUAGES[currentLang].premium_list[index];
	});
	document.querySelector('#gold_title').textContent =
		LANGUAGES[currentLang].gold_title;
	document.querySelectorAll('#gold_list li').forEach((el, index) => {
		el.textContent = LANGUAGES[currentLang].gold_list[index];
	});
	// Price buttons
	document.querySelectorAll('.price__button').forEach((el) => {
		el.textContent = LANGUAGES[currentLang].price__button;
	});
	// Contact form
	document.querySelector('#contact_title').textContent =
		LANGUAGES[currentLang].contact_title;
	document.querySelector('#contact_email').placeholder =
		LANGUAGES[currentLang].contact_email;
	document.querySelector('#contact_phone').placeholder =
		LANGUAGES[currentLang].contact_phone;
	document.querySelector('#contact_message').placeholder =
		LANGUAGES[currentLang].contact_message;
	document.querySelector('#contact_button').textContent =
		LANGUAGES[currentLang].contact_button;
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
