interface logoProps {
  size: number;
  color: string;
}
const CursorIcon: React.FC<logoProps> = ({ size, color }) => {
  let colorSelected = "white";

  if (color === "primary") {
    colorSelected = "white";
  } else if (color === "second") {
    colorSelected = "#ebc577";
  } else if (color === "third") {
    colorSelected = "#212121";
  }

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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2855 17.0113C14.7666 20.0509 10.5501 20.4239 9.50564 17.5226L7.15545 10.9943C6.29564 8.60595 8.60591 6.29569 10.9943 7.15551L17.5226 9.50569C20.4238 10.5501 20.0509 14.7666 17.0113 15.2856L16.2354 15.418C15.8171 15.4894 15.4894 15.8171 15.418 16.2355L15.2855 17.0113Z"
            fill={colorSelected}
          ></path>{" "}
          <path
            d="M10 4V3"
            stroke={colorSelected}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
          <path
            d="M4 10H3"
            stroke={colorSelected}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
          <path
            d="M4 4L6 6"
            stroke={colorSelected}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>{" "}
        </g>
      </svg>
    </>
  );
};
export default CursorIcon;
