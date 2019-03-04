import React from 'react';

const Planet = ({ name, climate, population }) => {
	return (
		<div>
			
			<h2>{name}</h2>
			<p><strong>Climate:</strong> {climate}</p>
			<p><strong>Population:</strong> {population}</p>
		
		</div>
		);
}

export default Planet;