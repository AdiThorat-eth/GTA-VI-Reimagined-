import React, { useState, useEffect } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const minLoadingTime = 2000; // 2 seconds minimum

    // Wait for window to load
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      // Wait for remaining time to reach minimum 2 seconds
      setTimeout(() => {
        setFadeOut(true);
        // Remove loading screen after fade animation
        setTimeout(() => {
          setIsLoading(false);
        }, 500); // Match this with CSS transition duration
      }, remainingTime);
    };

    // Check if page is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 h-screen w-full bg-black flex-center z-[9999] transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <svg
        className="size-25"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.59 128.83"
      >
        <defs>
          <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="-0.3" stopColor="#44444E" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-0.3;1.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="-0.2" stopColor="#44444E" stopOpacity="1">
              <animate
                attributeName="offset"
                values="-0.2;1.4"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="0" stopColor="#FE70BB" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0;1.6"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="0.1" stopColor="#44444E" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0.1;1.7"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="0.2" stopColor="#44444E" stopOpacity="1">
              <animate
                attributeName="offset"
                values="0.2;1.8"
                dur="2s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>
        {/* 00 */}
        <path
          fill="url(#shimmer)"
          d="M54.84,128.83l13.82-29.71-7.48-7.89c-5.53-5.83-7.21-7.6-7.67-8.25l-.08.06c-1.21-1.62-1.49-5.54-1.49-6.79,0-1.96.12-3.94.25-6.04.15-2.42.31-4.92.31-7.78,0-7.12-3.13-10.29-10.17-10.29h-13.79l-6.18,29.25H0L17.19,0h40.58c13.26,0,26.82,2.54,26.82,21.34,0,12.46-6.23,20.44-17.59,22.64,4.99,1.8,7.14,5.91,7.14,13.39,0,3.11-.09,5.79-.18,8.39-.08,2.26-.15,4.4-.15,6.56,0,2.79.72,7.03,2.3,9.92h2.39l16.42-27.74,4.44,27.93h28.22l-25.47,17.83,4.08,27.85-21.87-16.8-29.5,17.53ZM54.21,82.43c.45.49,10.23,10.8,15.41,16.26l.23.25-12.74,27.39,27.3-16.22,20.45,15.71-3.81-26.02,23.37-16.36h-25.9l-4.14-26.03-15.3,25.84h-3.54l-.14-.25c-1.78-3.07-2.58-7.57-2.58-10.67,0-2.18.07-4.32.15-6.6.09-2.59.18-5.27.18-8.36,0-7.8-2.31-11.53-7.98-12.9l-.38-.09v-1.06l.43-.06c15.19-2.11,18.38-13.09,18.38-21.92,0-17.92-13.05-20.34-25.82-20.34H18L1.23,80.4h20.33l6.18-29.25h14.6c7.51,0,11.17,3.69,11.17,11.29,0,2.89-.16,5.41-.31,7.84-.13,2.08-.25,4.05-.25,5.97,0,1.8.4,4.99,1.27,6.17ZM48.71,37.09h-17.58l4.27-20.38h16.19c7.94,0,11.97,2.97,11.97,8.84,0,7.66-5,11.54-14.85,11.54ZM32.36,36.09h16.35c9.32,0,13.85-3.45,13.85-10.54,0-5.28-3.59-7.84-10.97-7.84h-15.38l-3.85,18.38Z"
        />
      </svg>
    </div>
  );
};

export default Loading;
// before
