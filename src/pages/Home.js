import BigBanner from "../components/BigBanner";
import Editorials from "../components/Editorials";
import Facebook from "../components/Facebook";
import Gallery from "../components/Gallery";
import LocalNews from "../components/LocalNews";
import MediumBanner from "../components/MediumBanner";
import NewCarousel from "../components/NewCarousel";
import ShortBusiness from "../components/ShortBusiness";
import ShortNews from "../components/ShortNews";
import ShortSport from "../components/ShortSport";
import Sidebar from "../components/Sidebar";
import SliderImage from "../components/SliderImage";
import Social from "../components/Social";
import TwoSmallBanners from "../components/TwoSmallBanners";
import Video from "../components/Video";

function HomePage() {
  return (
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
  );
}

export default HomePage;
