export type SideQuestPhoto = {
  caption: string;
  src?: string;
  alt?: string;
  href?: string;
  layout?: "video" | "collage" | "article" | "photo" | "square";
  fit?: "cover" | "contain";
  images?: { src: string; alt: string }[];
};

export type SideQuest = {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  href?: string;
  icon: "youtube" | "running" | "camera" | "code";
  socialLinks?: { label: string; href: string; icon: "linkedin" | "instagram" }[];
  description: string;
  milestones?: { value: string; label: string }[];
  photos: SideQuestPhoto[];
};

// Public profile details checked on October 12, 2026.
// YouTube: https://www.youtube.com/@tomaseuu (Home and Popular videos)
// Oldest public upload: https://www.youtube.com/watch?v=d5PhXbcsfVs (July 4, 2021).
// Running and TVSA: https://www.linkedin.com/in/thomasle998/
// AI camp: https://ucm.calpoly.edu/news/cal-polys-digital-transformation-hub-host-two-ai-summer-camps-csu-and-ccc-students
// UR-Future Track: publicly indexed Cal Poly DxHub team page and Thomas' LinkedIn post.
// New York Times appearance and article photo link supplied by Thomas.
export const SIDE_QUESTS: SideQuest[] = [
  {
    id: "youtuber",
    title: "YouTuber",
    subtitle: "@tomaseuu",
    period: "2021–Present",
    href: "https://www.youtube.com/@tomaseuu",
    icon: "youtube",
    description:
      "Sharing a little of my life through Cal Poly vlogs, spontaneous adventures, and time with friends. I want my videos to help people picture their own college experience and remind them to make time for the fun stuff too.",
    milestones: [
      { value: "400+", label: "subscribers" },
      { value: "36", label: "videos shared" },
      { value: "63,234", label: "total views" },
    ],
    photos: [
      {
        caption: "Most viewed YouTube video!",
        src: "/youtube/most-viewed.jpg",
        alt: "Thumbnail for my Jisoo solo reaction video",
        href: "https://www.youtube.com/watch?v=Jawszsk-uM8",
        layout: "video",
      },
      {
        caption: "Most viewed Cal Poly San Luis Obispo tour video!",
        src: "/youtube/cal-poly-tour.jpg",
        alt: "Thumbnail for my Cal Poly day in the life video",
        href: "https://www.youtube.com/watch?v=CcYRiYAsLyw&t=27s",
        layout: "video",
      },
      {
        caption: "Spontaneous adventure series",
        src: "/youtube/spontaneous-adventure.jpg",
        alt: "Thumbnail showing friends on a spontaneous outdoor adventure",
        href: "https://www.youtube.com/watch?v=grxsLL5vO_A&t=246s",
        layout: "video",
      },
      {
        caption: "Moments with my idols: @kellywakasa, @elliotchoy & @wongfupro",
        layout: "collage",
        images: [
          { src: "/youtube/kellywakasa.jpg", alt: "Meeting Kelly Wakasa" },
          { src: "/youtube/elliotchoy_2.jpg", alt: "Elliot Choy sharing my yearbook quote on his story" },
          { src: "/youtube/wongfu.jpg", alt: "Meeting Phil from Wong Fu" },
        ],
      },
    ],
  },
  {
    id: "new-york-times",
    title: "New York Times",
    subtitle: "A pretty surreal moment",
    period: "2025",
    href: "https://www.nytimes.com/2025/10/26/technology/cal-state-ai-amazon-openai.html",
    icon: "code",
    description:
      "I attended the first CSU AI Summer Camp at Cal Poly SLO and worked with my team on UR-Future Track, a project to make transferring from community college easier. Met some amazing people, learned a TON, and somehow ended up in the cover photo of The New York Times! Pretty surreal to be part of a story about AI education at Cal State alongside the people I got to learn and build with. Still kinda wild lol.",
    photos: [
      {
        caption: "My AI Summer Camp team",
        src: "/side-quests/ai_summer_camp_1.jpg",
        alt: "Six AI Summer Camp teammates standing together in a classroom",
        layout: "photo",
      },
      {
        caption: "Thomas and friends :)",
        src: "/side-quests/ai_summer_camp_2.jpg",
        alt: "Signed instant photo of friends at AI Summer Camp",
        layout: "photo",
      },
      {
        caption: "Achievement unlocked · AI Summer Camp",
        src: "/side-quests/ai_summer_camp_3.jpg",
        alt: "Thomas Le AI Mastery Certificate from DxHub AI Summer Camp 2025, presented by AWS and Cal Poly",
        layout: "photo",
      },
      {
        caption: "Big Tech Makes Cal State Its A.I. Training Ground.",
        src: "/side-quests/new-york-times.jpg",
        alt: "The New York Times article header showing CSU AI camp participants working on laptops",
        layout: "article",
      },
    ],
  },
  {
    id: "running",
    title: "Running",
    subtitle: "One mile was just the beginning",
    icon: "running",
    socialLinks: [
      { label: "Beach & Bay San Diego LinkedIn post", href: "https://www.linkedin.com/feed/update/urn:li:activity:7458561384377896960/", icon: "linkedin" },
    ],
    description:
      "I used to avoid running whenever I could. One mile felt like plenty, but a few Strava streaks later, I started finding my rhythm. Since then, I have finished two 5Ks with friends in Long Beach and San Diego, and somewhere along the way, I started looking forward to the next run. Now I am getting ready for my first 10K... slowly falling in love with something I never thought would be my thing :)",
    milestones: [
      { value: "2", label: "5Ks completed" },
      { value: "31:18", label: "Beach & Bay · 3.52 miles recorded" },
      { value: "8:53 / mi", label: "Beach & Bay pace" },
    ],
    photos: [
      {
        caption: "My first 5K · Long Beach",
        layout: "photo",
        fit: "cover",
        images: [
          { src: "/side-quests/longbeach.jpg", alt: "Long Beach 5K finish photo with my recorded run stats" },
          { src: "/side-quests/long_beach_2.jpg", alt: "Celebrating my first 5K with a Long Beach finisher medal" },
        ],
      },
      {
        caption: "New PR · Beach & Bay, San Diego",
        layout: "photo",
        fit: "cover",
        images: [
          { src: "/side-quests/sandiego_1.jpg", alt: "Beach and Bay race photo with a 31:18 finish and 8:53 pace" },
          { src: "/side-quests/san_diego_2.jpg", alt: "Friends celebrating together at the Beach and Bay finish line" },
        ],
      },
    ],
  },
  {
    id: "tvsa",
    title: "Thai-Vietnamese Student Association",
    subtitle: "Former Media Director",
    period: "2023–2024",
    icon: "camera",
    socialLinks: [
      { label: "TVSA on Instagram", href: "https://www.instagram.com/calpolyvsa/", icon: "instagram" },
    ],
    description:
      "Sharing Thai and Vietnamese culture, one reel and event recap at a time. As Media Director, I worked with our board to film events, take photos, and edit 16 videos in Adobe Premiere Pro, including our 2023 Reveal recap. I wanted people to see our community and feel welcome joining it. Along the way, I stepped outside my comfort zone, got more comfortable sharing my ideas, and made some really good friends :)",
    milestones: [
      { value: "16", label: "videos edited for TVSA" },
      { value: "13.1K", label: "views on our most viewed Instagram video" },
    ],
    photos: [
      {
        caption: "Most viewed video on the Instagram page",
        src: "/side-quests/tvsa-most-viewed.png",
        alt: "Why join TVSA Instagram video thumbnail showing four members and 13.1K views",
        layout: "photo",
      },
      {
        caption: "Edited 16 videos for TVSA",
        layout: "square",
        images: [
          { src: "/side-quests/tvsa-recaps-1.png", alt: "TVSA video thumbnails for Illuminate, Bun Rieu, Famsgiving, Revealing, Culturefest, and Triple S" },
          { src: "/side-quests/tvsa-recaps-2.png", alt: "TVSA video thumbnails for EOYB, Spring Roll Night, Lantern Fest, PCW, Open House, and Songkran" },
        ],
      },
      {
        caption: "Time to BeReal · TVSA Media Director",
        src: "/side-quests/tvsa-media-director.png",
        alt: "TVSA Media Director introduction featuring Thomas at the beach with a BeReal-style selfie",
        layout: "square",
      },
      {
        caption: "Jasmine board 2023-2024",
        src: "/side-quests/tvsa-jasmine-board-2023-2024.png",
        alt: "TVSA Jasmine board 2023–2024 scrapbook collage of club events and members",
        layout: "square",
      },
    ],
  },
];
