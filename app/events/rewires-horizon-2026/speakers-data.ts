export interface HorizonSpeaker {
  slug: string
  name: string
  title: string
  session: string
  photo: string
  bio: string
}

export const horizonSpeakers: HorizonSpeaker[] = [
  {
    slug: "jill-tang",
    name: "Jill Tang",
    title: "Founder, She Rewires",
    session: "Opening Keynote",
    photo: "/placeholder.svg",
    bio: "Bio coming soon. We are collecting finalized speaker information.",
  },
  {
    slug: "guest-innovator-1",
    name: "Guest Innovator",
    title: "To be announced",
    session: "Future of Inclusive AI",
    photo: "/placeholder.svg",
    bio: "Bio coming soon. We are collecting finalized speaker information.",
  },
  {
    slug: "guest-investor-1",
    name: "Guest Investor",
    title: "To be announced",
    session: "Capital & Community",
    photo: "/placeholder.svg",
    bio: "Bio coming soon. We are collecting finalized speaker information.",
  },
]
