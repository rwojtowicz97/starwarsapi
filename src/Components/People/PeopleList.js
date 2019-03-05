import React from 'react';
import People from './People.js';

const PeopleList = ({ people }) => {
	
		return (
			<div>

				{
				people.map((people, i) => {
					return (
						<People
							
							key={i}
							name={People[i].name}
							height={People[i].height}
							gender={People[i].gender}
							
							/>
						);
				})

			}
			</div>
	);
}




export default PeopleList;
