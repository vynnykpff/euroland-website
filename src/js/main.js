const navList = document.querySelector('.nav__list');

document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active');
	navList.classList.toggle('open');

	if (navList.classList[1] === 'open') {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = '';
	}
});

// Footer update year
let span = document.querySelector('.rights > span');
span.innerHTML = new Date().getFullYear();
