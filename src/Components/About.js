import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import ProfilePic from '../Assets/Images/profile_pic.jpg';

const About = () => {
  return(
		<div className='about'>
			<div className='about-container'>
				<div className='picture-container'>
					<div className='profile-pic'>
            <img alt='profile-pic' src={ProfilePic} />
          </div>
				</div>
				<div className='about-details'>
					<div className='about-heading'>
            <h2>About Me</h2>
          </div>
					<p>
						I am a full-stack developer with experience using various 
						software tools such as HTML, CSS, Bootstrap, JavaScript,
						among others. I love to learn and enjoy working with teams, however I can also work alone
						if need be.
            <br/> <br/>
						Having a passion for software development as a whole, I have also
						gathered practical experience in software architecture - by applying 
						standard architectural principles - to ensure scalability and code-reusability 
						of software products in use. Possessing an in-depth understanding of
						Business Logic Component (BLoC) pattern and plugin architecture, as well as
						class-based and object-based data modelling.
						<br/><br/>
						Also, I am a social person who loves to meet new people and 
            have discussions that can range over a number of fields. I enjoy 
						music, football, reading, video games, movies and travelling.
					</p>
					<button className='resume'>
						<a target='_blank' rel='noopener noreferrer' href='https://drive.google.com/file/d/1RN63k00bQz46UpFfBzQzQxwwkLKRIXwZ/view?usp=sharing'>
							<FontAwesomeIcon icon={faDownload} />
							  My Resume
						</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default About;