export default function AboutLoading() {
  return (
    <main className="min-h-screen bg-canvas px-6">
      <div className="max-w-2xl mx-auto py-32 animate-pulse">
        {/* H1 skeleton — two lines */}
        <div className="mb-10 space-y-3">
          <div className="h-10 w-3/4 rounded-xl bg-surface-2" />
          <div className="h-10 w-1/2 rounded-xl bg-surface-2" />
        </div>

        {/* Body paragraph skeletons */}
        <div className="space-y-8">
          {/* Para 1 — 3 lines */}
          <div className="space-y-2">
            <div className="h-4 w-full rounded-lg bg-surface-2" />
            <div className="h-4 w-full rounded-lg bg-surface-2" />
            <div className="h-4 w-4/5 rounded-lg bg-surface-2" />
          </div>
          {/* Para 2 — 2 lines */}
          <div className="space-y-2">
            <div className="h-4 w-full rounded-lg bg-surface-2" />
            <div className="h-4 w-3/4 rounded-lg bg-surface-2" />
          </div>
          {/* Para 3 — 4 lines */}
          <div className="space-y-2">
            <div className="h-4 w-full rounded-lg bg-surface-2" />
            <div className="h-4 w-full rounded-lg bg-surface-2" />
            <div className="h-4 w-full rounded-lg bg-surface-2" />
            <div className="h-4 w-2/3 rounded-lg bg-surface-2" />
          </div>
          {/* Para 4 — 2 lines */}
          <div className="space-y-2">
            <div className="h-4 w-full rounded-lg bg-surface-2" />
            <div className="h-4 w-3/5 rounded-lg bg-surface-2" />
          </div>
        </div>

        {/* Founder attribution */}
        <div className="mt-10 h-4 w-40 rounded-lg bg-gold/20" />
      </div>
    </main>
  );
}
