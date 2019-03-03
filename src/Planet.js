import React from 'react';

const Planet = ({ name, climate, population }) => {
	return (
		<div className="">
		<div>	
			<h2>{name}</h2>
			<p>Climate: {climate}</p>
			<p>Population: {population}</p>
		</div>
		</div>
		);
}

export default Planet;