import Hero from "../components/home-hero";
import NFTCard from "../components/nft-card";

export default function Home() {
  return (
    <div className="home_page">
      <Hero />
      <div className="container my-5">
        <div className="row">
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
      </div>
    </div>
  );
}
