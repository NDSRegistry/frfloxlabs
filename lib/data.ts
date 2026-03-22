// ═══════════════════════════════════════════════════
// FLOX LABS — Static Mock Data
// No database. No API. Just clean typed arrays.
// ═══════════════════════════════════════════════════

export interface SDG {
  id: number
  name: string
  color: string
}

export interface Member {
  id: string
  name: string
  role: "Genius" | "Lab Staff" | "Lab Manager" | "Lab Director"
  bio: string
  initials: string
  projectCount: number
}

export interface Project {
  id: string
  title: string
  description: string
  status: "Active" | "In Development" | "Archived"
  creatorId: string
  creatorName: string
  sdgIds: number[]
  createdAt: string
}

export interface Post {
  id: string
  title: string
  excerpt: string
  content: string
  tag: "Announcement" | "Project Spotlight" | "Events" | "Research"
  authorName: string
  date: string
}

export interface Camp {
  id: string
  title: string
  description: string
  dateRange: string
  location: string
  totalSpots: number
  registered: number
  sdgIds: number[]
}

// ── SDGs ──

export const sdgs: SDG[] = [
  { id: 1, name: "No Poverty", color: "#E5243B" },
  { id: 2, name: "Zero Hunger", color: "#DDA63A" },
  { id: 3, name: "Good Health", color: "#4C9F38" },
  { id: 4, name: "Quality Education", color: "#C5192D" },
  { id: 5, name: "Gender Equality", color: "#FF3A21" },
  { id: 6, name: "Clean Water", color: "#26BDE2" },
  { id: 7, name: "Clean Energy", color: "#FCC30B" },
  { id: 8, name: "Decent Work", color: "#A21942" },
  { id: 9, name: "Industry & Innovation", color: "#FD6925" },
  { id: 10, name: "Reduced Inequalities", color: "#DD1367" },
  { id: 11, name: "Sustainable Cities", color: "#FD9D24" },
  { id: 12, name: "Responsible Consumption", color: "#BF8B2E" },
  { id: 13, name: "Climate Action", color: "#3F7E44" },
  { id: 14, name: "Life Below Water", color: "#0A97D9" },
  { id: 15, name: "Life on Land", color: "#56C02B" },
  { id: 16, name: "Peace & Justice", color: "#00689D" },
  { id: 17, name: "Partnerships", color: "#19486A" },
]

export function getSdg(id: number): SDG | undefined {
  return sdgs.find((s) => s.id === id)
}

// ── Members ──

export const members: Member[] = [
  {
    id: "m1",
    name: "Yassin Mansour",
    role: "Lab Director",
    bio: "Founder of Flox Labs. Building systems that bridge technology and sustainability.",
    initials: "YM",
    projectCount: 3,
  },
  {
    id: "m2",
    name: "Sara Khalil",
    role: "Lab Manager",
    bio: "Environmental engineer passionate about clean water access and community resilience.",
    initials: "SK",
    projectCount: 2,
  },
  {
    id: "m3",
    name: "Omar Farid",
    role: "Lab Staff",
    bio: "Data scientist working on climate prediction models and environmental monitoring.",
    initials: "OF",
    projectCount: 1,
  },
  {
    id: "m4",
    name: "Nour Amer",
    role: "Genius",
    bio: "Student researcher exploring sustainable agriculture solutions for North Africa.",
    initials: "NA",
    projectCount: 1,
  },
  {
    id: "m5",
    name: "Karim Hassan",
    role: "Genius",
    bio: "Mechanical engineering student building low-cost water filters for rural communities.",
    initials: "KH",
    projectCount: 0,
  },
  {
    id: "m6",
    name: "Layla Mostafa",
    role: "Lab Staff",
    bio: "Urban planner focused on sustainable city design and smart infrastructure systems.",
    initials: "LM",
    projectCount: 1,
  },
  {
    id: "m7",
    name: "Ahmed Soliman",
    role: "Genius",
    bio: "Computer science student interested in AI for environmental impact assessment.",
    initials: "AS",
    projectCount: 1,
  },
  {
    id: "m8",
    name: "Dina Ragheb",
    role: "Lab Manager",
    bio: "Biochemist developing biodegradable packaging alternatives from agricultural waste.",
    initials: "DR",
    projectCount: 2,
  },
]

// ── Projects ──

export const projects: Project[] = [
  {
    id: "p1",
    title: "AquaPure",
    description:
      "Low-cost water purification system using solar-powered filtration, designed for rural communities without access to clean drinking water. The system uses locally available materials, keeping costs under $50 per unit.",
    status: "Active",
    creatorId: "m1",
    creatorName: "Yassin Mansour",
    sdgIds: [6, 3],
    createdAt: "2026-01-15",
  },
  {
    id: "p2",
    title: "EcoTrack",
    description:
      "An IoT-based environmental monitoring platform that tracks air quality, water purity, and soil health in real-time across urban neighborhoods. Provides open data dashboards for community use.",
    status: "Active",
    creatorId: "m2",
    creatorName: "Sara Khalil",
    sdgIds: [11, 13, 9],
    createdAt: "2026-02-01",
  },
  {
    id: "p3",
    title: "GreenGrid",
    description:
      "A community solar energy sharing network that allows neighborhoods to distribute excess renewable energy peer-to-peer through a simple mobile application and smart metering.",
    status: "Active",
    creatorId: "m1",
    creatorName: "Yassin Mansour",
    sdgIds: [7, 11, 17],
    createdAt: "2026-02-10",
  },
  {
    id: "p4",
    title: "ClimaCast",
    description:
      "Machine learning model that predicts local climate patterns to help farmers optimize crop cycles, reduce waste, and adapt to changing weather patterns in the MENA region.",
    status: "In Development",
    creatorId: "m3",
    creatorName: "Omar Farid",
    sdgIds: [13, 2, 15],
    createdAt: "2026-02-20",
  },
  {
    id: "p5",
    title: "SeedBank",
    description:
      "Digital platform connecting small-scale farmers with heritage seed suppliers to preserve biodiversity and promote sustainable agriculture across North Africa and the Middle East.",
    status: "In Development",
    creatorId: "m4",
    creatorName: "Nour Amer",
    sdgIds: [2, 15, 12],
    createdAt: "2026-03-01",
  },
  {
    id: "p6",
    title: "UrbanFlow",
    description:
      "Smart traffic management system that reduces emissions by optimizing traffic light patterns using real-time vehicle density data from low-cost camera sensors.",
    status: "Active",
    creatorId: "m6",
    creatorName: "Layla Mostafa",
    sdgIds: [11, 13, 9],
    createdAt: "2026-03-10",
  },
  {
    id: "p7",
    title: "WasteWise",
    description:
      "AI-powered waste sorting assistant that uses computer vision to help households and businesses properly categorize recyclable materials, reducing landfill contamination.",
    status: "In Development",
    creatorId: "m7",
    creatorName: "Ahmed Soliman",
    sdgIds: [12, 11],
    createdAt: "2026-03-12",
  },
  {
    id: "p8",
    title: "BioWrap",
    description:
      "Biodegradable packaging material developed from agricultural waste products. Currently in lab testing phase with promising results for replacing single-use plastic packaging.",
    status: "In Development",
    creatorId: "m8",
    creatorName: "Dina Ragheb",
    sdgIds: [12, 9, 15],
    createdAt: "2026-03-15",
  },
  {
    id: "p9",
    title: "EduBridge",
    description:
      "Offline-first educational platform that delivers quality learning content to underserved communities with limited internet access, using progressive web app technology and mesh networking.",
    status: "Active",
    creatorId: "m8",
    creatorName: "Dina Ragheb",
    sdgIds: [4, 10, 17],
    createdAt: "2026-03-18",
  },
]

// ── Posts ──

export const posts: Post[] = [
  {
    id: "post1",
    title: "Flox Labs Launches: A New Chapter in Student-Led Innovation",
    excerpt:
      "Today marks the official launch of Flox Labs — an innovation platform built by students, for the world.",
    content:
      "Today marks the official launch of Flox Labs — an innovation platform built by students, for the world. Our mission is simple: connect technology with the UN Sustainable Development Goals to create projects that actually matter.\n\nWe're not building for grades. We're building for impact.\n\nEvery project on Flox Labs is tied to at least one SDG, ensuring that the work we do has a clear connection to real-world challenges. From water purification to climate prediction models, our community of Geniuses, Staff, Managers, and Directors are working on problems that define our generation.\n\nThis is just the beginning.",
    tag: "Announcement",
    authorName: "Yassin Mansour",
    date: "2026-03-15",
  },
  {
    id: "post2",
    title: "How AquaPure is Changing Clean Water Access",
    excerpt:
      "The AquaPure project has reached a significant milestone with its solar-powered filtration system completing field testing.",
    content:
      "The AquaPure project, led by Flox Labs Director Yassin Mansour, has reached a significant milestone. The solar-powered filtration system has completed its first round of field testing, showing a 94% reduction in waterborne contaminants.\n\nThe system is designed to be assembled with locally available materials, keeping costs under $50 per unit. This makes it viable for deployment in rural communities across North Africa and the Middle East.\n\nNext steps include partnering with local NGOs for distribution and scaling production.",
    tag: "Project Spotlight",
    authorName: "Yassin Mansour",
    date: "2026-03-18",
  },
  {
    id: "post3",
    title: "Upcoming: Sustainability Innovation Camp 2026",
    excerpt:
      "Our first-ever Sustainability Innovation Camp is happening this April with three days of workshops, prototyping, and mentorship.",
    content:
      "We're excited to announce our first-ever Sustainability Innovation Camp, happening this April. Over three days, participants will form teams, ideate solutions to environmental challenges, and present to a panel of industry mentors.\n\nThe camp is open to all Flox Labs members and will feature workshops on systems thinking, rapid prototyping, and impact measurement. Stay tuned for registration details.",
    tag: "Events",
    authorName: "Sara Khalil",
    date: "2026-03-20",
  },
  {
    id: "post4",
    title: "The Role of AI in Climate Adaptation for MENA",
    excerpt:
      "How machine learning models are being used to predict and adapt to climate shifts across North Africa and the Middle East.",
    content:
      "Climate change poses unique challenges to the MENA region — rising temperatures, water scarcity, and shifting agricultural patterns. At Flox Labs, several projects are leveraging artificial intelligence to address these challenges head-on.\n\nClimaCast, led by Omar Farid, uses machine learning to predict local weather patterns weeks in advance, giving farmers critical lead time to adjust planting schedules. Meanwhile, EcoTrack provides real-time environmental monitoring data that helps city planners make evidence-based decisions.\n\nThe intersection of AI and sustainability isn't just theoretical — it's happening right here in our lab.",
    tag: "Research",
    authorName: "Omar Farid",
    date: "2026-03-22",
  },
]

// ── Camps ──

export const camps: Camp[] = [
  {
    id: "c1",
    title: "Sustainability Innovation Camp",
    description:
      "Three-day intensive camp where teams ideate, prototype, and pitch solutions to environmental challenges. Mentored by industry professionals and Flox Labs directors.",
    dateRange: "April 12–14, 2026",
    location: "Cairo Innovation Hub",
    totalSpots: 40,
    registered: 28,
    sdgIds: [13, 9, 17],
  },
  {
    id: "c2",
    title: "Clean Water Hackathon",
    description:
      "48-hour hackathon focused on developing affordable water purification and distribution solutions for underserved communities in the MENA region.",
    dateRange: "May 3–4, 2026",
    location: "Virtual + Alexandria Campus",
    totalSpots: 60,
    registered: 12,
    sdgIds: [6, 3],
  },
  {
    id: "c3",
    title: "Green Energy Workshop Series",
    description:
      "Hands-on workshop series covering solar panel assembly, energy storage systems, and community grid design. Includes take-home kit for participants.",
    dateRange: "May 18–20, 2026",
    location: "Smart Village, 6th of October",
    totalSpots: 30,
    registered: 30,
    sdgIds: [7, 11],
  },
  {
    id: "c4",
    title: "AI for Impact Bootcamp",
    description:
      "Intensive bootcamp teaching participants how to apply machine learning techniques to sustainability challenges. No prior ML experience required.",
    dateRange: "June 7–9, 2026",
    location: "GrEEK Campus, Cairo",
    totalSpots: 50,
    registered: 8,
    sdgIds: [9, 4, 13],
  },
]

// ── Helpers ──

export const ROLE_ORDER: Member["role"][] = [
  "Lab Director",
  "Lab Manager",
  "Lab Staff",
  "Genius",
]

export const ROLE_COLORS: Record<string, string> = {
  "Lab Director": "#1a2332",
  "Lab Manager": "#2563eb",
  "Lab Staff": "#16a34a",
  Genius: "#7c3aed",
}

export function getMembersByRole(): { role: Member["role"]; members: Member[] }[] {
  return ROLE_ORDER.map((role) => ({
    role,
    members: members.filter((m) => m.role === role),
  })).filter((g) => g.members.length > 0)
}

export function getProjectSdgs(project: Project): SDG[] {
  return project.sdgIds.map((id) => getSdg(id)).filter(Boolean) as SDG[]
}
