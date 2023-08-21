import React from "react";

function Stats() {
  const stats = [
    {
      name: "Projects Completed",
      value: "50+",
    },
    {
      name: "Happy Clients",
      value: "50+",
    },
    {
      name: "Team Members",
      value: "6",
    },
    {
      name: "Countries Served",
      value: "10+",
    },
  ];
  return (
    <div className="flex flex-col items-center space-y-12 w-full mt-16">
      <h2 className="text-4xl font-bold text-white/80">Our Stats</h2>
      <div className="flex flex-row items-center justify-evenly w-full">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex flex-col items-center justify-center space-y-2">
              <h3 className="text-6xl font-bold text-white">{stat.value}</h3>
              <p className="text-xl text-white/60">{stat.name}</p>
            </div>
            {index !== stats.length - 1 && (
              <div className="w-px h-24 bg-white/20"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
