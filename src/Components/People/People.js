import React from 'react';

const People = ({ name, height, gender}) => {
	return (
	
			<div>
					<h2>{name}</h2>
					<p>Height: {height}</p>
					<p>Gender: {gender}</p>
			</div>
		
		);
}

export default People;
