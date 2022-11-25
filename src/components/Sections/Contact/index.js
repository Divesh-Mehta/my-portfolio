import Grid from "../Grid";
import { ReactComponent as ContactIcon } from "../../../icons/contact_me.svg";

export default function Projects() {
  return (
    <div className="stretch-height contact" id="contact-me">
      <Grid title="Contact Me" icon={ContactIcon}>
        <p>You can Contact me by mail ,</p>
        <p>
          {" "}
          Hoping to hear from you soon, Its always exciting to meet with new
          people and work with them.
        </p>
        <div className="btn-wrapper">
          <a className="btn" href="mailto:dbxitachi771@gmail.com">
            Email Me
          </a>
        </div>
      </Grid>
    </div>
  );
}
