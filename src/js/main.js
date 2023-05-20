document.querySelector('.burger').addEventListener('click', function () {
	this.classList.toggle('active');
	document.querySelector('.nav__list').classList.toggle('open');
});

// Footer update year
let span = document.querySelector('.rights > span');
span.innerHTML = new Date().getFullYear();
