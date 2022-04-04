import React, { useState } from 'react';

import { Slider } from '../components';


function CardItem({ oldPrice, price, title, locality, date, seen }) {
	const [isSelectedStats, setSelecredStats] = useState(false);
	const [isSelectedLike, setSelecredLike] = useState(false);
	const [isSelectedDelivery, setSelecredDelivery] = useState(false);
	const [isSelectedSecurity, setSelecredSecurity] = useState(false);

	const [slideIndex, setSlideIndex] = useState(1)

	function toggleClassStats() {
		setSelecredStats(!isSelectedStats);
	}
	function toggleClassLike() {
		setSelecredLike(!isSelectedLike);
	}
	function toggleClassDelivery() {
		setSelecredDelivery(!isSelectedDelivery);
	}
	function toggleClassSecurity() {
		setSelecredSecurity(!isSelectedSecurity);
	}

	const moveDot = index => {
		setSlideIndex(index);
	}

	return (
		<div className='cards__column'>
			<div className={`cards__item item-card ${seen ? '_seen' : ''}`}>
				<div className='item-card__seen'>
					<span>Просмотрено</span>
				</div>
				<Slider items={['https://images.unsplash.com/photo-1634820889655-00f3e38319ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0OTA2OTAxMg&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1646404094528-92f946613413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0ODkxODgwMw&ixlib=rb-1.2.1&q=80&w=1080', 'https://images.unsplash.com/photo-1591636687027-a157c53387cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0OTA2OTA5OA&ixlib=rb-1.2.1&q=80&w=1080']} slideIndex={slideIndex} moveDot={moveDot} />

				<div className='item-card__markers'>
					<span
						className={`icon icon-stats ${isSelectedStats ? '_active' : ''}`}
						onClick={toggleClassStats} />
					<span
						className={`icon icon-like ${isSelectedLike ? '_active' : ''}`}
						onClick={toggleClassLike} />
				</div>
				<div className='item-card__info'>
					<div className='item-card__info-first'>
						<div className='item-card__info-price'>
							<span className='item-card__old-price'>{oldPrice} ₽</span>
							<span className='item-card__new-price'>{price} ₽</span>
						</div>
						<div className='item-card__info-features'>
							<span
								className={`icon icon-delivery ${isSelectedDelivery ? '_active' : ''}`}
								onClick={toggleClassDelivery} />
							<span
								className={`icon icon-security ${isSelectedSecurity ? '_active' : ''}`}
								onClick={toggleClassSecurity} />
						</div>
					</div>
					<div className='item-card__info-second'>
						<p className='item-card__title'>{title}</p>
						<div className='item-card__extra-info'>
							<span>{locality}</span>
							<span>{date}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardItem