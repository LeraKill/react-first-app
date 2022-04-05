import React, { useState } from 'react';

import { Slider } from '../components';

import Compare from '../assets/icons/compare.svg';
import Like from '../assets/icons/like.svg';
import Delivery from '../assets/icons/delivery.svg';
import Deal from '../assets/icons/deal.svg';



export default React.memo(
	function CardItem({ oldPrice, price, title, locality, date, seen }) {

		const pictures = ['https://images.unsplash.com/photo-1634820889655-00f3e38319ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0OTA2OTAxMg&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1646404094528-92f946613413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0ODkxODgwMw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1591636687027-a157c53387cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0OTA2OTA5OA&ixlib=rb-1.2.1&q=80&w=1080'];

		function shuffle(arr) {
			arr.sort(() => Math.random() - 0.5);
			return arr;
		}

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
					<Slider items={shuffle(pictures)} slideIndex={slideIndex} moveDot={moveDot} />

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


