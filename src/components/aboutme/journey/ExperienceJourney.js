import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="      Oct2023 - Nov 2023  "
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Cognifyz technologies
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Java Developer Intern
          </h6>
          <p>• Developed and Maintained Applications: Worked on the development and maintenance of Java-based applications, ensuring high performance, quality, and responsiveness.</p>
          <p>• Collaborated with Teams: Collaborated with cross-functional teams, including designers, developers, and product managers, to deliver high-quality software solutions.</p>
          <p>• Documentation: Assisted in the creation of technical documentation, including user manuals and system design documents, to support ongoing maintenance and development.</p>
          <p>• Problem-Solving: Addressed technical issues and bugs reported by users, providing timely resolutions to enhance user satisfaction..</p>

        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2021 - 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Excel Telecom (Pvt.) Limited - (National Distributor of SAMSUNG in Bangladesh)
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Management of Information System
          </h6>
          <p>• Proficient in developing, deploying and managing computerized systems that gather, retain, evaluate and exhibit 
            data to facilitate the achievement of organizational aims and objectives.</p>
          <p>• Proficient in collecting and organizing data from diverse sources, utilizing statistical techniques and software 
            tools for data analysis and creating comprehensive reports and presentations that showcase significant insights and trends.</p>
          <p>• Consistently completed assigned tasks in a timely and efficient manner as directed by management, while maintaining 
            effective communication between the company and employees.</p>
          <p>• Proficient in monitoring daily business operation costs, verifying and evaluating accounting transactions updates, 
            and providing corresponding reports to top management.</p>
          <p>• Skilled in collecting and compiling monthly reports, conducting inventory analysis for month-end, quarterly, 
            and year-end closing, and submitting reports in accordance with management requirements.</p>
          <p>• Proficient in developing and maintaining various reporting dashboard, technical support to end-users, 
            diagnosing hardware and software issues, and collaborating with IT teams to promptly resolve system-related problems.</p>
        </VerticalTimelineElement> */}

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
