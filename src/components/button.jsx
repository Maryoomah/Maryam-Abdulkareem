
export default function Button({ href, children, variant = "primary" }) {
  const baseClasses =
    "w-full sm:w-auto px-6 py-3 rounded-xl font-medium transition text-center";

  const variants = {
    primary:
      "bg-purple-700 text-white hover:bg-purple-800 shadow-lg shadow-purple-700/20",
    secondary:
      "border border-purple-700 text-purple-700 hover:bg-purple-50",
    outline:
      "border border-slate-300 text-slate-700 hover:bg-slate-100",
  };

  return (
    <a href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </a>
  );
}

