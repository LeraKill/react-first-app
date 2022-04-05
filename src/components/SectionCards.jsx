import React, { useState, useMemo } from 'react'

import { CardItem, ButtonShowMore } from '../components'

function SectionCards({ items }) {

	const [initialCards, restCards] = useMemo(() => {
		const mappedCards = items.map(cardData => (
			<CardItem key={cardData.id} {...cardData} />
		));
		return [mappedCards.slice(0, 16), mappedCards.slice(16, items.length)];
	}, [items])

	const [isHide, setHide] = useState('false');

	function handleLink(event) {
		setHide(prevValue => !prevValue);
	}


	if (!items.length) {
		return (
			<div className="windows8">
				<div className="wBall" id="wBall_1">
					<div className="wInnerBall"></div>
				</div>
				<div className="wBall" id="wBall_2">
					<div className="wInnerBall"></div>
				</div>
				<div className="wBall" id="wBall_3">
					<div className="wInnerBall"></div>
				</div>
				<div className="wBall" id="wBall_4">
					<div className="wInnerBall"></div>
				</div>
				<div className="wBall" id="wBall_5">
					<div className="wInnerBall"></div>
				</div>
			</div>
		)
	}

	return (
		<section className='page__cards cards'>
			<div className='cards__body'>
				{initialCards}
				{!isHide && restCards}
			</div>
			<ButtonShowMore value={`${isHide ? 'Показать еще' : 'Скрыть'}`} isHide={isHide} onLinkClick={handleLink} />
		</section>
	)
}

export default SectionCards