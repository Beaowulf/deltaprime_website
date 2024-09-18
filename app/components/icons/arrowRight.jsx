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

export const ArrowRightLinearPurple = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.49219 12.0547H18.5188"
        stroke="url(#paint0_linear_2094_19053)"
        stroke-width="1.86094"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 5.54688L18.5133 12.0602L12 18.5734"
        stroke="url(#paint1_linear_2094_19053)"
        stroke-width="1.86094"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2094_19053"
          x1="15.0912"
          y1="11.4622"
          x2="8.95872"
          y2="8.87149"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6B70ED" />
          <stop offset="1" stop-color="#AD91FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2094_19053"
          x1="16.7995"
          y1="-2.17074"
          x2="13.187"
          y2="-2.22931"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6B70ED" />
          <stop offset="1" stop-color="#AD91FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
