export default function ContactLoading() {
  return (
    <main className="min-h-screen bg-canvas pt-16">
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 animate-pulse">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
            {/* Left column skeleton */}
            <div className="space-y-5">
              <div className="h-6 w-44 rounded-full bg-surface-2" />
              <div className="h-9 w-full rounded-xl bg-surface-2" />
              <div className="h-9 w-4/5 rounded-xl bg-surface-2" />
              <div className="h-5 w-full rounded-lg bg-surface-2" />
              <div className="h-5 w-full rounded-lg bg-surface-2" />
              <div className="space-y-3 pt-2">
                <div className="h-12 rounded-2xl bg-surface-2" />
                <div className="h-12 rounded-2xl bg-surface-2" />
                <div className="h-12 rounded-2xl bg-surface-2" />
              </div>
            </div>
            {/* Form skeleton */}
            <div className="h-[480px] rounded-3xl bg-surface-2" />
          </div>
        </div>
      </section>
    </main>
  );
}
