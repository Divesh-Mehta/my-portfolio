import Grid from "../Grid";
import { ReactComponent as ResumeIcon } from "../../../icons/resume.svg";

export default function Projects() {
  return (
    <div className="stretch-height resume" id="resume">
      <Grid direction="rtl" title="Resume" icon={ResumeIcon}>
        <p>My Resume has been attached below:</p>
        <div className="btn-wrapper">
          <a
            className="btn"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1aeBbYj8Sqb282r6YHpEsr2i6fsVBj7BH/view?usp=share_link"
          >
            View Resume
          </a>
        </div>
      </Grid>
    </div>
  );
}
