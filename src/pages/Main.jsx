import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
   return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 text-white p-6 w-lvw">
         <div className="max-w-3xl text-center">
            <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
               Welcome to My Lab Website
            </h1>

            <section className="mb-8">
               <h2 className="text-3xl font-semibold mb-2">🎓 My University</h2>
               <p className="text-lg leading-relaxed">
                  I study at the{' '}
                  <a
                     href="https://knute.edu.ua/?en"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-cyan-300 underline hover:text-cyan-400"
                  >
                     Kyiv National University of Trade and Economics (KNUTE)
                  </a>
                  , a respected institution in Ukraine focused on economics,
                  business, and technology.
               </p>
            </section>

            <section className="mb-8">
               <h2 className="text-3xl font-semibold mb-2">👨‍💻 About Me</h2>
               <p className="text-lg leading-relaxed">
                  My name is Vlad Mazurenko, and I'm passionate about
                  programming, design, and building web applications. I enjoy
                  experimenting with new technologies and contributing to
                  open-source projects. Check out my work on{' '}
                  <a
                     href="https://github.com/Mazurofficial"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-green-300 underline hover:text-green-400"
                  >
                     GitHub
                  </a>
                  .
               </p>
            </section>

            <section className="mb-10">
               <h2 className="text-3xl font-semibold mb-2">
                  🌐 About This Website
               </h2>
               <p className="text-lg leading-relaxed">
                  This website was created as a part of a lab project using
                  modern front-end tools and best practices. It serves as a
                  personal space to practice routing, styling, and
                  component-based architecture in React.
               </p>
               <p className="text-lg mt-2">
                  <strong>Tech stack:</strong> Vite, React, React Router,
                  Tailwind CSS, and JavaScript.
               </p>
            </section>

            <Link
               to="/about"
               className="inline-block mt-4 px-6 py-2 bg-white text-indigo-900 font-semibold rounded-full shadow hover:bg-gray-200 transition"
            >
               👉 Learn More About This Site
            </Link>
         </div>
      </main>
   );
};

export default Main;
