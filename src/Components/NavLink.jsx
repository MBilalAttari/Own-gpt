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
  return <div className="flex ml-15 gap-6 text-black items-center">
    {items.map((item, index) => (
      <div key={index}>{item}</div>
    ))}
  </div>;
};

export default NavLink;
