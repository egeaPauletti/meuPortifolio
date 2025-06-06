interface logoProps {
  size: number;
}
const Address: React.FC<logoProps> = ({ size }) => {
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
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
          <title></title>{" "}
          <g id="Complete">
            {" "}
            <g id="mail">
              {" "}
              <g>
                {" "}
                <polyline
                  fill="none"
                  points="4 8.2 12 14.1 20 8.2"
                  stroke="#ebc577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polyline>{" "}
                <rect
                  fill="none"
                  height="14"
                  rx="2"
                  ry="2"
                  stroke="#ebc577"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  width="18"
                  x="3"
                  y="6.5"
                ></rect>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </>
  );
};
export default Address;
