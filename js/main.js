const slider = document.querySelector('.slide');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

prevBtn.addEventListener('click', prevButton);
nextBtn.addEventListener('click', nextButton);

let counter = 0;

function nextButton() {
	slider.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 1000, fill: 'forwards'});
	if (counter === 4) {
		counter = -1;
	}
	counter++;
	slider.style.backgroundImage = `url(img/slide-${counter}.jpg)`;
}
function prevButton() {
	slider.animate([{opacity: '0.1'}, {opacity: '1.0'}], {duration: 1000, fill: 'forwards'});
	if (counter === 0) {
		counter = 5;
	}
	counter--;
	slider.style.backgroundImage = `url(img/slide-${counter}.jpg)`;
}