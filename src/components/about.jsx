import Section from "./Section";

export default function About() {
  const skills = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "Accessibility",
    "Git",
    "GitHub",
    "Vite",
    "VS Code",
    "UI Development",
  ];

  return (
    <Section id="about" className="bg-slate-50" containerClassName="max-w-7xl">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* LEFT COLUMN */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 backdrop-blur-xl p-8 md:p-10 shadow-xl shadow-purple-100/50">
          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />
          <div className="relative">
            <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-sm font-medium text-purple-700">
              About Me
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Building{" "}
              <span className="block text-purple-600 mt-2">Modern Experiences</span>
            </h2>

            {/* About Cards */}
            <div className="grid gap-6 mt-10">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wider text-purple-600">
                  My Approach
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                  Thoughtful design, practical solutions.
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  Every project begins with understanding the people who will
                  use it. I focus on creating interfaces that feel intuitive,
                  communicate clearly, and provide a seamless experience from
                  the first interaction to the last. 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 backdrop-blur-xl p-8 md:p-10 shadow-xl shadow-purple-100/50">
          {/* Background Glow */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />

          <div className="relative">
            <span className="inline-flex rounded-full border border-purple-200 bg-purple-50 px-4 py-1 text-sm font-medium text-purple-700">
              Skills{" "}
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Using{" "}
              <span className="block text-purple-600 mt-2">
                Modern Technologies{" "}
              </span>
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border
                    border-purple-100
                    bg-purple-50
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-purple-700
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-purple-100
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
