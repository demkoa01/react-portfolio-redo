import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/files/resume2022.pdf")} download>
					<h4>Download my Resume</h4>
				</a>
			</div>
			<div>
				<h5>Technical Skills</h5>
				<ol>
                    <li>Adobe Creative Suite</li>
                    <li>SolidWorks</li>
                    <li>3Ds Max</li>
					<li>HTML + CSS Styling </li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL + No SQL</li>
                    <li>Mongoose + MongoDB</li>
					<li>React</li>
					<li>Github + Gitlab</li> 
                    <li>Heroku</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;