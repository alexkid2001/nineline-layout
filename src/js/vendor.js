import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');

const lavel = document.querySelector('.js-skill__lavel');
const targetNumber = parseInt(lavel.textContent, 10);
const step = 5000 / targetNumber;
let value = 1;
lavel.textContent = value;
((w) => {
	w.addEventListener('scroll', () => {
		let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
		if (windowRelativeBottom < document.documentElement.clientHeight + 150) {
			let timer = setInterval(() => {
				if (value < targetNumber) {
					lavel.textContent = ++value;
				} else {
					clearInterval(timer);
				}
			}, step);
		}
	});
})(window);

const avatarInput = document.querySelector('.avatar__input');
const avatarPreview = document.querySelector('.avatar__preview');
avatarInput.addEventListener('change', (event) => {
	const reader = new FileReader();
	reader.onload = () => {
		avatarPreview.src = reader.result;
	};
	reader.readAsDataURL(event.target.files[0]);
});
