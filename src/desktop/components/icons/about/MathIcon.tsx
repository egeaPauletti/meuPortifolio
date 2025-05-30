interface logoProps {
  size: number;
}
const MathIcon: React.FC<logoProps> = ({ size }) => {
  return (
    <>
      <svg viewBox="0 0 16 16" version="1.1" fill="#000000" width={size}>
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path fill="#ebc577" d="M9 3h6v2h-6v-2z"></path>{" "}
          <path fill="#ebc577" d="M9 11h6v2h-6v-2z"></path>{" "}
          <path fill="#ebc577" d="M5 1h-2v2h-2v2h2v2h2v-2h2v-2h-2z"></path>{" "}
          <path
            fill="#ebc577"
            d="M7 10.4l-1.4-1.4-1.6 1.6-1.6-1.6-1.4 1.4 1.6 1.6-1.6 1.6 1.4 1.4 1.6-1.6 1.6 1.6 1.4-1.4-1.6-1.6z"
          ></path>{" "}
          <path
            fill="#ebc577"
            d="M13 14.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"
          ></path>{" "}
          <path
            fill="#ebc577"
            d="M13 9.5c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"
          ></path>{" "}
        </g>
      </svg>
    </>
  );
};
export default MathIcon;
