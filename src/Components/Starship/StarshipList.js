import React from 'react';
import Starship from './Starship.js';

const StarshipList = ({ starships }) => {
	
		return (
			<div>

				{
				starships.map((starship, i) => {
					return (
						<Starship
							
							key={i}
							name={starships[i].name}
							model={starships[i].model}
							
							/>
						);
				})

			}
			</div>
	);
}




export default StarshipList;
