import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'All-Star Sporting Goods',
			description:
				'Mock up inventory site for a small company that has multiple locations. With this site, the employee can check other stores to refer guests to get their equipment.',
			image: 'All-Star-sporting-goods.jpg',
			github: 'https://github.com/P3T2-Realty-Rogues/living-real',
			deployed: 'https://cryptic-sea-45670.herokuapp.com/',
		},
		{
			name: 'Budget Tracker',
			description:
				'Budget tracker to help the user keep track of their expenses. This application works and saves data if the user is offline as well.',
			image: 'budget-tracker.jpg',
			github: 'https://github.com/demkoa01/budget-tracker',
			deployed: 'https://evening-earth-88072.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'Weather application that can report current weather in any city, share the 5 day forecase and save your previously searched cities.',
			image: 'weather-dash.jpg',
			github: 'https://github.com/demkoa01/Weather-Dashboard',
			deployed: 'https://demkoa01.github.io/Weather-Dashboard/',
		},
		{
			name: 'Food and a Flick',
			description:
				'Web API application that offers the user movie suggestions and dinner suggestions based based off a single ingredient and the users movie genre preference.',
			image: 'food-and-flick.jpg',
			github: 'https://github.com/brandonespencer/Food-and-a-Flick',
			deployed: 'https://brandonespencer.github.io/Food-and-a-Flick/',
		},
		{
			name: 'Javascript Quiz',
			description:
				'Javascript quiz to test the users knowledge on the coding language.',
			image: 'java-quiz.jpg',
			github: 'https://github.com/demkoa01/JavaScrpit-Quiz',
			deployed: 'https://demkoa01.github.io/JavaScrpit-Quiz/',
		},
		{
			name: 'Tech Blog',
			description:
				'Blog where users can post their thoughts on all things coding and whaterever else they want.',
			image: 'tech-blog.jpg',
			github: 'https://github.com/demkoa01/Tech-Blog',
			deployed: 'https://obscure-earth-61012.herokuapp.com/',
		},
		{
			name: 'Sweet Treats',
			description:
				"Sweet Treats is an online shop where lovers of baked goods can peruse through vairous desserts, shop for desserts or create custom dessert orders with the Sweet Treats bakery for their next big event. New shoppers are able to signup while returning customers can simply login with an email & password to place orders. The customer's cart can be viewed and updated easily and when a customer is signed into the site, they are able to securely checkout using Stripe.",
			image: 'sweet-treat.jpg',
			github: 'https://github.com/demkoa01/react-portfolio-redo',
			deployed: 'https://thawing-tor-90968.herokuapp.com/',
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