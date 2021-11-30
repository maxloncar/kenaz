import { Link } from "react-router-dom";
import twitter_logo from "../../images/twitter_logo.svg";

function TwitterPosts() {
  return (
    <div className="twitter_posts">
      <Link to="/single">
        <div className="first_twitter_post">
          <div className="name_logo">
            <img src={twitter_logo} alt="Twitter logo" />
            <p>Envato @envato</p>
          </div>
          <p className="twitter_post">
            Is this your typical million dollar day in the park?
            http://enva.to/150vxFC Happy @TrueThemes Day! #ThemeForest
            pic.twitter.com/EHz7awxOXy
          </p>
        </div>
      </Link>
      <Link to="/single">
        <div className="second_twitter_post">
          <div className="name_logo">
            <img src={twitter_logo} alt="Twitter logo" />
            <p>Envato @envato</p>
          </div>
          <p className="twitter_post">
            Happy TrueThemes Day http://enva.to/1dRzgLD
          </p>
        </div>
      </Link>
      <Link to="/single">
        <div className="third_twitter_post">
          <div className="name_logo">
            <img src={twitter_logo} alt="Twitter logo" />
            <p>Envato @envato</p>
          </div>
          <p className="twitter_post">
            @robscri I would really want to look into what's taking so long.
            Thank you ever so much! ^TC
          </p>
        </div>
      </Link>
    </div>
  );
}

export default TwitterPosts;
