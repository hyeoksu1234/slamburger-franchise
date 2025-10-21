"use client";

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FaqItem[];
};

export function FaqList({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <article
            key={item.question}
            className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm shadow-black/5 transition hover:border-[#FF6600]/40"
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              aria-expanded={isActive}
              aria-controls={`faq-panel-${index}`}
            >
              <span className="text-lg font-semibold text-[#FF6600]">
                {item.question}
              </span>
              <span
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border border-[#FF6600]/40 text-base font-bold transition ${isActive ? "bg-[#FF6600] text-black" : "text-[#FF6600]"}`}
                aria-hidden
              >
                {isActive ? "-" : "+"}
              </span>
            </button>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-hidden={!isActive}
              className={`grid transition-all duration-300 ease-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden px-6 pb-6 text-base text-black/70">
                {item.answer}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default FaqList;
