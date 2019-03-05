import React from 'react';

const Starship = ({ name, model}) => {
	return (
		<div>
			
			<h2>{name}</h2>
			<p><strong>Model:</strong> {model}</p>
		
		</div>
		);
}

export default Starship;
