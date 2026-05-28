export function IdentityStrip() {
  const items = ["AI", "Technology", "Business", "Digital Systems"];
  return (
    <section className="mt-10">
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-[#555]"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
