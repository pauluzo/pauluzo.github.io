import React from 'react';
import Twitter from '../Assets/Images/twitter_logo.png';
import Github from '../Assets/Images/github_logo.png';
import Gmail from '../Assets/Images/gmail_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as emailjs from 'emailjs-com';

const Contact = () => {
  return(
    <div className='contact-container' >
      <Form/>
      <Footer/>
    </div>
  );
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      email: '',
      subject: '',
      message: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName, email, subject, message} = this.state;
    if( firstName === '' || email === '' || message === '') {
      alert(`One of the required fields is empty. Please ensure you fill all fields and try again`);
      return;
    }

    let template = {
      name: firstName,
      email: email,
      subject: subject,
      message: message,
    }

    emailjs.send('gmail', 'portfolio_form', template, 'user_H6n4q7YXYQDtjhlS2KIWI')
    .then(() => {
      alert(`Message sent succesfully!`);
      this.setState({
        firstname: '',
        email: '',
        subject: '',
        message: '',
      });
    }, (err) => {
      console.log(err);
      alert(`Error sending message. Check your connection.`)
    });
  }

  render() {
    return(
      <div className='form_container'>
        <div className='form-intro'>
          <div className='icon-container'>
            <FontAwesomeIcon icon={faEnvelope} size='4x'/>
          </div>
          <div className='form-message'>
            If you would like to reach out to me, please send a message
            and you can expect a prompt reply.
          </div>
        </div>
        <form style={{width: '100%'}} onSubmit={this.handleSubmit}>
          <div className='category'>
            <div className='input_title'>Name*</div>
            <input name='firstName' type='text' 
              onChange={this.handleChange} value={this.state.firstName}
            />
          </div>
          <div className='category'>
            <div className='input_title'>Email Address*</div>
            <input name='email' type='text' 
              onChange={this.handleChange} value={this.state.email}
            />
          </div>
          <div className='category'>
            <div className='input_title'>Subject</div>
            <input name='subject' type='text' 
              onChange={this.handleChange} value={this.state.subject}
            />
          </div>
          <div className='category'>
            <div className='input_title'>Message*</div>
            <textarea name='message' type='text' 
              onChange={this.handleChange} value={this.state.message}
            />
          </div>
          <div>
            <input className='submit_button' type='submit' value='SEND'/>
          </div>
        </form>
      </div>
    );
  }
}

const Footer = () => {
  return(
    <div className='footer_outer_container'>
      <div className='spacer'></div>
      <div className='footer_inner_container'>
        <a target='_blank' rel='noopener noreferrer' href='https://www.github.com/pauluzo'><img src={Github} alt='github'></img></a>
        <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/papizone'><img src={Twitter} alt='twitter'></img></a>
        <a target='_blank' rel='noopener noreferrer' href='mailto:okaforpaul26@gmail.com'><img src={Gmail} alt='gmail'></img></a>
      </div>
      <div className='spacer'></div>
    </div>
  );
}

export default Contact;