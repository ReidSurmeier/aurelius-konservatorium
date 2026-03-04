"use client";

const sponsors = [
  {
    name: "Meta",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/400px-Meta_Platforms_Inc._logo.svg.png",
    height: "h-7",
  },
  {
    name: "Amazon Web Services",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/400px-Amazon_Web_Services_Logo.svg.png",
    height: "h-8",
  },
  {
    name: "Goldman Sachs",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Goldman_Sachs_2022_Black.svg/400px-Goldman_Sachs_2022_Black.svg.png",
    height: "h-6",
  },
  {
    name: "Tesla",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Tesla_Motors_Logo.svg/400px-Tesla_Motors_Logo.svg.png",
    height: "h-6",
  },
  {
    name: "BlackRock",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/BlackRock_wordmark.svg/400px-BlackRock_wordmark.svg.png",
    height: "h-5",
  },
  {
    name: "Palantir",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Palantir_Technologies_logo.svg/400px-Palantir_Technologies_logo.svg.png",
    height: "h-7",
  },
];

// Duplicate for seamless loop
const track = [...sponsors, ...sponsors, ...sponsors];

export default function SponsorMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white border-y border-[#e0e0dc] py-6">
      <p className="text-center text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#bbb] mb-5">
        Corporate Partners
      </p>
      <div className="relative flex">
        <div
          className="flex items-center gap-20 whitespace-nowrap"
          style={{
            animation: "marquee 28s linear infinite",
            willChange: "transform",
          }}
        >
          {track.map((s, i) => (
            <div key={i} className="flex-shrink-0 flex items-center justify-center" style={{ minWidth: 140 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.url}
                alt={s.name}
                className={`${s.height} w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
