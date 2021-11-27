import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";

function Social() {
  return (
    <aside className="social">
      <h2>Social</h2>
      <div className="like">
        <img src={facebook} alt="facebook logo" />
        <div className="social_headline">
          <h3>Like</h3>
        </div>
        <div className="social_fans">
          <p>25041 Fans</p>
        </div>
      </div>
      <div className="follow">
        <img src={twitter} alt="twitter logo" />
        <div className="social_headline">
          <h3>Follow</h3>
        </div>
        <div className="social_fans">
          <p>25041 Followers</p>
        </div>
      </div>
      <div className="subscribe">
        <img src={youtube} alt="youtube logo" />
        <div className="social_headline">
          <h3>Subscribe</h3>
        </div>
        <div className="social_fans">
          <p>941 Subscribers</p>
        </div>
      </div>
    </aside>
  );
}

export default Social;
