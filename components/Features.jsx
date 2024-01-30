import React from "react";
import { FireIcon } from "@heroicons/react/24/outline";

const FeatureList = () => {
  const features = [
    {
      name: "Mern Stack",
      icon: FireIcon,
    },
    {
      name: "Devops Basics",
      icon: FireIcon,
    },
    {
      name: "Open Source (GSOC)",
      icon: FireIcon,
    },
    {
      name: "Portfolio Projects",
      icon: FireIcon,
    },
    {
      name: "System Design",
      icon: FireIcon,
    },
    {
      name: "Devops",
      icon: FireIcon,
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center"
            style={{ padding: "14px" }}
          >
            <FireIcon
              style={{ width: "25", height: "25", display: "inline-block" }}
            />
            <span style={{ fontSize: "16px", margin: "10px", padding: "10px" }}>
              {feature.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
