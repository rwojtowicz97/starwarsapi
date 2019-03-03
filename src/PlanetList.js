import React from 'react';
import Planet from './Planet';

const planetList = ({ planets }) => {
	
		return (
			<div>

				{
				planets.map((planet, i) => {
					return (
						<Planet
							key={i}
							name={planets[i].name}
							climate={planets[i].climate}
							population={planets[i].population}
							/>
						);
				})

			}
			</div>
	);
}




export default planetList;