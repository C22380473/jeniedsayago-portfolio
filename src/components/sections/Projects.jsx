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
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '🚖 "Her Way": Women-Only Taxi App',
                description:
                  "Built a cross-compatible mobile app connecting women drivers and passengers in a safe, female-only environment. I helped develop the UI components in the frontend and collaborated with backend developers with user verification and database integration.",
                tech: ["React Native", "Node.js", "PostgreSQL"],
                projectLink: "#",
                github: "https://github.com/C22380473/taxi-app-women",
              },
              {
                title: "🎮 Game Tracker App",
                description:
                  "Developed an Android mobile CRUD app that lets users log and categorise their game collections. Focused on intuitive design and local storage to deliver a clean, user-friendly experience.",
                tech: ["Kotlin (Java)", "Android Studio", "RoomDB"],
                projectLink: "#",
                github: "https://github.com/C22380473/game-tracker",
              },
              {
                title: "🥣 Recipe Web App",
                description:
                  "Created a full-stack recipe-sharing platform with secure login and user-generated content. I designed RESTful routes, implemented backend logic, and managed data storage in MongoDB, contributing to smooth team Git workflows and version control.",
                tech: ["Bootstrap", "MongoDB", "Node.js", "Express.js"],
                projectLink: "#",
                github: "https://github.com/C22380473/webdevproject",
              },
              {
                title: "🌍 Localised Travel Website",
                description:
                  "Built a multilingual travel website demonstrating globalisation and localisation techniques. I implemented Flask routing, Bootstrap-based UI, and dynamic language switching using Flask-Babel.",
                tech: ["HTML/CSS/JavaScript", "Flask", "Jinja", "Python"],
                projectLink: "#",
                github:
                  "https://github.com/C22380473/travel-website-localisation",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-purple-500/30 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href={project.projectLink}
                    className="text-purple-400 hover:text-purple-300 font-medium transition"
                  >
                    View Project ➔
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View GitHub repository"
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:bg-purple-500/10 hover:border-purple-500 transition-all hover:-translate-y-0.5"
                  >
                    <Github className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm font-medium">
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
