export default function ArrowRight() {
  return (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svgArrowParent"
    >
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFBB9B" />
          <stop offset="60%" stopColor="#FF8FB8" />
          <stop offset="100%" stopColor="#AFAFFF" />
        </linearGradient>
      </defs>
      <path
        className="pathArrowChild"
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const ArrowRightWhite = () => {
  return (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 24 24"
      fill="none"
      className="svgArrowWhiteParent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFBB9B" />
          <stop offset="60%" stopColor="#FF8FB8" />
          <stop offset="100%" stopColor="#AFAFFF" />
        </linearGradient>
      </defs>
      <path
        className="pathArrowWhiteChild"
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowRightPurple = () => {
  return (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 24 24"
      fill="none"
      className="svgArrowPurpleParent"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="pathArrowPurpleChild"
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="#565AC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
