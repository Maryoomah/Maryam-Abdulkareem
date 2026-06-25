import Section from "./components/Section";
import About from "./components/about";
import { projects } from "./data/projects";
import Hero from "./components/hero";
export default function Home() {

  return (
    <main>
      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />
 {/* SERVICES */}
      <Section
        id="services"
        className="bg-purple-50"
        containerClassName="max-w-6xl"
      >
        {/* heading */}
        <div className="text-center max-w-3xl mx-auto">
          {/* <p className="text-sm uppercase tracking-widest text-purple-700 font-semibold">
            Services
          </p> */}

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-purple-700">
            What I Do
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            I create modern and responsive frontend web experiences focused on
            usability, clarity, and clean design.
          </p>
        </div>

        {/* services grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* service 1 */}
          <div
            className="
    group
    relative
    overflow-hidden
    rounded-3xl
    bg-white/80
    backdrop-blur
    border
    border-purple-100
    p-6
    shadow-sm
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-purple-300
    hover:shadow-2xl
    hover:shadow-purple-100
  "
          >
            {/* glow effect */}
            <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-purple-200/40 opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative">
              {/* icon */}
              <div
                className="
        w-12
        h-12
        rounded-2xl
        bg-purple-100
        flex
        items-center
        justify-center
        text-2xl
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:bg-purple-200
      "
              >
                💻
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                Websites
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Responsive websites designed to help clients establish a modern
                and professional online presence.
              </p>
            </div>
          </div>

          {/* service 2 */}
          <div
            className="
    group
    relative
    overflow-hidden
    rounded-3xl
    bg-white/80
    backdrop-blur
    border
    border-purple-100
    p-6
    shadow-sm
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-purple-300
    hover:shadow-2xl
    hover:shadow-purple-100
  "
          >
            {/* icon */}
            <div
              className="
        w-12
        h-12
        rounded-2xl
        bg-purple-100
        flex
        items-center
        justify-center
        text-2xl
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:bg-purple-200
      "
            >
              💻
            </div>

            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Web Apps{" "}
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              Interactive web applications built with clarity and user
              engagement in mind.
            </p>
          </div>

          {/* service 3 */}
          <div
            className="
    group
    relative
    overflow-hidden
    rounded-3xl
    bg-white/80
    backdrop-blur
    border
    border-purple-100
    p-6
    shadow-sm
    transition-all
    duration-500
    hover:-translate-y-2
    hover:border-purple-300
    hover:shadow-2xl
    hover:shadow-purple-100
  "
          >
            {" "}
     {/* icon */}
              <div
                className="
        w-12
        h-12
        rounded-2xl
        bg-purple-100
        flex
        items-center
        justify-center
        text-2xl
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:bg-purple-200
      "
              >              
              💻
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">
              Landing Pages
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Clean and conversion-focused landing pages designed for products,
              startups, and growing brands.
            </p>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section
        id="projects"
        className="bg-white"
        containerClassName="max-w-6xl"
      >
        <div className="text-center max-w-3xl mx-auto">
          {/* <p className="text-sm uppercase tracking-widest font-semibold">
            Projects
          </p> */}

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-purple-700 ">
            Featured Projects
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            A selection of projects showcasing responsive frontend development,
            modern UI design, and user-focused digital experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-sm hover:shadow-lg transition"
            >
              {/* image placeholder */}
              <div className="h-56 bg-purple-100 flex items-center justify-center text-purple-700 font-semibold text-lg">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href={project.live}
                    className="text-purple-700 font-medium hover:text-purple-900 transition"
                    target="blank"
                    rel="noopener noreferer"
                  >
                    Live Demo
                  </a>

                  {/* <a
                    href={project.github}
                    className="text-slate-600 font-medium hover:text-slate-900 transition"
                    target="blank"
                  >
                    GitHub
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
     
      {/* CONTACT */}
      <Section
        id="contact"
        className="bg-slate-900 text-white"
        containerClassName="max-w-5xl"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Let’s Build Something Great
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            I’m open to frontend opportunities, freelance projects, and
            collaborations.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="mailto:maryuumabdulkarim@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
            >
              Send an Email
            </a>
          </div>

          {/* socials */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-slate-300">
            <a
              href="https://github.com/maryoomah"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/Maryam-Jenrola-Abdulkareem"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:maryuumabdulkarim@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>

            <a
              href="https://wa.me/2348148309053"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              WhatsApp
            </a>
          </div>

          {/* footer */}
          <div className="mt-16 border-t border-slate-800 pt-6">
            <p className="text-sm text-slate-400">
              © 2026 Maryam Abdulkareem. All rights reserved.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
