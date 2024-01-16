import { ReactNode } from "react";
import React from "react";

interface PropsType {
  title: String;
  icon: ReactNode;
  desc: String;
}

const ServiceCard = ({ title, icon, desc }: PropsType) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="text-[40px] text-primary">{icon}</div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm sm:text-[16px] text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
