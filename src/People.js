import React from 'react';

const People = ({ name, height, gender}) => {
	return (
		<div className="">
			<div>
					<h2>{name}</h2>
					<p>Height: {height}</p>
					<p>Gender: {gender}</p>
			</div>
		</div>
		);
}

export default People;
