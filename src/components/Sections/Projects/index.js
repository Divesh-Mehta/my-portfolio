import Grid from "../Grid";
import { ReactComponent as ProjectsIcon } from "../../../icons/projects.svg";

export default function Projects() {
  return (
    <div className="stretch-height" id="projects">
      <Grid title="Achivements" icon={ProjectsIcon}>
        <p>The Achivements that i have accomplished are mentioned below:</p>
        <ol>
          <li>
            <p>Certificate of Participation in "TEAM BUILDING" webinar</p>
          </li>
          <li>
            <p>
              Certificate of Completion for a 7-days bootcamp on cyber security
              by shapeAI
            </p>
          </li>
          <li>
            <p>
              Certification for "Google Cloud Fundamentals: Core Infrastructure"
              on Coursera.
            </p>
          </li>
        </ol>
      </Grid>
    </div>
  );
}
