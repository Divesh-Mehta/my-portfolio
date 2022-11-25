import Grid from "../Grid";
import { ReactComponent as AboutIcon } from "../../../icons/about.svg";

export default function About() {
  return (
    <div className="stretch-height about" id="about">
      <Grid icon={AboutIcon} title="About me">
        <p>
          Hello! My Name Is Divesh Mehta, I Am From Shimla, Himachal Pradesh,
          Currently Iam an aspiring engineer Studying Computer Science and
          Engineering at SRMIST KTR, I Like To Code, I Enjoy Learning New
          Technologies And Implementing Them. Currently I Am Focused On
          Competitive Coding, Development And Exploring New Things that would
          peek my interest. I Am Also Very Interested and Willing to Learn New
          Technologies Like Blockchain, Cybersecurity.
        </p>
      </Grid>
    </div>
  );
}
