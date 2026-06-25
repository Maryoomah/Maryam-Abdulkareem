export default function ServiceCard({ icon, title, text }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur border border-purple-100 p-6 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-100">
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-purple-200/40 opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative">
        <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-200">
          {icon}
        </div>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-4 text-slate-600 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}