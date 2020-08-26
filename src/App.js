import React from 'react';
import { Header, MenuTotal } from './Components/Header';
import Home from './Components/Home'
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 0,
    }
  }

  home = React.createRef();
  about = React.createRef();
  skills = React.createRef();
  projects = React.createRef();
  contact = React.createRef();

  changeSelection = index => {
    this.setState({
      selected: index
    });
  };

  componentDidUpdate() {
    this.scrollToSection(this.state.selected);
  }

  scrollToSection = index => {
    let refs = [
      this.home,
      this.about,
      this.skills,
      this.projects,
      this.contact,
    ];

    if (refs[index].current) {
      refs[index].current.scrollIntoView({
        behavior: "smooth",
        nearest: "block"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className='Header-container'>
          <Header changeSelection={this.changeSelection} />
          <MenuTotal changeSelection={this.changeSelection} />
        </div>
        <div ref={this.home}>
          <Home/>
        </div>
        <div ref={this.about}>
          <About/>
        </div>
        <div ref={this.skills}>
          <Skills/>
        </div>
        <div ref={this.projects}>
          <Projects/>
        </div>
        <div ref={this.contact}>
          <Contact/>
        </div>
      </div>
    );
  }
}

export default App;
