import React from "react";
import { Button } from "semantic-ui-react";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }
  onSubmit = event => {
    event.preventDefault();

    console.log("name: ", this.state.name);
    console.log("email: ", this.state.email);
    console.log("message: ", this.state.message);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="contact-form">
            <p className="landing-title">Let's get in touch...</p>
            <input
              className="contact-item input"
              type="name"
              name="name"
              placeholder="Name"
              onChange={e => this.setState({ name: e.target.value })}
              value={this.state.name}
            />
            <input
              className="contact-item input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={e => this.setState({ email: e.target.value })}
              value={this.state.email}
            />
            <textarea
              className="contact-item doubleinput"
              type="message"
              name="message"
              placeholder="Message"
              onChange={e => this.setState({ message: e.target.value })}
              value={this.state.message}
            />

            <Button primary>Submit</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactMe;
