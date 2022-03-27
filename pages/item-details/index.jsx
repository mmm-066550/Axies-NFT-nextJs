import React from "react";
import ItemDetailsComponent from "../../components/item-details";
import LiveAuctions from "../../components/live-auctions";

export default function ItemDetailsPage() {
  return (
    <div className="item_details_page">
      <ItemDetailsComponent />
      <LiveAuctions />
    </div>
  );
}
