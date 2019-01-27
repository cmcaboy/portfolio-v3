import React from "react";
import { Button } from "semantic-ui-react";
import { database } from "../firebase/firebase";

class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      success: "",
      error: ""
    };
  }
  onSubmit = event => {
    console.log("state: ", this.state);
    const { name, email, message } = this.state;
    this.setState({ success: "", error: "" });
    event.preventDefault();

    if (!name) {
      this.setState({ error: "Please specify a name!" });
      return null;
    } else if (!email) {
      this.setState({ error: "Please specify an email!" });
      return null;
    } else if (!message) {
      this.setState({ error: "Please specify a message!" });
      return null;
    }

    database
      .ref("contact")
      .push({
        name,
        email,
        message
      })
      .then(() =>
        this.setState({
          success: "Thank you!",
          error: "",
          name: "",
          email: "",
          message: ""
        })
      )
      .catch(error => {
        console.log("error: ", error);
        this.setState({
          error: "Failed to send! Please try again later.",
          success: ""
        });
      });
  };

  render() {
    const { success, error } = this.state;
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

            <Button className="submit-button" primary>
              Submit
            </Button>
            {!!success && <p className="success">{success}</p>}
            {!!error && <p className="error">{error}</p>}
          </div>
        </form>
      </div>
    );
  }
}

export default ContactMe;
