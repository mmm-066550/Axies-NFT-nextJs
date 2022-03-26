import React from "react";
import NFTCard from "../nft-card";
import ViewRow from "../view-row";

export default function TodayPicks() {
  return (
    <div className="today_picks_wrapper">
      <ViewRow title={"Today's Picks"} link={"/explore"}>
        {[...Array(8)].map((_, i) => (
          <NFTCard key={i} id={i + 1} fullWidth={true} />
        ))}
      </ViewRow>
    </div>
  );
}
