import React from 'react';
import People from './People.js';

const PeopleList = ({ people }) => {
	
		return (
			<div>

				{
				people.map((person, i) => {
					return (
						<People
							
							key={i}
							name={people[i].name}
							height={people[i].height}
							gender={people[i].gender}
							
							/>
						);
				})

			}
			</div>
	);
}




export default PeopleList;
