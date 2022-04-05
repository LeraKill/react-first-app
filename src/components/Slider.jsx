import React from 'react'

function Slider({ items, slideIndex, moveDot }) {
	return (
		<div className='item-card__slider slider__container'>
			{items.map((item, index) =>
				<div
					className={`${slideIndex === index + 1 ? "slide active-anim" : "slide"}`}
					key={`${item}_${index}`}>
					<img src={item} alt="" />
				</div>
			)}
			<div className='container__dots'>
				{Array.from({ length: items.length }).map((dot, index) =>
					<div key={`${dot}_${index}`}
						className={slideIndex === index + 1 ? "dot active" : "dot"}
						onClick={() => moveDot(index + 1)}>
					</div>
				)}
			</div>
		</div>
	)
}

export default Slider