import logoImg from "../../../assets/logo.png";

interface logoProps {
  size: number;
}

const Logo: React.FC<logoProps> = ({ size }) => {
  return (
    <>
      <img src={logoImg} style={{ width: size, height: size }} alt="" />
    </>
  );
};
export default Logo;
