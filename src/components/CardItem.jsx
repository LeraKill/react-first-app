import React, { useState, useEffect } from 'react';

import { Slider } from '../components';

import Compare from '../assets/icons/compare.svg';
import Like from '../assets/icons/like.svg';
import Delivery from '../assets/icons/delivery.svg';
import Deal from '../assets/icons/deal.svg';

import { pictures, shuffle } from '../helpers.js';

export default React.memo(
	function CardItem({ oldPrice, price, title, locality, date, seen }) {
		const [images] = useState(shuffle(pictures));
		const [isSelectedCompare, setSelectedCompare] = useState(false);
		const [isSelectedLike, setSelectedLike] = useState(false);
		const [isSelectedDelivery, setSelectedDelivery] = useState(false);
		const [isSelectedDeal, setSelectedDeal] = useState(false);
		const [slideIndex, setSlideIndex] = useState(1);

		function toggleClassCompare() {
			setSelectedCompare(prevState => !prevState);
		}
		function toggleClassLike() {
			setSelectedLike(prevState => !prevState);
		}
		function toggleClassDelivery() {
			setSelectedDelivery(prevState => !prevState);
		}
		function toggleClassDeal() {
			setSelectedDeal(prevState => !prevState);
		}
		const moveDot = index => {
			setSlideIndex(index);
		}
		function getFullDate(date) {
			const newDate = new Date(date);
			let newDay = newDate.getDate();
			let newMonth = newDate.getMonth();
			let newYear = newDate.getFullYear();
			let newHours = newDate.getHours();
			let newMinutes = newDate.getMinutes();

			if (newDay < 10) {
				newDay = '0' + newDay;
			} else if (newMonth === 0) {
				newMonth = newMonth + 1;
			}
			if (newMonth < 10) {
				newMonth = '0' + newMonth;
			}
			if (newYear > 1900) {
				newYear = newYear - 1900;
			}
			return `${newDay}.${newMonth}.${newYear}, ${newHours}.${newMinutes}`;
		}

		return (
			<div className='cards__column'>
				<div className={`cards__item item-card ${seen ? '_seen' : ''}`}>
					{seen && <div className='item-card__seen'>
						<span>Просмотрено</span>
					</div>}
					<Slider items={images} slideIndex={slideIndex} moveDot={moveDot} />
					<div className='item-card__markers'>
						<div
							className={`icon item-card__markers-icon ${isSelectedCompare ? "_selected" : ""}`}
							onClick={toggleClassCompare}>
							<Compare width='24' height='24' fill='white' />
						</div>
						<div
							className={`icon item-card__markers-icon ${isSelectedLike ? "_selected" : ""}`}
							onClick={toggleClassLike}>
							<Like width='24' height='24' fill='white' />
						</div>
					</div>
					<div className='item-card__info'>
						<div className='item-card__info-first'>
							<div className='item-card__info-price'>
								<span className='item-card__old-price'>{oldPrice} ₽</span>
								<span className='item-card__new-price'>{price} ₽</span>
							</div>
							<div className='item-card__info-features'>
								<div
									className={`icon item-card__info-features-icon ${isSelectedDelivery ? "_selected" : ""}`}
									onClick={toggleClassDelivery}>
									<Delivery width='24' height='24' fill='#c7c7c7' />
								</div>
								<div
									className={`icon item-card__info-features-icon ${isSelectedDeal ? "_selected" : ""}`}
									onClick={toggleClassDeal}>
									<Deal width='24' height='24' fill='#c4c4c4' />
								</div>
							</div>
						</div>
						<div className='item-card__info-second'>
							<p className='item-card__title'>{title}</p>
							<div className='item-card__extra-info'>
								<span>{locality}</span>
								<span>{getFullDate(date)}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
)


