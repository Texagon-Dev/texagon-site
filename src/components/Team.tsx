import React, { HTMLAttributes } from "react";
import TeamCard from "./TeamCard";
import Team from "@/pages/team";

interface TeamMembers {
  id: number;
  avatar: any;
  name: string;
  category: { role: string; id: string }[];
  github: string;
  linkedin: string;
}

function TeamPage() {
  const teamMembers: TeamMembers[] = [
    {
      id: 1,
      avatar: "https://i.imgur.com/X0R3rPU.png",
      name: "Abdurehman Saleemi",
      category: [
        { role: "Founder", id: "1" },
        { role: "CEO", id: "2" },
      ],
      github: "https://github.com/AbdurehmanSaleemi/",
      linkedin: "https://www.linkedin.com/in/saleemi/",
    },
    {
      id: 2,
      avatar: "https://i.imgur.com/AE6kwIL.png",
      name: "Muhammad Talha",
      category: [
        { role: "Co-Founder", id: "1" },
        { role: "Director Technology", id: "2" },
      ],
      github: "https://github.com/mtalhazulf/",
      linkedin: "https://www.linkedin.com/in/muhammad-talha-5579a922b/",
    },
    {
      id: 3,
      avatar: "https://i.imgur.com/2llxrHc.png",
      name: "Muhammad Ahmed",
      category: [
        { role: "Co-Founder", id: "1" },
        { role: "Director HR & Finance", id: "2" },
      ],
      github: "https://github.com/maddiieerr2001/",
      linkedin: "https://www.linkedin.com/in/muhammad-ahmed-29b313264/",
    },
    {
      id: 4,
      avatar: "https://i.imgur.com/HqARoSR.png",
      name: "AbdulRahman Nadeem",
      category: [
        { role: "Co-Founder", id: "1" },
        { role: "Director Operations", id: "2" },
      ],
      github: "https://github.com/ar-nadeem/",
      linkedin: "https://www.linkedin.com/in/abdulrahman-nadeem/",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full py-12 font-secondary justify-center items-center">
        <h1 className="text-5xl mt-8 text-white tracking-widest font-bold uppercase">
          Meet our team
        </h1>
      </div>
      <div className="flex justify-center items-mcenter">
        <p className=" pb-5 text-white/70 text-xl ">
          We are a team of {teamMembers.length} people who are passionate about
          building products that people love.
        </p>
      </div>

      <hr className="w-full h-px border-white/20" />

      <div className="flex flex-row items-center  w-full mt-16">
        {/* {Print all team members} */}
        {teamMembers.map((obj) => (
          <div key={obj.id}>
            <TeamCard
              id={obj.id}
              avatar={obj.avatar}
              name={obj.name}
              category={obj.category}
              github={obj.github}
              linkedin={obj.linkedin}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamPage;
