import React from 'react';
import Nubi from '../Assets/Images/nubi_website.png';
import MovieSearch from '../Assets/Images/movie_search.png';
import Restaurant from '../Assets/Images/restaurant_app.png';
import ChatApp from '../Assets/Images/chit_chat.png';
import Portfolio from '../Assets/Images/portfolio_site.png';
import Treevia from '../Assets/Images/treevia-app.png';
import Vggsite from '../Assets/Images/vgg_website.png';
import Leren from '../Assets/Images/leren_app.png';

const Projects = () => {
  return(
    <div className='projects'>
      <div className='projects-heading'>
        <h3>THESE ARE SOME OF MY PROJECTS</h3>
      </div>
      <div className='projects-container'>
        <div className='project-set'>
          <a href='https://github.com/pauluzo/restaurant_app' >
            <img alt='Restaurant App' src={Restaurant} />
            <div className='project-overlay'>
              RESTAURANT APP
            </div>
          </a>
        </div>
        <div className='project-set'>
          <a href='https://github.com/pauluzo/Tree-Via' >
            <img alt='Trivia game app' src={Treevia} />
            <div className='project-overlay'>
              TRIVIA GAME APP
            </div>
          </a>
        </div>
        <div className='project-set'>
          <a href='https://pauluzo.github.io/' >
            <img alt='Portfolio site' src={Portfolio} />
            <div className='project-overlay'>
              PORTFOLIO SITE
            </div>
          </a>
        </div>
        <div className='project-set'>
          <a href='https://pauluzo.github.io/movie_search' >
            <img alt='Movie Search' src={MovieSearch} />
            <div className='project-overlay'>
              MOVIE SEARCH
            </div>
          </a>
        </div>
        <div className='project-set'>
          <a href='https://pauluzo.github.io/nubieducation' >
            <img alt='Website' src={Nubi} />
            <div className='project-overlay'>
              DEMO WEBSITE
            </div>
          </a>
        </div>
      </div>
      <div className='projects-heading'>
        <h3>FULL STACK PROJECTS</h3>
      </div>
      <div className='projects-container'>
        <div className='project-set'>
          <a href='https://leren.herokuapp.com/' >
            <img alt='Leren. Web App' src={Leren} />
            <div className='project-overlay'>
              Leren. Web Application
            </div>
          </a>
        </div>
        <div className='project-set'>
          <a href='https://vgg-internship-website.herokuapp.com' >
            <img alt='Garden Academy Website' src={Vggsite} />
            <div className='project-overlay'>
              Garden Academy Website
            </div>
          </a>
        </div>
        <div className='project-set'>
          <a href='https://chit-chat-88779.firebaseapp.com' >
            <img alt='Chat App' src={ChatApp} />
            <div className='project-overlay'>
              CHAT APP
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;