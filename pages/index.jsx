import Hero from "../components/home-hero";
import NFTCard from "../components/nft-card";
import SellerCard from "../components/seller-card";

export default function Home() {
  return (
    <div className="home_page">
      <Hero />
      <div className="container my-5">
        <div className="row">
          <NFTCard id={1} />
          <NFTCard id={2} />
          <NFTCard id={3} />
          <NFTCard id={4} />
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <SellerCard id={1} />
          <SellerCard id={2} />
          <SellerCard id={3} />
          <SellerCard id={4} />
          <SellerCard id={5} />
          <SellerCard id={6} />
        </div>
      </div>
    </div>
  );
}
