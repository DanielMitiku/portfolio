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
      errors: {},
    };
    this.sendEmail = this.sendEmail.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  validateForm = () => {
    const { user_email, user_name, message } = this.state;
    const errors = {};
    if (!user_email) {
      errors.user_email = 'This field is required';
    }
    if (!user_name) {
      errors.user_name = 'This field is required';
    }
    if (!message) {
      errors.message = 'This field is required';
    }
    this.setState({ ...this, errors });
    if (Object.keys(errors).length === 0) {
      return true;
    }
    return false;
  }

  sendEmail = e => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ ...this, loading: true });

      emailjs.sendForm('gmail', 'template_Yipl3e7D', e.target, 'user_jrwB7E17ognPgubGmS5PW')
        .then(() => {
          this.setState(
            {
              ...this,
              sent: true,
              user_name: '',
              user_email: '',
              message: '',
              loading: false,
              errors: {},
            },
          );
        }, () => {
          this.setState({ ...this, loading: false });
        });
    }
  }

  render() {
    const {
      sent, user_email, user_name, message, loading, errors,
    } = this.state;
    const load = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
    const thankyou = <p style={{ color: 'purple' }}>Thank you for contacting me! I will be in touch</p>;
    return (
      <div className="my-3">
        <h2>Contact Me</h2>
        { sent && thankyou }
        { loading && load}
        <div className="col-8 offset-2">
          <form onSubmit={this.sendEmail}>
            <input type="hidden" name="contact_number" />
            <div className="form-group text-left my-3">
              <label htmlFor="name">Your Name</label>
              <input type="text" className={`form-control ${errors.user_name ? 'is-invalid' : ''}`} id="name" name="user_name" placeholder="Enter Name" value={user_name} onChange={this.handleChange} />
              {errors.user_name && <span className={`${errors.user_name ? 'invalid-feedback' : ''}`}>{errors.user_name}</span>}
            </div>
            <div className="form-group text-left my-3">
              <label htmlFor="email">Email address</label>
              <input type="email" className={`form-control ${errors.user_email ? 'is-invalid' : ''}`} id="email" name="user_email" placeholder="Enter email" value={user_email} onChange={this.handleChange} />
              {errors.user_email && <span className={`${errors.user_email ? 'invalid-feedback' : ''}`}>{errors.user_email}</span>}
            </div>
            <div className="form-group text-left my-3">
              <label htmlFor="message">Your Message</label>
              <textarea className={`form-control ${errors.message ? 'is-invalid' : ''}`} id="textarea" rows="4" name="message" value={message} onChange={this.handleChange} />
              {errors.message && <span className={`${errors.message ? 'invalid-feedback' : ''}`}>{errors.message}</span>}
            </div>
            <button type="submit" className={`btn btn-outline-dark mb-3 ${loading ? 'disabled' : ''}`}>Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
