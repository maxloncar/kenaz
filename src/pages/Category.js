import BigBanner from "../components/banners/BigBanner";
import Facebook from "../components/side_news/Facebook";
import Footer from "../components/footer/Footer";
import MainContent from "../components/main_news_category/MainContent";
import Sidebar from "../components/side_news/Sidebar";
import SliderImage from "../components/slider/SliderImage";
import Social from "../components/side_news/Social";
import TwoSmallBanners from "../components/banners/TwoSmallBanners";
import Video from "../components/side_news/Video";
import MediumBanner from "../components/banners/MediumBanner";

function CategoryPage() {
  return (
    <>
      <main>
        <section className="main_elements">
          <BigBanner />
          <SliderImage />
          <section className="news">
            <div className="main_news">
              <MainContent />
              <MediumBanner />
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

export default CategoryPage;
