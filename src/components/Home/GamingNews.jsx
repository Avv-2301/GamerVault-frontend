import React from "react";

const GamingNews = () => {
  const newsItems = [
    {
      title: "World Championship Finals This Weekend",
      description:
        "The biggest esports tournament of the year is happening this weekend...",
      tag: "ESPORTS",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/4e3d9e87ee-aee0fc202f827c396f84.png",
    },
    {
      title: "New Indie Game Takes the World by Storm",
      description:
        "An unexpected indie title has captured millions of players worldwide...",
      tag: "RELEASES",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/0397989e02-49c34dff5ff0b275574c.png",
    },
    {
      title: "Next-Gen VR Gaming Revolution",
      description:
        "Virtual reality gaming reaches new heights with groundbreaking technology...",
      tag: "TECH",
      image: "https://storage.googleapis.com/uxpilot-auth.appspot.com/788c10e9dc-7d746269ead8be3ce828.png",
    },
  ];
  return (
    <section className="bg-[#0d1117] text-white px-8 py-10">
      <h3 className="text-2xl font-bold mb-6">
        Latest <span className="text-white">Gaming News</span>
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#161b22] rounded-lg shadow hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.title}
              className="rounded-md h-56 w-full object-cover mb-4"
            />
            <span className="text-sm text-indigo-400 font-semibold">
              {item.tag}
            </span>
            <h4 className="text-lg font-bold mt-2">{item.title}</h4>
            <p className="text-sm text-gray-400 mt-1">{item.description}</p>
            <a
              href="#"
              className="text-indigo-400 text-sm mt-2 inline-block hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamingNews;
