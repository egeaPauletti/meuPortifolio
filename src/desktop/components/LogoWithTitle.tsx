import Logo from "../components/icons/Logo";

export default function LogoWithTitle() {
  return (
    <>
      <div className="flex items-center gap-2.5 toRightAnimation">
        <div className="hidden 2xl:flex">
          <Logo size={60} />
        </div>
        <div className="flex 2xl:hidden">
          <Logo size={50} />
        </div>
        <div>
          <span className="font-bold text-base 2xl:text-2xl firaCode">
            pauletti
          </span>
          <span className="font-bold text-base 2xl:text-2xl firaCode secColor">
            .dev
          </span>
        </div>
      </div>
    </>
  );
}
