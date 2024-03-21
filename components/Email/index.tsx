import React from "react";

function Email() {
  return (
    <div className="py-[100px]">
      <div className="h-[4px] bg-[#b28959] w-full"></div>
      <div className="flex flex-col items-center my-10">
        <h2 className="text-heading4-medium text-primary-500 mb-2">
          DON’T MISS OUR NEWS, STAY IN TOUCH!
        </h2>
        <div className="relative cursor-pointer">
          <input
            type="text"
            placeholder="Your email"
            className="p-4 border border-solid border-[#b28959] lg:min-w-[600px] min-w-[400px] focus:border-[white] text-slate-500 rounded-md"
          ></input>
          <div className="absolute right-2 top-[50%] translate-y-[-50%]">
            <svg
              height={20}
              width={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              fill="#b28959"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="h-[4px] bg-[#b28959] w-full"></div>
    </div>
  );
}

export default Email;
