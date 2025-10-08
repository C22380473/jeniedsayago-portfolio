import { RevealOnScroll } from "../RevealOnScroll";
import { Github } from "lucide-react";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-colds-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                🚖 "Her Way": Women-Only Taxi App
              </h3>
              <p className="text-gray-400 mb-4">
                Built a cross-compatible mobile app connecting women drivers and
                passengers in a safe, female-only environment. I helped develop
                the UI components in the frontend and collaborated with backend
                developers with user verification and database integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React Native", "Node.js", "PostgreSQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a className="text-purple-400 transition-colors my-4">
                  View Project ➔{" "}
                </a>
                <a
                  href="https://github.com/C22380473/taxi-app-women"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub repository"
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-25 py-1.5 rounded-lg hover:bg-purple-500/10 hover:border-purple-500 transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 text-sm font-medium">
                    GitHub
                  </span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">🎮 Game Tracker App</h3>
              <p className="text-gray-400 mb-4">
                Developed an Android mobile CRUD app that lets users log and
                categorise their game collections. Focused on intuitive design
                and local storage to deliver a clean, user-friendly experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Kotlin (Java)", "Android Studio", "RoomDB"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a className="text-purple-400 transition-colors my-4">
                  View Project ➔{" "}
                </a>
                <a
                  href="https://github.com/C22380473/game-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub repository"
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-25 py-1.5 rounded-lg hover:bg-purple-500/10 hover:border-purple-500 transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 text-sm font-medium">
                    GitHub
                  </span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">🥣 Recipe Web App</h3>
              <p className="text-gray-400 mb-4">
                Created a full-stack recipe-sharing platform with secure login
                and user-generated content. I designed RESTful routes,
                implemented backend logic, and managed data storage in MongoDB,
                contributing to smooth team Git workflows and version control.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Bootstrap", "MongoDB", "Node.js", "Express.js"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a className="text-purple-400 transition-colors my-4">
                  View Project ➔{" "}
                </a>
                <a
                  href="https://github.com/C22380473/webdevproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub repository"
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-25 py-1.5 rounded-lg hover:bg-purple-500/10 hover:border-purple-500 transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 text-sm font-medium">
                    GitHub
                  </span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                🌍 Localised Travel Website
              </h3>
              <p className="text-gray-400 mb-4">
                Built a multilingual travel website demonstrating globalisation
                and localisation techniques. I implemented Flask routing,
                Bootstrap-based UI, and dynamic language switching using
                Flask-Babel.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML/CSS/Javascript", "Flask", "Jinja", "Python"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a className="text-purple-400 transition-colors my-4">
                  View Project ➔{" "}
                </a>
                <a
                  href="https://github.com/C22380473/travel-website-localisation"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub repository"
                  className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-25 py-1.5 rounded-lg hover:bg-purple-500/10 hover:border-purple-500 transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 text-sm font-medium">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
