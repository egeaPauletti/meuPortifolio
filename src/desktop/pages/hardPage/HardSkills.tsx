import "./index.css";
//
import HardItem from "../../components/HardItem";
import CSSIcon from "../../components/icons/hardskills/CSSIcon";
import ExpressIcon from "../../components/icons/hardskills/ExpressIcon";
import FigmaIcon from "../../components/icons/hardskills/FigmaIcon";
import GitIcon from "../../components/icons/hardskills/GitIcon";
import HtmlIcon from "../../components/icons/hardskills/HtmIcon";
import JSIcon from "../../components/icons/hardskills/JSIcon";
import MongoDBIcon from "../../components/icons/hardskills/MongoDBIcon";
import MySqlIcon from "../../components/icons/hardskills/MySqlIcon";
import NestIcon from "../../components/icons/hardskills/NestIcon";
import NodeIcon from "../../components/icons/hardskills/NodeIcon";
import PrismaIcon from "../../components/icons/hardskills/PrismaIcon";
import ReactIcon from "../../components/icons/hardskills/ReactIcon";
import TailwindIcon from "../../components/icons/hardskills/TailIcon";
import TypeIcon from "../../components/icons/hardskills/TypeIcon";
import TypingText from "../../components/WrittenTitle";

export default function HardSkills() {
  return (
    <>
      <div className="flex items-center h-screen relative -top-[15%] left-[10%] 2xl:-top-[15%] 2xl:left-[5%]">
        <div className="hidden max-sm:flex flex-col relative left-0 top-[10%] pb-15 max-sm:overflow-y-auto">
          <div className="flex flex-col">
            <div>
              <TypingText textLine1="Minhas" textLine2="Hard Skills" />
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex gap-15">
                <div className="flex flex-col gap-5">
                  <span className="font-bold text-xs">Front-End</span>
                  <div>
                    <HardItem
                      color="#E44D26"
                      text="HTML"
                      component={() => <HtmlIcon size={15} />}
                    />
                  </div>
                  <div>
                    <HardItem
                      color="#1172B8"
                      text="CSS"
                      component={() => <CSSIcon size={15} />}
                    />
                  </div>
                  <div>
                    <HardItem
                      color="#f7df1e"
                      text="JavaScript"
                      component={() => <JSIcon size={15} />}
                    />
                  </div>
                  <div>
                    <HardItem
                      color="#00D8FF"
                      text="React"
                      component={() => <ReactIcon size={15} />}
                    />
                  </div>
                  <div>
                    <HardItem
                      color="#007ACC"
                      text="Typescript"
                      component={() => <TypeIcon size={15} />}
                    />
                  </div>
                  <div>
                    <HardItem
                      color="#44a8b3"
                      text="Tailwind"
                      component={() => <TailwindIcon size={15} />}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <span className="font-bold text-xs">Back-End</span>
                  <div>
                    <HardItem
                      color="#539E43"
                      text="Node"
                      component={() => <NodeIcon size={15} />}
                    />
                  </div>
                  <div>
                    <HardItem
                      color="#FFF"
                      text="Express"
                      component={() => <ExpressIcon size={25} />}
                    />
                  </div>
                  <div>
                    <HardItem
                      color="#ff0844"
                      text="Nest"
                      component={() => <NestIcon size={25} />}
                    />
                  </div>
                  <div>
                    <HardItem
                      color="#007acc"
                      text="Prisma"
                      component={() => <PrismaIcon size={25} />}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-15">
                <div className="flex flex-col gap-5">
                  <span className="font-bold text-xs">Banco de Dados</span>
                  <div>
                    <HardItem
                      color="#f8981d"
                      text="MySql"
                      component={() => <MySqlIcon size={30} />}
                    />
                  </div>
                  <div>
                    <HardItem
                      color="#336791"
                      text="PostgreSql"
                      component={() => <MongoDBIcon size={15} />}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <span className="font-bold text-xs">Outros</span>
                  <div>
                    <HardItem
                      color="#EE513B"
                      text="Git "
                      component={() => <GitIcon size={15} />}
                    />
                  </div>
                  <div>
                    <HardItem
                      color="#A259FF"
                      text="Figma "
                      component={() => <FigmaIcon size={15} />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* base */}
        <div className=" hidden sm:flex flex-col relative left-0 top-[10%] 2xlleft-[0] ">
          <div className="flex flex-col gap-10">
            <div>
              <TypingText textLine1="Minhas" textLine2="Hard Skills" />
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-10 toRightAnimation pr-[30%] 2xl:pr-[50%] rightLine">
                <div className="flex flex-col gap-5">
                  <span className="font-bold">Front-End</span>
                  <div className="flex flex-col gap-5 topLine ">
                    <div className="flex gap-10 ">
                      <div>
                        <HardItem
                          color="#E44D26"
                          text="HTML"
                          component={() => <HtmlIcon size={15} />}
                        />
                      </div>
                      <div>
                        <HardItem
                          color="#1172B8"
                          text="CSS"
                          component={() => <CSSIcon size={15} />}
                        />
                      </div>
                      <div>
                        <HardItem
                          color="#f7df1e"
                          text="JavaScript"
                          component={() => <JSIcon size={15} />}
                        />
                      </div>
                      <div>
                        <HardItem
                          color="#00D8FF"
                          text="React"
                          component={() => <ReactIcon size={15} />}
                        />
                      </div>
                    </div>
                    <div className="flex gap-10">
                      <div>
                        <HardItem
                          color="#007ACC"
                          text="Typescript"
                          component={() => <TypeIcon size={15} />}
                        />
                      </div>
                      <div>
                        <HardItem
                          color="#44a8b3"
                          text="Tailwind"
                          component={() => <TailwindIcon size={15} />}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 ">
                  <span className="font-bold">Back-End</span>
                  <div className="flex flex-col gap-5 topLine">
                    <div className="flex gap-10">
                      <div>
                        <HardItem
                          color="#539E43"
                          text="Node"
                          component={() => <NodeIcon size={15} />}
                        />
                      </div>
                      <div>
                        <HardItem
                          color="#FFF"
                          text="Express"
                          component={() => <ExpressIcon size={25} />}
                        />
                      </div>
                      <div>
                        <HardItem
                          color="#ff0844"
                          text="Nest"
                          component={() => <NestIcon size={25} />}
                        />
                      </div>
                      <div>
                        <HardItem
                          color="#007acc"
                          text="Prisma"
                          component={() => <PrismaIcon size={25} />}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5 ">
                  <span className="font-bold">DataBase</span>
                  <div className="flex flex-col gap-5 topLine">
                    <div className="flex gap-10">
                      <div>
                        <HardItem
                          color="#f8981d"
                          text="MySql"
                          component={() => <MySqlIcon size={30} />}
                        />
                      </div>
                      <div>
                        <HardItem
                          color="#336791"
                          text="PostgreSql"
                          component={() => <MongoDBIcon size={15} />}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative flex flex-col gap-5 toTopAnimation2">
                  <span className="font-bold">Outros</span>
                  <div className="flex flex-col gap-10">
                    <div>
                      <HardItem
                        color="#EE513B"
                        text="Git "
                        component={() => <GitIcon size={15} />}
                      />
                    </div>
                    <div>
                      <HardItem
                        color="#A259FF"
                        text="Figma "
                        component={() => <FigmaIcon size={15} />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
