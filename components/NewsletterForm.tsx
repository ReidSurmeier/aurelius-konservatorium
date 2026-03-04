"use client";

export default function NewsletterForm() {
  return (
    <form className="flex gap-0 w-full max-w-md flex-shrink-0" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your email"
        className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/60"
      />
      <button
        type="submit"
        className="bg-[#c5a028] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#0a0a0a] transition-colors flex-shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
