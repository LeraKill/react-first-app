import React, { useState } from 'react';

function ButtonShowMore({ value, isHide, onLinkClick }) {
	return (
		<button
			className={`link-show-more ${isHide ? "" : "link-hide"}`}

			onClick={onLinkClick}>
			{value}
		</button >
	)
}

export default ButtonShowMore