import Image from "next/image";
import React from "react";

export default function AboutMe() {
  return (
    <div className="xl:w-content container my-32 mx-auto">
      <div className="flex gap-x-8 flex-col md:flex-row">
        <div className="xl:w-1/2 md:w-[50%] w-[80%] my-auto mx-auto">
          <Image
            height={600}
            width={600}
            className="rounded-2xl"
            style={{ width: "100%" }}
            src={"/aboutImg.jpg"}
            alt=""
          />
        </div>
        <div className="  xl:w-1/2 md:w-[50%] w-[80%] md:my-auto my-8 mx-auto ">
          <h3 className="text-blue-800 text-lg font-bold uppercase">
            ABOUT ME
          </h3>
          <h2 className="text-2xl font-semibold text-slate-800 my-3">
            A dedicated Front-end Developer based in Dhaka, Bangladesh 📍
          </h2>
          <p className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            labore doloremque aliquam sequi quia aut ex atque, iure vel velit,
            dicta autem ipsa voluptas. Quae laboriosam unde illo praesentium
            autem.
          </p>
        </div>
      </div>
    </div>
  );
}
