import React from "react";

const StickyResumeDownload = () => {
  const handleDownload = () => {
    const fileUrl = "assets/Benjie-Angeles-Resume.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Benjie-Angeles-Resume.pdf";
    link.click();
  };

  return (
    <div className="fixed top-0 left-0 p-4">
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
