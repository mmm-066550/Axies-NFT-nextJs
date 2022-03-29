import React from "react";
import WalletConnectComponent from "../../components/wallet-connect-component";

const wallets = [
  "Meta Mask",
  "Bitski",
  "Fortmatic",
  "Wallet Connect",
  "Coinbase Wallet",
  "Authereum",
  "Kaikas",
  "Torus",
];

export default function WalletConnectPage() {
  return (
    <section className="wallet_connect_page py-5">
      <div className="container py-4">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-sm-8 col-md-6 text-center">
            <h3 className="section_head">Connect Your Wallet</h3>
            <p className="section_sub_head">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
              asperiores sit.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row ">
          {wallets.map((_, i) => (
            <WalletConnectComponent
              link={"/login"}
              name={_}
              id={i + 1}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
