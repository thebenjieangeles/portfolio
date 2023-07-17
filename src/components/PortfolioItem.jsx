import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  const handleViewLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-56 md:h-72 object-cover cursor-pointer"
        onClick={handleViewLink}
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 font-semibold border-2 border-gray-300 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
        <button
          className="bg-stone-800 text-white px-2 py-2 mt-3 border-gray-300 rounded-md mr-2"
          onClick={handleViewLink}
        >
          Live Page
        </button>
      </div>
    </div>
  );
}

export default PortfolioItem;
