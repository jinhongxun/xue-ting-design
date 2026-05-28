export default function Footer() {
  return (
    <footer className="px-6 md:px-16 lg:px-24 py-10 md:py-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-stone">
      <span className="text-[11px] text-text-muted font-sans tracking-wide">
        &copy; 2026 Xue Ting Studio
      </span>
      <div className="flex gap-8 text-[11px] text-text-muted font-sans uppercase tracking-[0.12em]">
        <a href="#" className="hover:text-charcoal transition-colors duration-300">
          Instagram
        </a>
        <a href="#" className="hover:text-charcoal transition-colors duration-300">
          WeChat
        </a>
      </div>
    </footer>
  );
}
