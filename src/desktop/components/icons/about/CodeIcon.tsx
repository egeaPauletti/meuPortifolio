interface logoProps {
  size: number;
}
const CodeIcon: React.FC<logoProps> = ({ size }) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
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
            d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
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
export default CodeIcon;
