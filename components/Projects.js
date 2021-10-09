import React from "react";
import userData from "@constants/data";
import DynamicHeroIcon from "./DynamicHeroIcon";

export default function Projects() {
  return (
    <div className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          我的项目
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500">
          Side Projects 集合
        </p>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {userData.projects.map((project) => (
              <div key={project.name} className="relative">
                <a href={project.link}>
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <DynamicHeroIcon
                        icon={project.icon}
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>

                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {project.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {project.description}
                  </dd>
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
