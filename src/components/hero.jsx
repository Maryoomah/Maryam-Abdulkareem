import Section from "./section";
import Button from "./button";
export default function Hero() { 
    return (
    <Section id="hero"
  className="relative overflow-hidden min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50 py-6"
  containerClassName="max-w-5xl"
>
  <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
  <div className="absolute bottom-10 -left-24 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" />

  <div className="relative flex items-center min-h-[calc(100vh-96px)]">
    <div data-aos="fade-up" className="max-w-3xl text-center mx-auto">
      <h2 className="text-purple-700 font-semibold tracking-wide uppercase text-base sm:text-lg">
        Maryam Abdulkareem
      </h2>

      <h1 className="mt-4 text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-slate-900">
        Frontend Developer
        <span className="block text-purple-700">
          crafting responsive, user‑focused websites.
        </span>
      </h1>

      <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl mx-auto md:mx-0">
        I help businesses and edtech brands connect with users through clean,
        modern design — building responsive websites and web applications with
        React and Tailwind CSS.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Button href="#projects" variant="primary">View Projects</Button>
        <Button href="#contact" variant="secondary">Contact Me</Button>
        <Button href="/resume.pdf" variant="outline">Download Resume</Button>
      </div>
    </div>
  </div>
</Section>


    )
    
}