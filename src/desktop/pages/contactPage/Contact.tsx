import Address from "../../components/icons/contact/Address";
import PhoneIcon from "../../components/icons/contact/PhoneIcon";

import TypingText from "../../components/WrittenTitle";

export default function Contact() {
  return (
    <div className="flex items-center h-[75vh] relative -top-[25%] left-[10%] 2xl:-top-[15%] 2xl:left-[5%] max-sm:-top-20">
      <div className="flex flex-col relative left-0 top-[15%] 2xlleft-[0]">
        <div>
          <TypingText
            textLine1="Contato"
            textLine2="Onde me achar?"
            speed={70}
          />
        </div>
        <div className="flex max-sm:flex-col gap-30 max-sm:gap-10 text-sm 2xl:text-base">
          <figure className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <Address size={25} />
              <span>e-mail</span>
            </div>
            <span className="opacity-80">ga.paulettiegea@gmail.com</span>
          </figure>
          <figure className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <PhoneIcon size={25} />
              telefone:
            </div>
            <span className="opacity-80">15 99612-3072</span>
          </figure>
        </div>
      </div>
    </div>
  );
}
