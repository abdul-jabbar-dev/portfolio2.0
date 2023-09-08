import React from "react";
import FrontEnd from "./skills/FrontEnd";
import BackEnd from "./skills/BackEnd";

export default function Skills() {
  return (
    <div className="xl:w-content container mx-auto">
      <FrontEnd />
      <BackEnd />
    </div>
  );
}
