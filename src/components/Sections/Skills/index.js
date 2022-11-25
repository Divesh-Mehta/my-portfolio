import Grid from "../Grid";

import { ReactComponent as SkillsIcon } from "../../../icons/skills.svg";

export default function Skills() {
  return (
    <div className="stretch-height" id="skills">
      <Grid direction="rtl" icon={SkillsIcon} title="Skills">
        <p>
          <ol>
            <li>
              <p>PYTHON</p>
            </li>
            <li>
              <p>C++</p>
            </li>
            <li>
              <p>FRONTEND(HTML,CSS,JAVASCRIPT,REACT)</p>
            </li>
          </ol>
        </p>
        <p>
          I may not be the best out there for the above mentioned skills , but
          iam constantly trying to become the best version of my self in
          learning new tech and improving my existing knowledge
        </p>
      </Grid>
    </div>
  );
}
