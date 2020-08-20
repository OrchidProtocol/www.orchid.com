import { Component, OnInit } from '@angular/core';
import { MetaService } from '../MetaService';

@Component({
	selector: 'app-ambassador',
	templateUrl: './ambassador.component.html',
	styleUrls: ['./ambassador.component.scss']
})

export class AmbassadorComponent implements OnInit {
	carouselOffset: number = 0;
	maxSlides: number = 0;
	carouselContainer: Element = null;
	firstImage: Element = null;

	constructor(private meta: MetaService) { }

	ngOnInit() {
		//this.meta.clearAllTags();
		this.meta.setGlobalTitle('Ambassador program | Orchid');
		this.meta.setGlobalImage('https://www.orchid.com/assets/img/contact/social.png');
		this.meta.setGlobalDescription('Let\'s reclaim the Internet together!');

		this.carouselContainer = document.querySelector('.carousel__content');
		this.firstImage = document.querySelector('.carousel__content > img');

		this.maxSlides = Math.ceil(this.carouselContainer.childElementCount/3)-1;

		const buttons = document.querySelectorAll('[data-direction]');
		for (let index = 0; index < buttons.length; index++) {
			buttons[index].addEventListener('click', this.clickListener.bind(this));
		}
	}

	clickListener(event) {
		this.carouselOffset += parseInt(event.srcElement.dataset.direction);
		this.carouselOffset = Math.max(0, Math.min(this.carouselOffset, this.maxSlides))
		console.log(this.carouselOffset)
		this.firstImage.setAttribute('style', "margin-left: "+ (-36 * this.carouselOffset + 1) + "rem;");
	}
}
