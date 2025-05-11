import GithubIcon from "./icons/mediaBar/GithubIcon";
import InstagramIcon from "./icons/mediaBar/InstagramIcon";
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
              <span className="text-sm ">github</span>
            </div>
          </li>
          <li className="hoverMediaBar">
            <div className="flex gap-2 items-center firaCode underlineMediaBar">
              <LinkedinIcon size={20} />
              <span className="text-sm ">linkedIn</span>
            </div>
          </li>
          <li className="hoverMediaBar">
            <div className="flex gap-2 items-center firaCode underlineMediaBar">
              <InstagramIcon size={20} />
              <span className="text-sm ">instagram</span>
            </div>
          </li>
          <li className="hoverMediaBar">
            <div className="flex gap-2 items-center firaCode underlineMediaBar">
              <WhatsappIcon size={20} />
              <span className="text-sm ">whatsapp</span>
            </div>
          </li>
        </ul>

        <ul className="flex 2xl:hidden gap-25">
          <li className="hoverMediaBar">
            <div className="flex gap-2 items-center firaCode underlineMediaBar">
              <GithubIcon size={13} />
              <span className="text-[12px] ">github</span>
            </div>
          </li>
          <li className="hoverMediaBar">
            <div className="flex gap-2 items-center firaCode underlineMediaBar">
              <LinkedinIcon size={13} />
              <span className="text-[12px] ">linkedIn</span>
            </div>
          </li>
          <li className="hoverMediaBar">
            <div className="flex gap-2 items-center firaCode underlineMediaBar">
              <InstagramIcon size={13} />
              <span className="text-[12px] ">instagram</span>
            </div>
          </li>
          <li className="hoverMediaBar">
            <div className="flex gap-2 items-center firaCode underlineMediaBar">
              <WhatsappIcon size={13} />
              <span className="text-[12px] ">whatsapp</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
