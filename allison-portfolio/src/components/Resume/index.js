import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>


			<div className="center bottom-spacing">
				<a href={require("../../assets/files/resume2022.pdf")} download>
					<h2>DOWNLOAD MY RESUME</h2>
				</a>
			</div>

            <div className="row education">
                <div className="three columns header-col">
                    <h2><span>Education</span></h2>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3 className="resume-title">Micigan State Universtiy</h3>
                            <p className="resume-detail">Coding Bootcamp Certificate - May 2022</p>

                        </div>

                        <div className="twelve columns">
                            <h3 className="resume-title">University of Minnesota - Twin Cities</h3>
                            <p className="resume-detail">Bachelor of Mechanical Engineering, Product Design Minor - May 2018</p>
                        </div>
                    </div>
                </div>
            </div> <br/>

            <div className="row work">
                <div className="three columns header-col">
                    <h2><span>Work</span></h2>
                </div>
                <div className="nine columns main-col">
                    <h3 className="resume-title">Target Corporation</h3>
                    <p className="resume-detail">Product Engineer, Furniture</p>
                    <p className="resume-detail-two">June 2018 - Present</p>
                    <p className="resume-description">At Target, I work to develop retail products for consumers, specifically furniture. I have worked on over 300 products across 6 different brands randing in price.
					I work daily with cross-functional partners including sourcing managers, buyers, packaging teams, designers as well as working daily with vendors + facotries across the world. </p>
                </div>
            </div> <br/>

            <div className="row skill">
                <div className="three columns header-col">
                    <h2><span>Technical Skills</span></h2>
                </div>
                <div className="nine columns main-col">
                    <p>My technical skills range from development tools to design phyiscal products to virtual products + many things in between</p>
                    <div className="bars">
                        <ul className="skills">
                            <li>Adobe Creative Suite</li>
                            <li>SolidWorks</li>
                            <li>3DS Max</li>
                            <li>JavaScript</li>
                            <li >HTML + CSS Styling</li>
                            <li >Node.js</li>
                            <li >Express.js</li>
                            <li >MySQL + NoSQL </li>
                            <li >React</li>
                            <li >Mongoose + MongoDB</li>
                            <li >Heroku</li>
                            <li >GitHub + GitLab</li>
                        </ul>
                    </div>
                </div>
            </div>

		</section>
	);
}

export default Resume;