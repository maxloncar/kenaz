import Bottom from "./Bottom";
import Featured from "./Featured";
import Kenaz from "./Kenaz";
import NewsLetter from "./NewsLetter";
import RandomPosts from "./RandomPosts";
import TagsWidget from "./TagsWidget";
import TwitterFeed from "./TwitterFeed";

function FooterBigRectangle() {
  return (
    <div className="footer_big_rectangle">
      <div className="top_row">
        <Kenaz />
        <NewsLetter />
        <TagsWidget />
      </div>
      <div className="mid_row">
        <Featured />
        <RandomPosts />
        <TwitterFeed />
      </div>
      <div className="bot_row">
        <Bottom />
      </div>
    </div>
  );
}

export default FooterBigRectangle;
