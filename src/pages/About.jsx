import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
   return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white p-6 w-lvw">
         <div className="max-w-3xl text-center">
            <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
               About This Website
            </h1>

            <section className="mb-8">
               <h2 className="text-3xl font-semibold mb-2">🎯 Purpose</h2>
               <p className="text-lg leading-relaxed">
                  The goal of this lab work is to demonstrate the use of React
                  for creating modern web applications. It includes setting up a
                  router, components, styling with Tailwind CSS, and working
                  with deployment tools.
               </p>
            </section>

            <section className="mb-8">
               <h2 className="text-3xl font-semibold mb-2">
                  🛠 Technologies Used
               </h2>
               <ul className="text-lg list-disc list-inside space-y-1 text-left pl-8 inline-block">
                  <li>
                     <strong>Vite:</strong> blazing fast build tool
                  </li>
                  <li>
                     <strong>React:</strong> component-based UI library
                  </li>
                  <li>
                     <strong>React Router:</strong> navigation and routing
                  </li>
                  <li>
                     <strong>JavaScript:</strong> main scripting language
                  </li>
                  <li>
                     <strong>Tailwind CSS:</strong> modern utility-first CSS
                     framework
                  </li>
               </ul>
            </section>

            <section className="mb-8">
               <h2 className="text-3xl font-semibold mb-2">🚀 What's Next?</h2>
               <p className="text-lg leading-relaxed">
                  In the future, I plan to enhance this project with contact
                  forms, animations, interactive components, and backend
                  integration for real data handling. This lab was a great start
                  toward becoming a better full-stack developer.
               </p>
            </section>

            <Link
               to="/"
               className="inline-block mt-4 px-6 py-2 bg-white text-purple-900 font-semibold rounded-full shadow hover:bg-gray-200 transition"
            >
               ← Back to Home
            </Link>
         </div>
      </main>
   );
};

export default About;
