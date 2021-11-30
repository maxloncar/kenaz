import FooterBigRectangle from "./FooterBigRectangle";
import FooterRectangle from "./FooterRectangle";
import Bottom from "./Bottom";

function Footer() {
    return (
      <section className="footer">
        <FooterRectangle />
        <FooterBigRectangle />
        <div className="grayLine"></div>
        <div className="bot_row">
        <Bottom />
      </div>
      </section>
    );
  }
  
  export default Footer;
  