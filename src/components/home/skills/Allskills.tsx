import TSkill from "@/types/documents/skills";
import Image from "next/image";
import React from "react";

export default function AllSkills({
  skills,
  id,
}: {
  skills: TSkill[];
  id: number;
}) {
  const [toggle, setToggle] = React.useState(2);

  return (
    <div>
      <details
        open={id === 0}
        className="open:bg-white my-2 ring-1 ring-black/5  open:shadow-lg p-6 rounded-lg"
      >
        <summary className="cursor-pointer text-sm leading-6 text-slate-900  font-semibold select-none">
          <span className="text-2xl uppercase relative   text-slate-900">
            {skills[0].category}
          </span>
        </summary>
        <div className="mt-3 text-sm leading-6 text-slate-600 ">
          <div>
            <p className="my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              ipsam fugiat possimus consequuntur. Autem qui, nobis
              reprehenderit, officia fuga obcaecati voluptas ut facilis,
            </p>
            <div className="">
              <div className={"flex flex-wrap py-5 "}>
                {skills?.slice(0, toggle).map((skill: TSkill, i: number) => (
                  <div key={i} className="w-1/2 flex items-start">
                    <Image
                      onClick={() => window.open(skill.link, "_blank")}
                      width="80"
                      height="80"
                      style={{
                        width: "60px",
                        height: "60px",
                        cursor: "pointer",
                      }}
                      src={skill.icon}
                      alt={skill.alt}
                    />
                    <div className="w-full pt-2 px-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                        <div
                          className="bg-blue-200 h-2.5 rounded-full"
                          style={{ width: skill.level + "%" }}
                        ></div>
                      </div>
                      <p className="my-2">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {skills.length > 2 ? (
                <div
                  className="  mx-auto block w-full"
                  onClick={() => setToggle(toggle === 2 ? 99 : 2)}
                >
                  {
                    <Image
                      className="mx-auto py-2"
                      width="24"
                      height="24"
                      src={
                        toggle != 2
                          ? "https://img.icons8.com/material-rounded/24/chevron-up.png"
                          : "https://img.icons8.com/material-rounded/24/chevron-down.png"
                      }
                      alt="chevron-up"
                    />
                  }
                </div>
              ) : (
                ""
              )}
              <br />
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}

/*   <div>
      <span className="text-3xl uppercase relative font-bold  text-slate-900">
        {skills[0].category}
      </span>
      <div>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam
          fugiat possimus consequuntur. Autem qui, nobis reprehenderit, officia
          fuga obcaecati voluptas ut facilis,
        </p>
        <div className="">
          <div className={"flex flex-wrap py-5 "}>
            {skills?.slice(0, toggle).map((skill: TSkill, i: number) => (
              <div key={i} className="w-1/2 flex items-start">
                <Image
                  onClick={() => window.open(skill.link, "_blank")}
                  width="80"
                  height="80"
                  style={{ width: "60px", height: "60px", cursor: "pointer" }}
                  src={skill.icon}
                  alt={skill.alt}
                />
                <div className="w-full pt-2 px-2">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                    <div
                      className="bg-blue-200 h-2.5 rounded-full"
                      style={{ width: skill.level + "%" }}
                    ></div>
                  </div>
                  <p className="my-2">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>

          {skills.length > 2 ? (
            <div
              className="  mx-auto block w-full"
              onClick={() => setToggle(toggle === 2 ? 99 : 2)}
            >
              {
                <Image
                  className="mx-auto py-2"
                  width="24"
                  height="24"
                  src={
                    toggle != 2
                      ? "https://img.icons8.com/material-rounded/24/chevron-up.png"
                      : "https://img.icons8.com/material-rounded/24/chevron-down.png"
                  }
                  alt="chevron-up"
                />
              }
            </div>
          ) : (
            ""
          )}
          <br />
        </div>
      </div>
    </div> */
