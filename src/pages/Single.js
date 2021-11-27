import BigBanner from "../components/banners/BigBanner";
import Facebook from "../components/side_news/Facebook";
import Footer from "../components/footer/Footer";
import Sidebar from "../components/side_news/Sidebar";
import SingleNews from "../components/main_news_single/SingleNews";
import Social from "../components/side_news/Social";
import TitleImage from "../components/main_news_single/TitleImage";
import TwoSmallBanners from "../components/banners/TwoSmallBanners";
import Video from "../components/side_news/Video";
import MediumBanner from "../components/banners/MediumBanner";
import AboutAuthor from "../components/main_news_single/AboutAuthor";
import CommentSection from "../components/main_news_single/CommentSection";

function SinglePage() {
  return (
    <>
      <main>
        <section className="main_elements">
          <BigBanner />
          <TitleImage />
          <section className="news">
            <div className="main_news">
              <SingleNews />
              <MediumBanner />
              <AboutAuthor />
              <CommentSection />
            </div>
            <div className="side_news">
              <Sidebar />
              <Social />
              <Video />
              <TwoSmallBanners />
              <Facebook />
            </div>
          </section>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default SinglePage;
