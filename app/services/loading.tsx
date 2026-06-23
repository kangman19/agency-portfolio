export default function ServicesLoading() {
  return (
    <main className="min-h-screen bg-canvas pt-16">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 animate-pulse">
          {/* Section header */}
          <div className="max-w-2xl mb-16 space-y-4">
            <div className="h-6 w-52 rounded-full bg-surface-2" />
            <div className="h-10 w-3/4 rounded-xl bg-surface-2" />
            <div className="h-10 w-1/2 rounded-xl bg-surface-2" />
            <div className="h-5 w-full rounded-lg bg-surface-2" />
          </div>
          {/* Bento card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 h-52 rounded-3xl bg-surface-2" />
            <div className="h-52 rounded-3xl bg-surface-2" />
            <div className="h-52 rounded-3xl bg-surface-2" />
            <div className="lg:col-span-2 h-52 rounded-3xl bg-surface-2" />
            <div className="h-48 rounded-3xl bg-surface-2" />
            <div className="h-48 rounded-3xl bg-surface-2" />
            <div className="lg:col-span-3 h-28 rounded-3xl bg-surface-2" />
          </div>
        </div>
      </section>
    </main>
  );
}
