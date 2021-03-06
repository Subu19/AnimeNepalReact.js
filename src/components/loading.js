import React, { useEffect } from "react";
import anime from "animejs";
const Loading = () => {
  useEffect(() => {
    anime({
      targets: ".loading",
      rotate: 360,
      loop: true,
      easing: "easeInOutSine",
    });
  }, []);
  return (
    <div className="loadingContainner">
      <svg
        className="loading"
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <circle
            id="loading"
            cx="55"
            cy="55"
            r="44"
            stroke="#2DDA11"
            strokeWidth="22"
          />
          <path
            id="Subtract"
            d="M25.9418 32.0929C25.6107 32.5123 25.2885 32.9391 24.9755 33.3729C23.3905 35.1561 20.0118 37.7144 15.2912 34.6171C9.1311 30.5755 13.1926 24.1639 13.8896 23.1536C23.4022 10.8917 38.2795 3 55 3C66.8881 3 77.8444 6.98931 86.6034 13.7023L86.182 13.3865C86.182 13.3865 90.9836 16.9845 86.4862 22.9864C82.2807 28.5988 77.8092 25.817 77.2464 25.4322C71.0546 20.7662 63.3503 18 55 18C43.2489 18 32.7774 23.4781 25.9997 32.0198L25.9901 32.0125C25.9901 32.0125 25.9739 32.0409 25.9418 32.0929ZM96.9772 85.6966L96.2977 86.6034C96.5274 86.3037 96.754 86.0014 96.9772 85.6966ZM24.3037 96.9774L23.3963 96.2975C23.6962 96.5274 23.9987 96.754 24.3037 96.9774ZM13.0226 24.3037L13.7025 23.3963C13.4726 23.6962 13.246 23.9987 13.0226 24.3037Z"
            fill="black"
          />
        </g>
      </svg>
    </div>
  );
};
export const SmallLoading = () => {
  useEffect(() => {
    anime({
      targets: ".smallLoading",
      rotate: 360,
      loop: true,
      easing: "easeInOutSine",
    });
  }, []);
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        className="smallLoading"
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group">
          <circle
            id="loading"
            cx="55"
            cy="55"
            r="44"
            stroke="#2DDA11"
            strokeWidth="22"
          />
          <path
            id="Subtract"
            d="M25.9418 32.0929C25.6107 32.5123 25.2885 32.9391 24.9755 33.3729C23.3905 35.1561 20.0118 37.7144 15.2912 34.6171C9.1311 30.5755 13.1926 24.1639 13.8896 23.1536C23.4022 10.8917 38.2795 3 55 3C66.8881 3 77.8444 6.98931 86.6034 13.7023L86.182 13.3865C86.182 13.3865 90.9836 16.9845 86.4862 22.9864C82.2807 28.5988 77.8092 25.817 77.2464 25.4322C71.0546 20.7662 63.3503 18 55 18C43.2489 18 32.7774 23.4781 25.9997 32.0198L25.9901 32.0125C25.9901 32.0125 25.9739 32.0409 25.9418 32.0929ZM96.9772 85.6966L96.2977 86.6034C96.5274 86.3037 96.754 86.0014 96.9772 85.6966ZM24.3037 96.9774L23.3963 96.2975C23.6962 96.5274 23.9987 96.754 24.3037 96.9774ZM13.0226 24.3037L13.7025 23.3963C13.4726 23.6962 13.246 23.9987 13.0226 24.3037Z"
            fill="black"
          />
        </g>
      </svg>
    </div>
  );
};
export default Loading;
