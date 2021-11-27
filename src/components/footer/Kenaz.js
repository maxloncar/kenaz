import kenaz from "../../images/kenaz_logo.svg";
import rss from "../../images/rss_icon.svg";
import facebook from "../../images/facebook_icon.svg";
import twitter from "../../images/twitter_icon.svg";
import dribble from "../../images/dribble_icon.svg";
import linkedin from "../../images/linkedin_icon.svg";
import youtube from "../../images/youtube_icon.svg";
import skype from "../../images/skype_icon.svg";

function Kenaz() {
  return (
    <div className="kenaz">
      <div className="kenaz_logo">
        <img src={kenaz} alt="Kenaz logo" />
        <h2>Kenaz</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
        ante.
      </p>
      <div className="social_medias">
        <img src={rss} alt="Rss icon" />
        <img src={facebook} alt="Facebook icon" />
        <img src={twitter} alt="Twitter icon" />
        <img src={dribble} alt="Dribble icon" />
        <img src={linkedin} alt="Linkedin icon" />
        <img src={youtube} alt="Youtube icon" />
        <img src={skype} alt="Skype icon" />
      </div>
    </div>
  );
}

export default Kenaz;
