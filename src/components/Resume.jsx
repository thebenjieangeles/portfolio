import React from "react";

const StickyResumeDownload = () => {
  const handleDownload = () => {
    window.location.href = "src/images/Benjie Angeles Resume.pdf";
  };

  return (
    <div className="fixed top-0 z-0 p-4">
      <button
        className="bg-gray-900 hover:bg-gray-300 dark:bg-white dark:text-black dark:hover:bg-gray-500 text-white font-bold py-1 px-2 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm"
        onClick={handleDownload}
      >
        <span className="mr-1">Download Resume</span>
      </button>
    </div>
  );
};

export default StickyResumeDownload;
