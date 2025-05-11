interface logoProps {
  size: number;
}
const MineIcon: React.FC<logoProps> = ({ size }) => {
  return (
    <>
      <svg
        width={size}
        viewBox="0 0 48 48"
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ebc577"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <defs>
            <style>.cls-1</style>
          </defs>
          <path d="M40.5,5.5H7.5a2,2,0,0,0-2,2v33a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V7.5A2,2,0,0,0,40.5,5.5ZM36.37,19.62H28.19V24h4.09V36.27H28.19V32.18H20v4.09H15.92V24H20V19.62H11.83V11.44H20v8.18h8.18V11.44h8.18Z"></path>
        </g>
      </svg>
    </>
  );
};
export default MineIcon;
