import Slider from './slider';

export default class MainSlider extends Slider {
	constructor(btns) {
		super(btns);
	}

	showSlides(n) {
		if (n > this.slides.length) {
			this.slideIndex = 1;
		}

		if (n < 1) {
			this.slideIndex = this.slides.length;
		}
	
		try {
			this.hanson.style.opacity = '0';

			if (n === 3) {
				this.hanson.classList.add('animated');
				setTimeout(() => {
					this.hanson.style.opacity = '1';
					this.hanson.classList.add('bounceInUp');
				}, 3000);
			} else {
				this.hanson.classList.remove('bounceInUp');
			}
		} catch(e) {}

		for (let i = 0; i < this.slides.length; i++) {
			this.slides[i].style.display = 'none';
			this.slides[i].classList.add('animated', 'fadeIn');
		}

		this.slides[this.slideIndex - 1].style.display = 'block';
	}

	plusSlides(n) {
		this.showSlides(this.slideIndex += n);
	}

	render() {
		try {
			this.hanson = document.querySelector('.hanson');
		} catch(e) {}

		this.btns.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				this.plusSlides(1);
			});

			btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
				e.preventDefault();
				this.slideIndex = 1;
				this.showSlides(this.slideIndex);
			});
		});

		this.showSlides(this.slideIndex);
	}
}