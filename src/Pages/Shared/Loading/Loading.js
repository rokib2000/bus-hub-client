import React from "react";

const Loading = () => {
  return (
    <div className="text-center my-32">
      <div
        className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-blue-600 rounded-full "
        role="status"
        aria-label="loading"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;
