import Hero from "../components/home-hero";
import Features from "../components/features";
import LiveAuctions from "../components/live-auctions";
import TopSellsers from "../components/top-sellers";
import TodayPicks from "../components/today-picks";
import PopularCollection from "../components/popular-collection";
import CategoriesSlider from "../components/categories-slider";

export default function Home() {
  return (
    <div className="home_page">
      <Hero />
      <LiveAuctions />
      <TopSellsers />
      <TodayPicks />
      <CategoriesSlider />
      <PopularCollection />
      <Features />
    </div>
  );
}
