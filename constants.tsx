
import { VideoAsset, Skill } from './types';

export const UGC_VIDEOS: VideoAsset[] = [
  {
    id: 'ugc-1',
    title: 'Morning Skincare',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://picsum.photos/seed/ugc1/400/800',
    description: 'Clean aesthetic skincare routine for organic brands.'
  },
  {
    id: 'ugc-2',
    title: 'Tech Review Pro',
    url: 'https://www.w3schools.com/html/movie.mp4',
    thumbnail: 'https://picsum.photos/seed/ugc2/400/800',
    description: 'Highlighting features of premium headphones.'
  },
  {
    id: 'ugc-3',
    title: 'Office Setup',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://picsum.photos/seed/ugc3/400/800',
    description: 'Product styling for home-office lifestyle brands.'
  },
  {
    id: 'ugc-4',
    title: 'Fitness Hack',
    url: 'https://www.w3schools.com/html/movie.mp4',
    thumbnail: 'https://picsum.photos/seed/ugc4/400/800',
    description: 'Quick energy-boosting routine.'
  }
];

export const YOUTUBE_VIDEOS: VideoAsset[] = [
  {
    id: 'yt-1',
    title: 'The Future of Content Creation',
    url: 'https://www.w3schools.com/html/movie.mp4',
    thumbnail: 'https://picsum.photos/seed/yt1/1280/720',
    description: 'A deep dive into how AI is changing the UGC landscape.'
  },
  {
    id: 'yt-2',
    title: 'Mastering Lighting',
    url: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumbnail: 'https://picsum.photos/seed/yt2/1280/720',
    description: 'How to use natural light to make your videos pop.'
  },
  {
    id: 'yt-3',
    title: 'Directing Yourself',
    url: 'https://www.w3schools.com/html/movie.mp4',
    thumbnail: 'https://picsum.photos/seed/yt3/1280/720',
    description: 'How to manage the camera while being the talent.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Video Editing', icon: '✂️', color: 'bg-indigo-50' },
  { name: 'Script Writing', icon: '📝', color: 'bg-blue-50' },
  { name: 'Color Grading', icon: '🎨', color: 'bg-violet-50' },
  { name: 'Audio Mixing', icon: '🎵', color: 'bg-sky-50' },
  { name: 'On-Camera Hosting', icon: '🎤', color: 'bg-purple-50' },
  { name: 'Product Styling', icon: '✨', color: 'bg-cyan-50' },
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/p1/600/800',
  'https://picsum.photos/seed/p2/600/600',
  'https://picsum.photos/seed/p3/600/700',
  'https://picsum.photos/seed/p4/600/900',
  'https://picsum.photos/seed/p5/600/600',
  'https://picsum.photos/seed/p6/600/800',
  'https://picsum.photos/seed/p7/600/700',
  'https://picsum.photos/seed/p8/600/1000',
  'https://picsum.photos/seed/p9/600/600',
  'https://picsum.photos/seed/p10/600/800',
  'https://picsum.photos/seed/p11/600/900',
  'https://picsum.photos/seed/p12/600/700',
];

export const RESUME_EXPERIENCE = [
  {
    title: "Senior UGC Strategist",
    company: "Luxe Media Agency",
    period: "2022 - Present",
    desc: "Led content strategy for 20+ global brands, achieving over 5M combined views on TikTok and Reels."
  },
  {
    title: "Freelance Content Creator",
    company: "Self-Employed",
    period: "2020 - 2022",
    desc: "Specialized in direct-response video ads for e-commerce startups in the tech and beauty niches."
  },
  {
    title: "Video Editor & Motion Designer",
    company: "Creative Pulse Studios",
    period: "2018 - 2020",
    desc: "Crafted high-retention ads and cinematic product trailers using the Adobe Suite and DaVinci Resolve."
  }
];
