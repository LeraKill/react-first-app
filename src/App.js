import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { SectionCards } from './components';

function App() {
	const [cards, setCards] = useState([])
	useEffect(() => {
		axios.get('https://6075786f0baf7c0017fa64ce.mockapi.io/products').then(({ data }) => {
			setCards(data)
		})
	}, [setCards]);

	return (
		<div className='wrapper'>
			<div className='main__page page'>
				<div className='page__container __container'>
					<h1 className='page__title'>Похожие объявления</h1>
					<SectionCards items={cards} />
				</div>
			</div>
		</div>
	)
}

export default App;