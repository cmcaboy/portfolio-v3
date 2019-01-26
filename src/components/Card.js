import React from "react";
import CardItem from "./CardItem";
import ReactModal from "react-modal";

const customStyles = {
  content: {
    margin: "10% 20%",
    borderWidth: "2px",
    borderColor: "#364051",
    overflowY: "scroll"
  }
};

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    };
  }
  componentWillMount = () => ReactModal.setAppElement("body");

  toggleModal = () =>
    this.setState(prevState => ({ isClicked: !prevState.isClicked }));

  renderModal = () => {
    const {
      label,
      program,
      GPA,
      years,
      status,
      description,
      location,
      roles = []
    } = this.props.item;
    return (
      <ReactModal
        style={customStyles}
        contentLabel={this.props.item.label}
        isOpen={this.state.isClicked}
        onRequestClose={this.toggleModal}
      >
        <div className="card-modal">
          <p className="modalHeading">{label}</p>
          {!!description && <p className="modalSubheading">{description}</p>}
          {!!location && <p className="modalSubheading">{location}</p>}
          <p className="modalSubheading">{years}</p>
          <hr className="landing-hr" />
          {!!program && program.map(prog => <p key={prog}>{prog}</p>)}
          {!!status && <p>Status: {status}</p>}
          {!!GPA && <p>{GPA} GPA</p>}
          {!!roles &&
            roles.map(role => (
              <div key={role.role}>
                <p className="role-heading">{role.role}</p>
                <p className="modalSubheading">{role.years}</p>
                <ul className="resp-list">
                  {role.responsibilities.map((resp, i) => (
                    <li>
                      <p key={i} className="role-content">
                        {resp}
                      </p>
                    </li>
                  ))}
                </ul>
                <br />
              </div>
            ))}
        </div>
      </ReactModal>
    );
  };

  render() {
    const { renderModal = true } = this.props;
    return (
      <div>
        {renderModal && this.renderModal(this.props.item)}
        <CardItem
          key={this.props.item.label}
          img={this.props.item.img}
          label={this.props.item.label}
          onClick={() => this.toggleModal()}
        />
      </div>
    );
  }
}
