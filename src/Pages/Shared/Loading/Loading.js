import React from "react";

const Loading = () => {
  return (
    <>
      {/* <div className="text-center my-32">
        <div
          className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-blue-600 rounded-full "
          role="status"
          aria-label="loading"
        >
          <span className="sr-only"></span>
        </div>
      </div> */}
      {/* next  */}

      <div className="flex items-center justify-center min-h-screen">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
        ></div>
        <p className="ml-2">Loading...</p>
      </div>
    </>
  );
};

export default Loading;
