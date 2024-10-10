import { removeHyphensAndCapitalize } from '../../utils/helper';
import * as activities from '../../asset';

function Activity({ activity }) {
  const { name, repo, link, description } = activity;

  return (
    <div className="activity" key={name}>
      <img
        src={activities[name]}
        alt={removeHyphensAndCapitalize(name)}
        className="activity-bg"
      />
      <div className="activity-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>
          &nbsp;
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Activity;