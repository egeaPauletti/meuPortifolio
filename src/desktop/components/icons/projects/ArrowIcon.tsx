interface logoProps {
  size: number;
}

const ArrowIcon: React.FC<logoProps> = ({ size }) => {
  return (
    <>
      <svg
        width={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            d="M6 12H18M18 12L13 7M18 12L13 17"
            stroke="#ebc577"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </>
  );
};
export default ArrowIcon;
