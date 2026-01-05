import React from "react";
import userData from "@constants/data";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] text-gray-600 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div className="flex flex-col items-center justify-center w-full md:flex-row md:justify-between">
            <p className="text-sm md:text-base font-medium">© {new Date().getFullYear()} forecho. All Rights Reserved.</p>
            <div className="mt-2 md:mt-0 text-sm text-gray-500 hidden md:block">
              Designed with <span className="text-red-500">♥</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
