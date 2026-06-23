export default function ProcessLoading() {
  return (
    <main className="min-h-screen bg-canvas pt-16">
      {/* Journey section skeleton */}
      <section className="py-24 lg:py-32 bg-surface-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 animate-pulse">
          <div className="text-center mb-16 space-y-4">
            <div className="mx-auto h-6 w-36 rounded-full bg-surface" />
            <div className="mx-auto h-10 w-3/4 rounded-xl bg-surface" />
            <div className="mx-auto h-10 w-1/2 rounded-xl bg-surface" />
            <div className="mx-auto h-5 w-96 rounded-lg bg-surface" />
          </div>
          <div className="mx-auto max-w-3xl mb-10 h-36 rounded-2xl bg-surface" />
          <div className="mx-auto max-w-2xl mt-20 h-72 rounded-3xl bg-surface" />
        </div>
      </section>

      {/* Process closing section skeleton */}
      <section className="py-24 lg:py-32 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 animate-pulse">
          {/* Promises grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-28 rounded-2xl bg-surface-2" />
            ))}
            <div className="h-28 rounded-2xl bg-surface-2 col-span-2 lg:col-span-1" />
          </div>
          {/* Typical week card */}
          <div className="h-64 rounded-3xl bg-surface-2" />
        </div>
      </section>
    </main>
  );
}
