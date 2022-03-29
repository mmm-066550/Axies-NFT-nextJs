import React from "react";
import AccordionItem from "../acc-item";

const FAQs = [
  {
    question: "What is an NFT?",
    answer:
      "NFTs or non-fungible tokens, are cryptographic assets on blockchain with unique identification codes and metadata that distinguish them from each other. NFTs are unique and not mutually interchangeable, which means no two NFTs are the same.",
  },
  {
    question: "Customer support is available ?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione ad aspernatur libero delectus dolorem, sit molestiae provident cum eligendi quod dolor quas quasi dignissimos nostrum id vel dolores dolorum.",
  },
  {
    question: "How do I find my transaction hash?",

    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione ad aspernatur libero delectus dolorem, sit molestiae provident cum eligendi quod dolor quas quasi dignissimos nostrum id vel dolores dolorum.",
  },
  {
    question: "What are gas fees on Axies?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione ad aspernatur libero delectus dolorem, sit molestiae provident cum eligendi quod dolor quas quasi dignissimos nostrum id vel dolores dolorum.",
  },
  {
    question: "What is the effective staking amount?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione ad aspernatur libero delectus dolorem, sit molestiae provident cum eligendi quod dolor quas quasi dignissimos nostrum id vel dolores dolorum.",
  },
];

export default function FAQAccordion() {
  return (
    <div className={`accordion my-4`}>
      {FAQs.map((faq, i) => (
        <div className="my-4" key={i}>
          <AccordionItem faq={faq} />
        </div>
      ))}
    </div>
  );
}
