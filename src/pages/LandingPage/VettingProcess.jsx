import React, { useEffect, useState } from "react";

const VettingProcess = () => {
  const getTheme = () =>
    document.documentElement.classList.contains("light-mode")
      ? "light"
      : "dark";

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    const onThemeChange = () => setTheme(getTheme());
    window.addEventListener("themeChange", onThemeChange);
    return () => window.removeEventListener("themeChange", onThemeChange);
  }, []);

  const isLight = theme === "light";

  const steps = [
    { title: "Pre – qualification", value: 68, width: "100%" },
    { title: "Pre – qualification", value: 68, width: "82%" },
    { title: "Pre – qualification", value: 68, width: "72%" },
    { title: "Pre – qualification", value: 68, width: "58%" },
    { title: "Pre – qualification", value: 68, width: "45%" },
  ];

  return (
    <section
      className={`w-full px-4 sm:px-6 lg:px-[30px] pt-[40px] pb-[40px] ${
        isLight ? "bg-white" : "bg-[#0a0a0a]"
      }`}
    >
      <div className="w-full max-w-[1166px] mx-auto flex flex-col items-center">

        {/* Header */}
        <h2
          className={`text-[28px] sm:text-[40px] md:text-[50px] font-space font-medium text-center leading-[55px] ${
            isLight ? "text-black" : "text-white"
          }`}
        >
          Find top-performing agencies effortlessly.
        </h2>

        <p
          className={`text-[12px] sm:text-[16px] md:text-[20px] text-center mt-2 leading-[26px] max-w-[800px] ${
            isLight ? "text-[#6b6b6b]" : "text-[#bababa]"
          }`}
        >
          Our vetting process analyzes 500+ data points from performance and skills
          to team culture and reliability.
        </p>

        {/* CARD */}
        <div
          className={`
            w-full 
            rounded-[32px] 
            mt-[40px] 
            p-8 sm:p-12 
            border 
            ${
              isLight
                ? "border-[#8b5cf6] bg-white"
                : "border-[#ffffff20] bg-[#111111]"
            }
          `}
        >
          {steps.map((step, i) => (
            <div key={i} className="flex items-center justify-between mb-8 last:mb-0">

              {/* Left Title */}
              <span
                className={`text-[16px] sm:text-[20px] font-dm w-[35%] ${
                  isLight ? "text-[#3b3b3b]" : "text-white"
                }`}
              >
                {step.title}
              </span>

              {/* Progress Bar */}
              <div className="w-[65%] flex items-center">
                <div
                  className={`w-full h-[26px] rounded-[8px] overflow-hidden ${
                    isLight ? "bg-[#f1e8ff]" : "bg-[#2a2a2a]"
                  }`}
                >
                  <div
                    className="h-full bg-[#8b5cf6] flex items-center justify-center text-white text-[14px] font-medium"
                    style={{ width: step.width }}
                  >
                    {step.value}%
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VettingProcess;
