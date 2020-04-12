import React from 'react';
import emailjs from 'emailjs-com';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sent: false,
      user_name: '',
      user_email: '',
      message: '',
      loading: false,
    }
    this.sendEmail = this.sendEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  sendEmail = (e) => {
    e.preventDefault();
    this.setState({...this, loading: true});

    emailjs.sendForm('gmail', 'template_Yipl3e7D', e.target, 'user_jrwB7E17ognPgubGmS5PW')
      .then(() => {
          this.setState(
            {...this,
            sent: true,
            user_name: '',
            user_email: '',
            message: '',
            loading: false});
      }, (error) => {
          console.log(error.text);
          this.setState({...this, loading: false});
      });
  }

  render() {
    const { sent, user_email, user_name, message, loading } = this.state;
    const load = (<div className="d-flex justify-content-center">
                      <div className="spinner-border text-primary" role="status">
                       <span className="sr-only">Loading...</span>
                      </div>
                    </div>);
    const thankyou = <p style={{color: 'purple'}}>Thank you for contacting me! I will be in touch</p>;
    return (
      <div className="my-3">
        <h2>Contact Me</h2>
        { sent && thankyou }
        { loading && load}
        <div className="col-md-6 col-8 offset-2 offset-md-3">
        <form onSubmit={this.sendEmail}>
          <input type="hidden" name="contact_number" />
          <div className="form-group text-left my-3">
            <label htmlFor="name">Your Name</label>
            <input type="text" className="form-control" id="name" name="user_name" placeholder="Enter Name" value={user_name} onChange={this.handleChange} />
          </div>
          <div className="form-group text-left my-3">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" name="user_email" placeholder="Enter email" value={user_email} onChange={this.handleChange} />
          </div>
          <div className="form-group text-left my-3">
            <label htmlFor="message">Your Message</label>
            <textarea className="form-control" id="textarea" rows="4" name="message" value={message} onChange={this.handleChange}></textarea>
          </div>
          <button type="submit" className={`btn btn-primary mb-3 ${loading ? "disabled" : ""}`}>Send</button>
        </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
