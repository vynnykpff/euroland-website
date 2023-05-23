const navList = document.querySelector('.nav__list');
const burger = document.querySelector('.burger');
const contacts = document.querySelector('.nav__item--contacts');

document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active');
	navList.classList.toggle('open');

	if (navList.classList[1] === 'open') {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}
});

contacts.addEventListener('click', () => {
	document.body.style.overflow = '';
	navList.classList = 'nav__list';
	burger.classList = 'burger';
});

// Footer update year
let span = document.querySelector('.rights > span');
span.innerHTML = new Date().getFullYear();
