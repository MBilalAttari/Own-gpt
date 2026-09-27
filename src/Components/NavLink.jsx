import React from "react";

const NavLink = () => {
  const items = [
    "Solutions",
    "Resources",
    "Community",
    "Enterprise",
    "Pricing",
    "Security",
  ];

  return (
    <div className="flex flex-col  lg:flex-row gap-5 lg:gap-6 text-black w-full">
      {items.map((item) => (
        <div
          key={item}
          className="cursor-pointer text-sm  hover:bg-gray-100 px-2 py-2  rounded-md lg:border-none w-full lg:text-base whitespace-nowrap"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default NavLink;