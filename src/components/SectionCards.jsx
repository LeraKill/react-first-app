import React, { useState } from 'react'

import { CardItem, Link } from '../components'

function SectionCards({ items }) {
	const [value, setValue] = useState('Показать еще');
	const [isHide, setHide] = useState('false');

	function handleLink(event) {
		event.preventDefault();
		setValue((value === 'Показать еще') ? 'Скрыть' : 'Показать еще');
		setHide(!isHide);
	}

	return (
		<section className='page__cards cards'>
			<div className='cards__body'>
				{items && items.slice(0, 16).map(obj => (
					<CardItem key={obj.id}
						{...obj}
					/>
				))}
				{!isHide &&
					items.slice(16, 100).map(obj => (
						<CardItem key={obj.id}
							{...obj}
						/>))
				}
			</div>
			<Link value={value} isHide={isHide} handleLink={handleLink} />
		</section>
	)
}

export default SectionCards