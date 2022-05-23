import React from "react";
import userData from "@constants/data";

export default function Footer() {
  return (
    <div className="bg-[#F1F1F1] text-gray-600 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="h-0.5 w-full bg-white dark:bg-gray-700"></div>
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>
              © forecho. All Rights Reserved.{" "}
              <a href="http://beian.miit.gov.cn/">鄂 ICP 备 14011839 号</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
