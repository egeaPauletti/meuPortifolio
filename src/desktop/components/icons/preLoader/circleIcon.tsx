interface logoProps {
  size: number;
}

const CircleIcon: React.FC<logoProps> = ({ size }) => {
  return (
    <>
      <svg
        width={size}
        viewBox="0 0 16 16"
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
          <circle cx="8" cy="8" r="8" fill="#ebc577"></circle>{" "}
        </g>
      </svg>
    </>
  );
};
export default CircleIcon;
