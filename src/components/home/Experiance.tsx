import React from "react";
type ExprerianceType = {
  id: string,
  title: string,
  location: string,
  compName: string,
  startingDate: string,
  endDate: string,
  desc: string
}
export default function Experiance() {
  const experiance: ExprerianceType[] = [
    {
      id: "1",
      title: "Froned Developer",
      location: "Uttara",
      compName: "Next dot org",
      startingDate: "Des 15",
      endDate: "Jan 16",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
    }, {
      id: "2",
      title: "Froned Developer",
      location: "Uttara",
      compName: "Next dot org",
      startingDate: "Des 15",
      endDate: "Jan 16",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
    }, {
      id: "3",
      title: "Froned Developer",
      location: "Uttara",
      compName: "Next dot org",
      startingDate: "Des 15",
      endDate: "Jan 16",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptas."
    },
  ]
  return (
    <div className="2xl:w-content container mx-auto">
      <h3 className="mb-3 text-blue-700">{"{ Web Dev Portfolio }"}</h3>
      <h3 className="mb-6 text-blue-800/50 text-5xl font-bold relative uppercase">
        Experiance
      </h3>

      <div className="flex flex-col gap-y-12 ">
        {experiance?.map((exp, i) => <div className="flex border-b-[1px] md:pb-16 pb-8 md:items-center items-start px-8 md:flex-row flex-col justify-between" key={i}>
          <div className="order-0">
            <h2 className="text-lg text-gray-700 font-light ">{exp.title}</h2>
            <h2 className="text-3xl  ">{exp.title}</h2>
          </div>

          <p className="text-xl order-2 py-4 md:order-1 md:w-2/5 w-6/8 font-normal md:py-0">{exp.desc}</p>

          <h3 className="text-xl w-fit font-lignt  order-1 md:order-2 md:text-black text-gray-500">{exp.startingDate} - {exp.endDate}</h3>

        </div>)}
      </div>
    </div>
  );
}
