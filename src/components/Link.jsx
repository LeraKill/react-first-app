import React, { useState } from 'react';



function Link({ value, isHide, handleLink }) {

	return (
		<a
			className={`link-show-more ${isHide ? "" : "link-hide"}`}
			href='#'
			onClick={handleLink}>
			{value}
		</a >
	)
}

export default Link