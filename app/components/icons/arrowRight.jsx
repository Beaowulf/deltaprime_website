import "./icons.css";
export default function ArrowRight() {
  return (
    <svg
      width="18px"
      height="18px"
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
