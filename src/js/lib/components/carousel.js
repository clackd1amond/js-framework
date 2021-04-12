import $ from '../core';

$.prototype.carousel = function () {
	for (let i = 0; i < this.length; i++) {
		const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
		const slides = this[i].querySelectorAll('.carousel-item');
		const slidesField = this[i].querySelector('.carousel-slides');
		const dots = this[i].querySelectorAll('.carousel-indicators li');

		slidesField.style.width = 100 * slides.length + '%';
		slides.forEach((slide) => {
			slide.style.width = width;
		});

		let offset = 0;
		let slideIndex = 0;
		dots[0].classList.add('active');

		$(this[i].querySelector('[data-slide="next"]')).click((e) => {
			e.preventDefault();
			if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
				offset = 0;
				slideIndex = 0;
			} else {
				offset += +width.replace(/\D/g, '');
				slideIndex++;
			}

			slidesField.style.transform = `translateX(-${offset}px)`;

			dots.forEach((dot) => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		});

		$(this[i].querySelector('[data-slide="prev"]')).click((e) => {
			e.preventDefault();
			if (offset == 0) {
				offset = +width.replace(/\D/g, '') * (slides.length - 1);
				slideIndex = slides.length - 1;
			} else {
				offset -= +width.replace(/\D/g, '');
				slideIndex--;
			}

			slidesField.style.transform = `translateX(-${offset}px)`;

			dots.forEach((dot) => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		});

		const sliderId = this[i].getAttribute('id');
		$(`#${sliderId} .carousel-indicators li`).click((e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = slideTo * +width.replace(/\D/g, '');

			slidesField.style.transform = `translateX(-${offset}px)`;
			dots.forEach((dot) => dot.classList.remove('active'));
			dots[slideTo].classList.add('active');
		});
	}
};

//sliderSet = {width:num, height:num, slides: [{name:string, url:string},...]}

$.prototype.createSlider = function ({ width = 700, height = 400, slides = [] }) {
	for (let i = 0; i < this.length; i++) {
		if (slides.length == 0) continue;
		this[i].style.width = width + 'px';

		this[i].innerHTML = `
		<ol class="carousel-indicators"></ol>
		<div class="carousel-inner" style="height: ${height}px">
		<div class="carousel-slides"></div>
		</div>
		<a href="#" class="carousel-prev" data-slide="prev">
		<span class="carousel-prev-icon">&lt;</span>
		</a>
		<a href="#" class="carousel-next" data-slide="next">
		<span class="carousel-next-icon">&gt;</span>
		</a>
		`;

		for (let j = 0; j < slides.length; j++) {
			const slide = document.createElement('div');
			slide.classList.add('carousel-item');
			slide.innerHTML = `
			<img
			src="${slides[j].url}"
			alt="${slides[j].name}"
			/>`;
			document.querySelector('.carousel-slides').appendChild(slide);

			const dot = document.createElement('li');
			dot.setAttribute('data-slide-to', `${j}`);
			document.querySelector('.carousel-indicators').appendChild(dot);
		}
		$(this[i]).carousel();
	}
};
