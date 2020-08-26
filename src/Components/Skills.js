import React from 'react';
import Flutter from '../Assets/Images/flutter-logo.png';
import Node from '../Assets/Images/node-logo.png';
import Dart from '../Assets/Images/dart-logo.png';
import ReactLogo from '../Assets/Images/logo192.png';
import ReactX from '../Assets/Images/rxjs-logo.png';
import Html from '../Assets/Images/html5.png';
import JavaScript from '../Assets/Images/js-logo.png';

const Skills = () => {
  return(
    <div className='skills'>
      <div className='skills-container'>
        <div className='skills-heading'>
          <span>
            SKILLS
          </span>
        </div>
        <div className='skills-details'>
          <div className='skill-set'>
            <img alt='html-icon' src={Html} style={{width: '2em'}}/>
            <h3>HTML & CSS</h3>
            <p>
              I have a sound knowledge and application of HTML & CSS concepts
              and how they relate. Understanding the need for and use of CSS libraries
              such as SASS for simplifying cascade styling.
            </p>
          </div>
          <div className='skill-set'>
            <img alt='js-icon' src={JavaScript} style={{width: '2em'}}/>
            <h3>JavaScript</h3>
            <p>
              Having a wide knowledge of vanilla javascript, I understand
              the uniqueness of this programming language and its uses for the web.
              This knowledge has helped me in greatly in understanding javascript 
              frameworks, how they work internally, and what they stand to achieve, 
              making it easier for me to get along with new frameworks or libraries.
            </p>
          </div>
          <div className='skill-set'>
            <img alt='dart-icon' src={Dart} style={{width: '2em'}} />
            <h3>Dart</h3>
            <p>
              Being a typical OOP language, my experience with Dart has provided
              me with practical understanding of statically-typed programming - 
              which I have grown to love - as well as the four principal OOP concepts
              and how they are all related.
            </p>
          </div>
          <div className='skill-set'>
            <img alt='react-logo' src={ReactLogo} style={{width: '2em'}}/>
            <h3>React</h3>
            <p>
              Proven experience working with React, React-Hooks and Redux to build projects 
              such as a robust website with a custom content management system, 
              Leren - a udemy-like web application for uploading and watching courses, 
              a movie search app, a chat app and this portfolio site.
            </p>
          </div>
          <div className='skill-set'>
            <img alt='node-logo' src={Node} style={{width: '2em'}}/>
            <h3>Node JS</h3>
            <p>
              Extensive use of NodeJs for backend development and for scaling 
              applications to full-stack. Practical use of Express framework, 
              and noSQL databases - MongoDB and Firebase - to add smooth 
              running backend capabilities to some of my projects, such as the 
              chit-chat app, Leren app and the Garden Academy website.
            </p>
          </div>
          <div className='skill-set'>
            <img alt='flutter-icon' src={Flutter} style={{width: '2em'}}></img>
            <h3>Flutter</h3>
            <p>
              Possessing great understanding and use of the Flutter framework
              built on Dart, to provide excellent cross-platform mobile
              experiences for users. Practical knowledge of Dart Streams and BLoC
              pattern to simplify state management, and ease scalability of the mobile app.
            </p>
          </div>
          <div className='skill-set'>
            <img alt='flutter-icon' src={ReactX} style={{width: '2em'}}></img>
            <h3>Reactive Progamming</h3>
            <p>
              Ample use of reactive programming concepts to facilitate easier
              implementation of BLoC pattern and state management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;