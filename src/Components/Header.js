import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = props => {
  const { changeSelection } = props;
  return (
    <div className='Header'>
      <div onClick={() => changeSelection(0)}>
        HOME
      </div>
      <div onClick={() => changeSelection(1)}>
        ABOUT
      </div>
      <div onClick={() => changeSelection(2)}>
        SKILLS
      </div>
      <div onClick={() => changeSelection(3)}>
        PROJECTS
      </div>
      <div onClick={() => changeSelection(4)}>
        CONTACT
      </div>
    </div>
  );
};

class MenuTotal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  handleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { changeSelection } = this.props;
    let className = this.state.isOpen ? 'menu-container menu-display' : 'menu-container'
    let icon = this.state.isOpen ? faTimes : faBars;
    return(
      <div className='menu-cover' >
        <div className='menu-button-container'>
          <div className='menu-button' onClick={this.handleMenu}>
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
        <div className={className}>
          <div 
            onClick={() => {
              changeSelection(0);
              this.handleMenu();
            }}
          >
            HOME
          </div>
          <div 
            onClick={() => {
              changeSelection(1);
              this.handleMenu();
            }}
          >
            ABOUT
          </div>
          <div 
            onClick={() => {
              changeSelection(2);
              this.handleMenu();
            }}
          >
            SKILLS
          </div>
          <div 
            onClick={() => {
              changeSelection(3);
              this.handleMenu();
            }}
          >
            PROJECTS
          </div>
          <div 
            onClick={() => {
              changeSelection(4);
              this.handleMenu();
            }}
          >
            CONTACT
          </div>
        </div>
      </div>
    );
  }
}

export { Header, MenuTotal };

