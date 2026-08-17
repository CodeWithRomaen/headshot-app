/**
 * All marketing copy and imagery for the landing page, in one place.
 *
 * PLACEHOLDER CONTENT WARNING
 * The people, quotes, job titles, and social-proof numbers below are invented
 * for layout purposes, and the photos are stock portraits from Unsplash — not
 * output from this product. Every one of them must be replaced with real
 * customers, real quotes, and real generated results before this page is
 * published anywhere public.
 */

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const brand = {
  name: "Headshot Studio",
  tagline: "Professional headshots from a single selfie.",
}

export const nav = [
  { label: "Examples", href: "#examples" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
  { label: "Pricing", href: "#pricing" },
]

export const hero = {
  eyebrow: "One selfie. One minute.",
  // The reference design breaks the headline across two lines deliberately.
  headline: ["The photo that", "opens the door."],
  body: "People size you up long before they read a word you wrote. Give the first impression the same care you gave the résumé — without booking a studio or losing an afternoon.",
  cta: "Get my headshots",
  // TODO: replace with a real figure before launch.
  proof: "Trusted by 12,000+ professionals",
}

export type ShowcaseItem = {
  name: string
  role: string
  style: string
  before: string
  after: string
}

export const showcase: ShowcaseItem[] = [
  {
    name: "Ricardo M.",
    role: "Founder & Developer",
    style: "Executive Blazer",
    before: unsplash("photo-1500648767791-00dcc994a43e"),
    after: unsplash("photo-1507003211169-0a1dd7228f2d"),
  },
  {
    name: "Maria L.",
    role: "Marketing Director",
    style: "Natural Light",
    before: unsplash("photo-1494790108377-be9c29b29330"),
    after: unsplash("photo-1438761681033-6461ffad8d80"),
  },
  {
    name: "James K.",
    role: "Head of Sales",
    style: "Studio Mono",
    before: unsplash("photo-1472099645785-5658abf4ff4e"),
    after: unsplash("photo-1519085360753-af0119f7cbe7"),
  },
  {
    name: "Sofia R.",
    role: "Product Designer",
    style: "Creative Pro",
    before: unsplash("photo-1544005313-94ddf0286df2"),
    after: unsplash("photo-1573497019940-1c28c88b4f3e"),
  },
  {
    name: "David W.",
    role: "Account Executive",
    style: "Business Casual",
    before: unsplash("photo-1531427186611-ecfd6d936c79"),
    after: unsplash("photo-1492562080023-ab3db95bfbce"),
  },
  {
    name: "Ana P.",
    role: "Independent Consultant",
    style: "Warm Portrait",
    before: unsplash("photo-1580489944761-15a19d654956"),
    after: unsplash("photo-1560250097-0b93528c311a"),
  },
]

export const steps = [
  {
    number: "01",
    title: "Send one selfie",
    body: "Any recent photo where we can see your face. Phone camera is fine. Mirror shot is fine.",
  },
  {
    number: "02",
    title: "Choose the look",
    body: "Wardrobe, framing, expression, backdrop. Set the direction the way you would brief a photographer.",
  },
  {
    number: "03",
    title: "Keep four takes",
    body: "Four finished frames in under a minute, at full resolution, yours to download immediately.",
  },
]

export const wardrobe = ["Blazer", "Knit", "Oxford", "Turtleneck"]
export const framing = ["Classic", "Close", "Wide"]
export const mood = ["Warm", "Neutral", "Direct"]
export const backdrop = ["Paper", "Slate", "Amber"]

export const compare = {
  eyebrow: "Studio quality, minus the studio",
  headline: "The shoot costs more than the photograph.",
  body: "Same result on the page. A fraction of the time, money, and awkwardness getting there.",
  rows: [
    {
      label: "Turnaround",
      studio: "Two to three weeks",
      ours: "Under a minute",
    },
    { label: "What it costs", studio: "$350 and up", ours: "$10" },
    {
      label: "What it takes",
      studio: "Half a day off work",
      ours: "One photo from your couch",
    },
    {
      label: "The session",
      studio: "Posing for a stranger",
      ours: "Nobody watching",
    },
    {
      label: "Frames you keep",
      studio: "Two or three",
      ours: "Every variation",
    },
    {
      label: "Changed your mind",
      studio: "Rebook and pay again",
      ours: "Regenerate, no charge",
    },
  ],
}

export const verdict = {
  eyebrow: "The silent verdict",
  headline: "Two versions of you show up to every room.",
  body: "A first impression lands in about a tenth of a second. Your photo has already spoken by the time you do.",
  before: {
    label: "The one on your profile now",
    lines: ["Scrolled past.", "No reply.", "Fine enough to forget."],
  },
  after: {
    label: "The one sixty seconds away",
    lines: [
      "Profile saved.",
      "Let's find time to talk.",
      "The face they picture later.",
    ],
  },
  cta: "Get your headshot",
  footnote: "One selfie. Sixty seconds. Done.",
}

export type Testimonial = {
  quote: string
  name: string
  title: string
  initials: string
  before: string
  after: string
}

/** PLACEHOLDER — invented quotes. Replace with real, permissioned testimonials. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I had been sending the same cropped group photo from a wedding in 2019. Swapped it on a Sunday. Three recruiters reached out before Thursday, all roles I actually wanted.",
    name: "Daniel Kowalski",
    title: "Financial Analyst",
    initials: "DK",
    before: unsplash("photo-1521119989659-a83eee488004", 400),
    after: unsplash("photo-1487412720507-e7ab37603c6f", 400),
  },
  {
    quote:
      "Clients kept saying I looked different on video calls, which is a polite way of saying my photo was lying. Now the profile matches the person and my close rate moved with it.",
    name: "Alex Torres",
    title: "Real Estate Agent",
    initials: "AT",
    before: unsplash("photo-1568602471122-7832951cc4c5", 400),
    after: unsplash("photo-1557862921-37829c790f19", 400),
  },
  {
    quote:
      "I genuinely hate being photographed. Forced smile, someone adjusting a light, the whole thing. This took one upload and gave me something better than the $400 session I regretted.",
    name: "Nina Patel",
    title: "Marketing Director",
    initials: "NP",
    before: unsplash("photo-1534528741775-53994a69daeb", 400),
    after: unsplash("photo-1546525848-3ce03ca516f6", 400),
  },
  {
    quote:
      "A conference wanted a speaker photo by Friday and no photographer had a slot. I sent a mirror selfie, picked the turtleneck, and my speaker page finally looks like the talk I give.",
    name: "Emily Morrison",
    title: "Brand Strategist",
    initials: "EM",
    before: unsplash("photo-1554151228-14d9def656e4", 400),
    after: unsplash("photo-1508214751196-bcfd4ca60f91", 400),
  },
]

export const pricing = {
  eyebrow: "Simple pricing",
  headline: "Pay once. Keep everything.",
  body: "No subscription. Buy credits, spend them whenever you like, and they never expire.",
  tiers: [
    {
      name: "Starter",
      credits: "3 credits",
      price: "$10",
      unit: "$3.33 per headshot",
      features: [
        "Up to 12 headshots, four per run",
        "2048px downloads",
        "Every wardrobe, framing, and backdrop",
        "Credits never expire",
      ],
      featured: false,
    },
    {
      name: "Pro",
      credits: "10 credits",
      price: "$25",
      unit: "$2.50 per headshot",
      features: [
        "Up to 40 headshots, four per run",
        "2048px downloads",
        "Every wardrobe, framing, and backdrop",
        "Credits never expire",
        "Better rate per credit",
      ],
      featured: true,
    },
    {
      name: "Max",
      credits: "25 credits",
      price: "$50",
      unit: "$2.00 per headshot",
      features: [
        "Up to 100 headshots, four per run",
        "2048px downloads",
        "Every wardrobe, framing, and backdrop",
        "Credits never expire",
        "Best rate per credit",
        "Sized for a whole team refresh",
      ],
      featured: false,
    },
  ],
  footnote: "A photographer charges $200–$400 for one session.",
}

export const finalCta = {
  headline: "Your best photograph is one upload away.",
  body: "The people who get hired, promoted, and believed look the part. Finding out costs you a minute.",
  cta: "Create my headshot",
  footnote:
    "No subscription. Keep every frame. Refunded if you don't love them.",
}

export const footerColumns = [
  {
    heading: "Product",
    links: ["How it works", "Examples", "Pricing", "Compare"],
  },
  { heading: "Company", links: ["About", "Contact", "Blog"] },
  { heading: "Legal", links: ["Terms of Service", "Privacy Policy"] },
]
