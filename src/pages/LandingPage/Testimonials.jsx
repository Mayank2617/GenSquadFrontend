import React, { useEffect, useState, useRef } from "react";
import "../../styles/testimonials.css";

const Testimonials = ({ isLight: isLightProp } = {}) => {
  const [isLightAuto, setIsLightAuto] = useState(false);
  const mountedRef = useRef(false);

  // Detect theme from <html> class (html.light-mode)
  const detectIsLight = () => {
    if (typeof window === "undefined" || !window.document) return false;
    return document.documentElement.classList.contains("light-mode");
  };

  useEffect(() => {
    // On mount determine initial state
    setIsLightAuto(detectIsLight());
    mountedRef.current = true;

    // Observe html element for class changes so we update live when theme toggles
    if (typeof window !== "undefined" && window.MutationObserver) {
      const htmlEl = document.documentElement;
      const obs = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === "attributes" && m.attributeName === "class") {
            const nowLight = htmlEl.classList.contains("light-mode");
            setIsLightAuto(nowLight);
          }
        }
      });

      obs.observe(htmlEl, { attributes: true, attributeFilter: ["class"] });

      return () => {
        obs.disconnect();
      };
    }

    // no-op cleanup
    return undefined;
  }, []);

  // final value: prefer explicit prop if provided; else use auto detection
  const isLight = typeof isLightProp === "boolean" ? isLightProp : isLightAuto;

  // inline wrapper style (applied to the FIRST inner div) - ensures it overrides other CSS
  const wrapperStyle = {
    backgroundColor: isLight ? "#ffffff" : "#0a0a0a",
    transition: "background-color 240ms ease",
  };

  const testimonials = [
    {
      id: 1,
      company: "/images/img_rectangle_28.png",
      quote:
        "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.",
      avatar: "/images/img_rectangle_25.png",
      name: "Akash",
      role: "UI-UX Designer",
    },
    {
      id: 2,
      company: "/images/img_rectangle_28.png",
      quote:
        "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.",
      avatar: "/images/img_rectangle_25.png",
      name: "Akash",
      role: "UI-UX Designer",
    },
    {
      id: 3,
      company: "/images/img_rectangle_28.png",
      quote:
        "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.",
      avatar: "/images/img_rectangle_25.png",
      name: "Akash",
      role: "UI-UX Designer",
    },
  ];

  return (
    <section className="w-full  overflow-hidden transition-all duration-300">
      {/* IMPORTANT: set background on this FIRST INNER DIV (wrapper) */}
      <div
        className="w-full mx-auto px-[20px] pb-[40px]"
        style={wrapperStyle}
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[40px]">
          <h2
            className={`text-[28px] sm:text-[38px] md:text-[50px] font-space font-medium ${
              isLight ? "text-[#111]" : "text-white"
            }`}
          >
            Voices of Trust
          </h2>

          <p
            className={`text-[12px] sm:text-[16px] md:text-[20px] max-w-[650px] leading-[22px] ${
              isLight ? "text-[#4A4A4A]" : "text-[#bababa]"
            }`}
          >
            Hear from founders, CTOs, and teams who trusted us to power their AI
            success stories.
          </p>
        </div>

        {/* MARQUEE */}
        <div className="marquee-container">
          {/* ROW 1 */}
          <div className="marquee-row marquee-left">
            <div className="marquee-track">
              {testimonials.map((item) => (
                <TestimonialCard key={`r1-${item.id}`} item={item} />
              ))}
              {testimonials.map((item) => (
                <TestimonialCard key={`r1dup-${item.id}`} item={item} />
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="marquee-row marquee-right mt-[20px]">
            <div className="marquee-track">
              {testimonials.map((item) => (
                <TestimonialCard key={`r2-${item.id}`} item={item} />
              ))}
              {testimonials.map((item) => (
                <TestimonialCard key={`r2dup-${item.id}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ item }) => {
  // Keep card dark and identical in both modes (as requested)
  const cardStyle = {
    backgroundColor: "#111111",
    borderColor: "#2b2b2b",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  };

  return (
    <div
      className="testimonial-card rounded-[20px] w-[420px] min-h-[260px] px-[26px] py-[24px] mr-[20px] flex flex-col justify-between"
      style={cardStyle}
    >
      <div className="flex justify-between items-start">
        <img src={item.company} className="w-[120px] h-[48px] rounded-[10px]" alt="company" />

        <img src="/images/img_vector.svg" className="w-[32px] opacity-70" alt="quote" />
      </div>

      <p className="mt-[18px] text-[16px] leading-[22px] text-[#d0d0d0]">
        {item.quote}
      </p>

      <div className="flex gap-3 items-center mt-[22px]">
        <img src={item.avatar} className="w-[50px] h-[50px] rounded-full object-cover" alt={item.name} />
        <div>
          <h4 className="text-[18px] font-semibold text-white">{item.name}</h4>
          <p className="text-[14px] text-[#bababa]">{item.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
