import Link from "next/link";

interface Work {
  id: string;
  title: string;
  details: string;
  images: string[];
  techStack: { tech: string; id: string }[];
}

function WorkPage() {
  const work: Work[] = [
    {
      id: "1",
      title: "Ernie",
      details: "Details 1",
      images: ["https://i.imgur.com/otRx4mN.png"],
      techStack: [
        { tech: "React", id: "1" },
        { tech: "NodeJS", id: "2" },
        { tech: "Supabase", id: "3" },
        { tech: "ChakraUI", id: "4" },
      ],
    },
    {
      id: "2",
      title: "Znap",
      details: "Details 2",
      images: ["https://i.imgur.com/9ffi5k7.png"],
      techStack: [
        { tech: "React", id: "1" },
        { tech: "Supabase", id: "2" },
        { tech: "TailwindCSS", id: "3" },
      ],
    },
    {
      id: "3",
      title: "GreatGov",
      details: "Details 3",
      images: ["https://i.imgur.com/4LhrzdE.png"],
      techStack: [
        { tech: "React", id: "1" },
        { tech: "NodeJS", id: "2" },
        { tech: "Supabase", id: "3" },
        { tech: "TailwindCSS", id: "4" },
      ],
    },
    {
      id: "4",
      title: "SerotechAI",
      details: "Details 4",
      images: [
        "https://i.imgur.com/TsuhAUp.png",
        "https://i.imgur.com/Rkd3pIp.png",
      ],
      techStack: [
        { tech: "React", id: "1" },
        { tech: "NodeJS", id: "2" },
        { tech: "Supabase", id: "3" },
        { tech: "TailwindCSS", id: "4" },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full h-full font-secondary">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 p-5">
        {work.map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-gray-100/10 hover:bg-gray-100/20 transition-all ease-linear p-3 rounded-xl"
          >
            <div className="flex flex-col justify-center items-center w-full rounded-xl">
              <div className="flex flex-row justify-center items-center w-full">
                <img src={item.images[0]} className="h-full rounded-xl" />
              </div>
              <div className="flex flex-col mt-5 h-full">
                <h1 className="text-2xl text-center font-bold text-white uppercase tracking-wider">
                  {item.title}
                </h1>
                <div className="flex flex-wrap flex-row justify-center mt-5">
                  {item.techStack.map((obj) => (
                    <div
                      key={obj.id}
                      className="flex flex-row justify-center items-center px-2 py-1 m-2 bg-gray-200/10 text-white rounded-full"
                    >
                      <p className="text-sm text-white">{obj.tech}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href={`/work/${item.id}`}
                className="px-3 mt-8 mb-4 py-1 text-lg font-medium text-black bg-white/90 border border-white rounded-lg hover:bg-white transition-all ease-linear"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkPage;
