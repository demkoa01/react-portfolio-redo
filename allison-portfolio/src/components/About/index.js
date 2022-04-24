import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/profile-pic.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
                    Hi! I am an early-career software engineer with a background in mechanical engineering. More specifically, I have been working at Target Corporate as a Product Engineer since June 2018 where I have been developing furniture for retail.
                    I am eager to begin blending my product and retail experience with my web development skills to create applications and sites that are user friendly, asthetically pleasing and powerful. 
                    I love collaborating with others and thinking outside of the box! 
				</p>
			</div>

            <div className='center'>
                <div className='columns contact-details'>
                    <h2>Contact Information</h2>    
                    <p className='address'>
                        <span>Allison Demkovich</span><br/>
                        <span>847.852.9500</span><br/>
                        <span>demkovich.allison@gmail.com</span><br/>
                        <span>Minneapolis, MN</span><br/>
                    </p>
                </div>
            </div>
		</section>
	);
}

export default About;