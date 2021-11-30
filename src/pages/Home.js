import BigBanner from "../components/banners/BigBanner";
import Editorials from "../components/main_news_home/Editorials";
import Facebook from "../components/side_news/Facebook";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import LocalNews from "../components/main_news_home/LocalNews";
import MediumBanner from "../components/banners/MediumBanner";
import NewCarousel from "../components/main_news_home/NewCarousel";
import ShortBusiness from "../components/main_news_home/ShortBusiness";
import ShortNews from "../components/main_news_home/ShortNews";
import ShortSport from "../components/main_news_home/ShortSport";
import Sidebar from "../components/side_news/Sidebar";
import SliderImage from "../components/slider/SliderImage";
import Social from "../components/side_news/Social";
import TwoSmallBanners from "../components/banners/TwoSmallBanners";
import Video from "../components/side_news/Video";

function HomePage() {
  return (
    <>
      <main>
        <BigBanner />
        <SliderImage />
        <section className="news">
          <div className="main_news">
            <ShortNews />
            <ShortSport />
            <MediumBanner />
            <ShortBusiness />
            <MediumBanner />
            <NewCarousel />
            <div className="editorials_local_news">
              <Editorials />
              <LocalNews />
            </div>
          </div>
          <div className="side_news">
            <Sidebar />
            <Social />
            <Video />
            <TwoSmallBanners />
            <Facebook />
          </div>
        </section>
        <BigBanner />
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default HomePage;
