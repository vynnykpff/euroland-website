document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active');
	document.querySelector('.nav__list').classList.toggle('open');
});

const aboutTitle = document.querySelector('.about__title');
const aboutText = document.querySelector('.about__text');

aboutText.addEventListener('mouseover', e => {
	console.log('test');

	aboutTitle.style

});
