/* ────────────────────────────────────────────────────────────────
   CONTENT LAYER — all copy lives here (from Northline/Agency)
   ──────────────────────────────────────────────────────────────── */

export const SITE = {
  name: "Northline Studio",
  shortName: "Northline",
  email: "hello@northline.studio",
  phone: "+254 700 000 000",
  founderName: "Kangethe Ian",
  founderFirst: "Kangethe",
  location: "Nairobi, Kenya — working with businesses everywhere",
  availability: "Taking on new projects this quarter",
};

export type BusinessType = {
  id: string; label: string; emoji: string;
  before: string; after: string;
  metrics: { label: string; before: string; after: string; good: string }[];
};

export const TRANSFORMATIONS: BusinessType[] = [
  {
    id: "restaurant", label: "Restaurant", emoji: "🍽️",
    before: "Phone rings during dinner rush. Bookings live in a notebook. Menu PDF nobody can read on a phone.",
    after: "Guests book online in 20 seconds. The kitchen sees tonight's covers at a glance. The menu updates itself.",
    metrics: [
      { label: "Online bookings", before: "0 / week", after: "60+ / week", good: "No more missed calls" },
      { label: "No-shows", before: "1 in 5", after: "1 in 20", good: "Automatic reminders" },
      { label: "Time on the phone", before: "2 hrs / day", after: "20 min / day", good: "Staff back on the floor" },
    ],
  },
  {
    id: "clinic", label: "Clinic", emoji: "🩺",
    before: "Appointments in a paper diary. Patients forget. Reception spends mornings untangling double-bookings.",
    after: "One calendar everyone trusts. Patients get a friendly text the day before. Reports appear monthly, on their own.",
    metrics: [
      { label: "Missed appointments", before: "30%", after: "17%", good: "Reminder texts that work" },
      { label: "Admin time", before: "Half the day", after: "Under an hour", good: "Reception does reception" },
      { label: "Booking mix-ups", before: "Weekly", after: "Almost never", good: "One source of truth" },
    ],
  },
  {
    id: "shop", label: "Retail shop", emoji: "🛍️",
    before: "Instagram DMs as a sales channel. Stock counted by memory. 'Do you deliver?' asked forty times a day.",
    after: "A proper online store, synced stock, and answers customers find themselves — while you sleep.",
    metrics: [
      { label: "Orders after hours", before: "0", after: "40% of sales", good: "The shop never closes" },
      { label: "DM back-and-forth", before: "All day", after: "Rarely", good: "FAQs answer themselves" },
      { label: "Oversold items", before: "Every month", after: "None", good: "Stock that counts itself" },
    ],
  },
  {
    id: "services", label: "Services firm", emoji: "💼",
    before: "Quotes built in Word. Invoices chased by memory. Projects tracked across three spreadsheets and a prayer.",
    after: "Quotes in minutes, invoices that chase themselves, and one dashboard that tells you how the month is going.",
    metrics: [
      { label: "Quote turnaround", before: "3 days", after: "Same day", good: "Win work while it's warm" },
      { label: "Late payments", before: "Most of them", after: "A handful", good: "Polite automatic nudges" },
      { label: "Where's the project?", before: "Ask around", after: "One glance", good: "Everyone sees the same board" },
    ],
  },
];

export type ProjectStory = {
  id: string; name: string; kind: string; live: boolean;
  problem: string; solution: string; outcome: string; highlights: string[];
};

export const PROJECTS: ProjectStory[] = [
  {
    id: "clinicflow", name: "ClinicFlow",
    kind: "Booking & patient system for a 3-clinic group", live: true,
    problem: "Three busy clinics ran everything from a paper diary. Double-bookings were weekly, a third of patients didn't show up, and managers had no idea which clinic was actually busy.",
    solution: "We built one simple system: a shared calendar, patient records with the right access for the right people, and friendly SMS reminders that respect quiet hours. Then we trained all 27 staff in person.",
    outcome: "No-shows nearly halved. Reception got two and a half hours of their day back. It's run quietly for 18 months — and when launch night had a hiccup at 2am, we picked up the phone.",
    highlights: ["No-shows down 44%", "2.5 hrs/day saved", "Running 18 months"],
  },
  {
    id: "directory", name: "Pan-African Brand Directory",
    kind: "Public website for a trade organisation", live: true,
    problem: "An NGO wanted to showcase hundreds of African brands, but their old site was slow, hard to search, and impossible for their own team to update.",
    solution: "A fast, friendly directory with search that actually finds things — and an editing experience so simple their non-technical team runs it without us.",
    outcome: "300+ brands across 54 countries, organic traffic up 212% in six months, and a year of updates without a single support call.",
    highlights: ["300+ brands listed", "Traffic +212% in 6 months", "Self-managed for a year"],
  },
  {
    id: "ledgerline", name: "Ledgerline",
    kind: "Invoicing tool — fully designed concept", live: false,
    problem: "Small service businesses leak money quietly: invoices go out late, reminders feel awkward to send, and nobody knows what's actually owed.",
    solution: "We've designed and prototyped a gentle invoicing tool: it sends the awkward reminders for you, keeps a tidy record of everything, and shows your cash picture on one screen.",
    outcome: "The blueprint is complete and tested with real business owners. We're open about this being a concept — we'd love to build it with its first real customer.",
    highlights: ["Complete clickable prototype", "Tested with real owners", "Seeking first customer"],
  },
];

export type BuildType = {
  id: string; label: string; headline: string; forYou: string;
  features: string[]; mock: "site" | "booking" | "dashboard" | "store" | "app";
};

export const BUILDS: BuildType[] = [
  { id: "website", label: "Websites", headline: "A website that looks the part — and brings in work", forYou: "For restaurants, firms, and anyone whose customers Google them first.", features: ["Looks beautiful on phones", "Loads before they lose patience", "You can edit it yourself", "Found on Google"], mock: "site" },
  { id: "booking", label: "Booking systems", headline: "Let customers book while you're busy working", forYou: "For salons, clinics, restaurants, studios — anywhere with a calendar.", features: ["Booking in under a minute", "Automatic friendly reminders", "Your day at a glance", "Fewer no-shows"], mock: "booking" },
  { id: "store", label: "Online stores", headline: "Sell around the clock, without the DM chaos", forYou: "For shops and makers who've outgrown Instagram orders.", features: ["Simple checkout people trust", "Stock that counts itself", "Delivery options built in", "Sales while you sleep"], mock: "store" },
  { id: "dashboard", label: "Business dashboards", headline: "One screen that tells you how things are going", forYou: "For owners tired of asking three people for one number.", features: ["Today's numbers, live", "Spot problems early", "Reports write themselves", "Works on your phone"], mock: "dashboard" },
  { id: "custom", label: "Custom tools", headline: "That thing you do in spreadsheets? We can build it properly", forYou: "For teams with a process that's outgrown Excel.", features: ["Built around how you work", "Everyone sees the same thing", "Mistakes get harder to make", "Grows with the team"], mock: "app" },
];

export type JourneyStep = { title: string; friendly: string; desc: string; youGet: string; };

export const JOURNEY: JourneyStep[] = [
  { title: "We listen", friendly: "A relaxed conversation, not a sales pitch", desc: "Tell us how your business works and where the friction is. No jargon, no pressure — if we're not the right fit, we'll say so and point you somewhere good.", youGet: "A plain-English summary of what we'd build and roughly what it costs" },
  { title: "We plan", friendly: "You see it before we build it", desc: "We sketch the whole thing — pages, screens, how it flows — and walk you through it. Change anything. This is the cheap moment to change your mind.", youGet: "A visual plan you've approved, plus a fixed timeline" },
  { title: "We build", friendly: "You watch it come alive, week by week", desc: "Every Friday you get a link to the real thing taking shape — not a status report, the actual work. Questions answered same day, in plain English.", youGet: "A working preview every single week" },
  { title: "We launch", friendly: "Calm, planned, and we stay close", desc: "We handle the technical moving parts, train your team in person or on video, and stay on standby through launch week. Yes, we've answered the 2am call.", youGet: "A live system and a team that knows how to use it" },
  { title: "We stick around", friendly: "Help when you want it, freedom when you don't", desc: "Everything is documented and yours — accounts, passwords, the lot. Keep us for improvements or walk away anytime with everything in hand. Most people stay.", youGet: "Full ownership, with support a message away" },
];

export type Promise_ = { title: string; desc: string; emoji: string; };

export const PROMISES: Promise_[] = [
  { emoji: "💬", title: "Plain English, always", desc: "If you ever hear a word you don't understand, that's our mistake, not yours. We translate tech into business, full stop." },
  { emoji: "📅", title: "You see progress every Friday", desc: "A real, clickable preview every week. If something's off track, you'll know in days — never at the deadline." },
  { emoji: "🔑", title: "Everything belongs to you", desc: "Your website, your accounts, your passwords, your data. Documented and handed over. You're never locked in to us." },
  { emoji: "🎯", title: "Honest about what you need", desc: "We've talked clients out of expensive things they didn't need. The right solution is sometimes the smaller one." },
  { emoji: "🧾", title: "No surprise invoices", desc: "Prices agreed up front, risks flagged early, and our mistakes fixed on our time — not billed to yours." },
  { emoji: "📈", title: "Built for year five", desc: "We build things that still work when your team has tripled — and we design them so any good developer could take over." },
];

export const COMMS_WEEK = [
  { day: "Mon", what: "We plan the week and share what's coming" },
  { day: "Tue–Thu", what: "Heads-down building — questions answered same day" },
  { day: "Fri", what: "Your weekly preview link + a 2-line summary" },
  { day: "Anytime", what: "One WhatsApp/email thread, straight to a human" },
];
