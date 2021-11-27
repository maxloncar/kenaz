import comment_icon from "../../images/comm_icon.svg";
import palestinians from "../../images/palestinians.svg";

function SidebarNews() {
  return (
    <div className="sidebar_news">
      <div className="sidebar_news_data">
        <div className="comments">
          <img src={comment_icon} alt="comment icon" />
          <p>5</p>
        </div>
        <div className="date_headline">
          <p>August 26, 2013</p>
          <h3>Palestinians call off peace talks after clash</h3>
        </div>
      </div>
      <img className="palestinians" src={palestinians} alt="palestinians" />
    </div>
  );
}

export default SidebarNews;
