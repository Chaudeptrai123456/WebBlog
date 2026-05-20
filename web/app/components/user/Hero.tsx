export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img src="/hero.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 text-white px-10 max-w-2xl">
        <h1 className="text-5xl font-light leading-tight">
          Designed to Move With You
        </h1>
        <p className="mt-4 text-sm opacity-80">
          Modern apparel built for everyday rhythm
        </p>

        <button className="mt-6 border-b border-white">Explore Pieces →</button>
      </div>
    </section>
  );
}
