import React from "react";
import NFTCard from "../../components/nft-card";
import ViewRow from "../../components/view-row";

export default function AucationsPage() {
  return (
    <section className="live_auctions_page py-5">
      <div className="container py-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <h3 className="section_head">Live Auctions</h3>
            <p className="section_sub_head">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
          </div>
        </div>
      </div>
      <ViewRow>
        {[...Array(8)].map((_, i) => (
          <NFTCard live key={i} id={i + 1} fullWidth={true} />
        ))}
        {[...Array(8)].map((_, i) => (
          <NFTCard live key={i} id={i + 1} fullWidth={true} />
        ))}{" "}
        {[...Array(8)].map((_, i) => (
          <NFTCard live key={i} id={i + 1} fullWidth={true} />
        ))}
      </ViewRow>
    </section>
  );
}
