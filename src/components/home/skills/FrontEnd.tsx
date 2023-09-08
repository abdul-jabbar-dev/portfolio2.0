import Image from "next/image";
import React from "react";

export default function FrontEnd() {
  let skills = [
    {
      name: "HTML",
      icon: "https://img.icons8.com/color/80/html-5.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utfugit nulla pariatur enim ducimus dolor.",
      level: "60",
      link: "",
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/color/80/css3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utfugit nulla pariatur enim ducimus dolor.",
      level: "60",
      link: "",
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/color/80/tailwindcss.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utfugit nulla pariatur enim ducimus dolor.",
      level: "60",
      link: "",
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/color/80/javascript--v1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utfugit nulla pariatur enim ducimus dolor.",
      level: "60",
      link: "",
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/color/80/react-native.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utfugit nulla pariatur enim ducimus dolor.",
      level: "60",
      link: "",
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/color/80fluency/80/nextjs.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utfugit nulla pariatur enim ducimus dolor.",
      level: "60",
      link: "",
    },
    {
      name: "CSS",
      icon: "https://img.icons8.com/color/80fluency/80/redux.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Utfugit nulla pariatur enim ducimus dolor.",
      level: "60",
      link: "",
    },
  ];
  return (
    <div>
      <div className="text-3xl font-bold text-slate-900">
        FrontEnd <span className="text-xl text-green-900">60%</span>
      </div>
      <div>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ipsam
          fugiat possimus consequuntur. Autem qui, nobis reprehenderit, officia
          fuga obcaecati voluptas ut facilis,
        </p>
        <div>
          <div className="flex flex-wrap py-5">
            {skills?.map((skill, i) => (
              <div key={i} className="w-1/2 flex items-start">
                <Image
                  width="80"
                  height="80"
                  style={{ width: "60px", height: "60px" }}
                  src={skill.icon}
                  alt="css3"
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

          {/*  <div className="flex my-3 items-center w-full gap-x-6">
            <div className=" w-3/5 flex items-center gap-3 ">
              <div>
                <h3>HTML</h3>
                <Image
                  width="52"
                  height="52"
                  src="https://img.icons8.com/color/48/css3.png"
                  alt="css3"
                />
              </div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              dolores accusantium reiciendis architecto maiores suscipit fugiat
              tempore tempora ea aliquam.
            </div>

            <div className="w-2/5">
              <div className="w-full bg-gray-200 rounded-full h-2.5 ">
                <div
                  className="bg-blue-200 h-2.5 rounded-full"
                  style={{ width: " 45%" }}
                ></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
