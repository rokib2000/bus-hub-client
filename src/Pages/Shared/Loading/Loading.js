import React from "react";

const Loading = () => {
  return (
    <div>
      <div
        class="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-red-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span class="sr-only"></span>
      </div>
    </div>
  );
};

export default Loading;
