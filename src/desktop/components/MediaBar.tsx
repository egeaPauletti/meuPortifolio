import GithubIcon from "./icons/mediaBar/GithubIcon";
import LinkedinIcon from "./icons/mediaBar/LinkedinIcon";
import WhatsappIcon from "./icons/mediaBar/WhatsappIcon";

export default function MediaBar() {
  return (
    <>
      <div className="absolute bottom-10 right-40 toTopAnimation2">
        <ul className="hidden 2xl:flex gap-25">
          <li className="hoverMediaBar">
            <div className="flex gap-2 items-center firaCode underlineMediaBar">
              <GithubIcon size={20} />
              <a href="https://github.com/egeaPauletti" target="_blank">
                <span className="text-sm ">github</span>
              </a>
            </div>
          </li>

          <li className="hoverMediaBar">
            <div className="flex gap-2 items-center firaCode underlineMediaBar">
              <LinkedinIcon size={20} />
              <a
                href="https://www.linkedin.com/in/egeapauletti"
                target="_blank"
              >
                <span className="text-sm ">linkedIn</span>
              </a>
            </div>
          </li>

          <li className="hoverMediaBar">
            <div className="underlineMediaBar ">
              <div className="flex gap-2 items-center firaCode  hover-image">
                <WhatsappIcon size={20} />
                <span className="text-sm ">whatsapp</span>
              </div>
            </div>
          </li>
        </ul>

        <ul className="flex 2xl:hidden gap-25">
          <li className="hoverMediaBar">
            <div className="flex gap-2 items-center firaCode underlineMediaBar">
              <GithubIcon size={20} />
              <a href="https://github.com/egeaPauletti" target="_blank">
                <span className="text-sm ">github</span>
              </a>
            </div>
          </li>

          <li className="hoverMediaBar">
            <div className="flex gap-2 items-center firaCode underlineMediaBar">
              <LinkedinIcon size={20} />
              <a
                href="https://www.linkedin.com/in/egeapauletti"
                target="_blank"
              >
                <span className="text-sm ">linkedIn</span>
              </a>
            </div>
          </li>

          <li className="hoverMediaBar">
            <a href="https://wa.me/qr/C3GAJUTLRX5HM1" target="_blank">
              <div className="underlineMediaBar ">
                <div className="flex gap-2 items-center firaCode  hover-image">
                  <WhatsappIcon size={20} />
                  <span className="text-sm ">whatsapp</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
