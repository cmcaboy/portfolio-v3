import React from "react";
import { education, experience } from "../data";
import Card from "./Card";

class WorkPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEducation: false,
      showWork: false
    };
  }

  toggleEducation = () =>
    this.setState(prev => ({ showEducation: !prev.showEducation }));
  toggleWork = () => this.setState(prev => ({ showWork: !prev.showWork }));

  renderSchool = school => <Card key={school.label} item={school} />;
  renderWork = work => <Card key={work.label} item={work} />;

  render() {
    return (
      <div className="work-container">
        <div className="work-aboutme">
          <p className="work-title"> About Me</p>
          <p className="work-aboutme-text">
            Hi! My name is Cory McAboy. I currently live in Jersey City, NJ.
            Professionally, I work as a product manager in the small business
            segment of ADP. I manage the tax components of our small business
            payroll product offering. A typical day includes interviewing
            customers, building process flows or wire frames, explaining the
            product vision to my agile team, and crunching customer data. I am
            also actively involved with data insights within our group. I
            provide any adhoc data analysis that is requested, including
            retention, NPS, behavior analysis (w/ regression), and much more.
          </p>
          <br />
          <p className="work-aboutme-text">
            On the side, I develop fullstack web and mobile applications. Using
            React and React Native, I have built products ranging from dating
            apps to mapping software. For my backend, I use Google as my cloud
            vendor and Node.js as my primary server-side language. I am
            consistently learning new technologies, strategies, and trends in
            the product space.
          </p>
          <br />
          <p className="work-aboutme-text">
            In my free time, I enjoy travel, fitness, and friends. I am
            absolutely obsessed with physical fitness. I will either run, bike,
            or swim almost every day.
          </p>
        </div>
        <div className="work-subcontainer">
          <p className="work-title" onClick={() => this.toggleEducation()}>
            Education {this.state.showEducation ? "v" : ">"}
          </p>
          {this.state.showEducation && (
            <div className="education-container">
              {education.map(school => this.renderSchool(school))}
            </div>
          )}
        </div>

        <div className="work-subcontainer">
          <p className="work-title" onClick={() => this.toggleWork()}>
            Experience {this.state.showWork ? "v" : ">"}
          </p>
          {this.state.showWork && (
            <div className="job-container">
              {experience.map(job => this.renderWork(job))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default WorkPage;
