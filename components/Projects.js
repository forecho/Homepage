import React from "react";
import userData from "@constants/data";
import { motion } from "framer-motion";
import DynamicHeroIcon from "./DynamicHeroIcon";

export default function Projects() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-300 font-light">
            Some things I&apos;ve built to solve my own problems.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            },
            hidden: { opacity: 0 }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {userData.projects.map((project, index) => (
            <motion.a
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              href={project.link}
              key={index}
              className="group block p-6 bg-white dark:bg-gray-800 rounded-2xl transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
              target="_blank"
              rel="noreferrer"
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-40 transition duration-300 blur-2xl"></div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  <DynamicHeroIcon
                    icon={project.icon}
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition duration-300 relative z-10">
                {project.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed relative z-10">
                {project.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
