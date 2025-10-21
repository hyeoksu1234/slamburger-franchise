"use client";

import { useRef } from "react";
import Image from "next/image";

export type MenuItem = {
  name: string;
  image: string;
  badge?: string;
};

type MenuCarouselProps = {
  items: MenuItem[];
};

function MenuCarousel({ items }: MenuCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }

    const scrollAmount =
      container.clientWidth >= 768
        ? container.clientWidth * 0.5
        : Math.min(container.clientWidth * 0.9, 280);

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => handleScroll("left")}
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-3 text-2xl text-[#111111] shadow-lg transition hover:bg-white desktop:flex"
        aria-label="이전 메뉴 보기"
      >
        ‹
      </button>

      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-6 pl-3 pr-3 sm:pl-12 sm:pr-12"
      >
        {items.map((item) => (
          <article
            key={item.name}
            className="flex w-[220px] snap-center flex-col items-center gap-4 text-center desktop:w-[240px]"
          >
            <div className="relative flex h-52 w-52 items-center justify-center rounded-full bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] transition hover:-translate-y-1">
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="h-40 w-40 object-contain"
              />
              {item.badge ? (
                <span className="absolute top-4 right-4 rounded-full bg-[#FF6600] px-3 py-1 text-xs font-semibold uppercase text-white shadow">
                  {item.badge}
                </span>
              ) : null}
            </div>
            <p className="text-base font-semibold text-[#111111]">
              {item.name}
            </p>
          </article>
        ))}
      </div>

      <button
        type="button"
        onClick={() => handleScroll("right")}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-3 text-2xl text-[#111111] shadow-lg transition hover:bg-white desktop:flex"
        aria-label="다음 메뉴 보기"
      >
        ›
      </button>
    </div>
  );
}

export default MenuCarousel;
