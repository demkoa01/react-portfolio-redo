import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'All-Star Sporting Goods',
			description:
				'Mock up inventory site for a small company that has multiple locations. With this site, the employee can check other stores to refer guests to get their equipment.',
			image: 'All-Star-sporting-goods.jpg',
			technologies: ['HTML/CSS','Javascript'],
			github: 'https://github.com/P3T2-Realty-Rogues/living-real',
			deployed: 'https://cryptic-sea-45670.herokuapp.com/',
		},
		{
			name: 'Budget Tracker',
			description:
				'Budget tracker to help the user keep track of their expenses. This application works and saves data if the user is offline as well.',
			image: 'budget-tracker.jpg',
			technologies: ['HTML/CSS','Javascript'],
			github: 'https://github.com/demkoa01/budget-tracker',
			deployed: 'https://evening-earth-88072.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'Weather application that can report current weather in any city, share the 5 day forecase and save your previously searched cities.',
			image: 'weather-dash.jpg',
			technologies: ['HTML/CSS','Javascript'],
			github: 'https://github.com/demkoa01/Weather-Dashboard',
			deployed: 'https://demkoa01.github.io/Weather-Dashboard/',
		},
		{
			name: 'Food and a Flick',
			description:
				'Web API application that offers the user movie suggestions and dinner suggestions based based off a single ingredient and the users movie genre preference.',
			image: 'food-and-flick.jpg',
			technologies: ['HTML/CSS','Javascript'],
			github: 'https://github.com/brandonespencer/Food-and-a-Flick',
			deployed: 'https://brandonespencer.github.io/Food-and-a-Flick/',
		},
		{
			name: 'Javascript Quiz',
			description:
				'Javascript quiz to test the users knowledge on the coding language.',
			image: 'java-quiz.jpg',
			technologies: ['HTML/CSS','Javascript'],
			github: 'https://github.com/demkoa01/JavaScrpit-Quiz',
			deployed: 'https://demkoa01.github.io/JavaScrpit-Quiz/',
		},
		{
			name: 'Tech Blog',
			description:
				'Blog where users can post their thoughts on all things coding and whaterever else they want.',
			image: 'tech-blog.jpg',
			technologies: ['HTML/CSS','Javascript'],
			github: 'https://github.com/demkoa01/Tech-Blog',
			deployed: 'https://obscure-earth-61012.herokuapp.com/',
		}
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;