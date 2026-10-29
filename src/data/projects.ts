export interface Project {
  id: string;
  title: string;
  brand: string;
  category: 'HEALTH & FITNESS' | 'TECH & APPS' | 'LIFESTYLE' | 'EDUCATION' | 'PRODUCT DEMOS';
  videoSrc: string;
  thumbnail: string;
  description: string;
  format: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Authentic Product Storytelling',
    brand: 'Sample Brand A',
    category: 'HEALTH & FITNESS',
    videoSrc: '/videos/video1.mp4',
    thumbnail: '/videos/video1.mp4', // Using video as thumbnail for simplicity or a frame
    description: 'High-energy hook focusing on health benefits.',
    format: '9:16 Vertical',
  },
  {
    id: '2',
    title: 'Tech App Walkthrough',
    brand: 'Sample App B',
    category: 'TECH & APPS',
    videoSrc: '/videos/video2.mp4',
    thumbnail: '/videos/video2.mp4',
    description: 'Detailed UX walkthrough with authentic reaction.',
    format: '9:16 Vertical',
  },
  {
    id: '3',
    title: 'Lifestyle Daily Routine',
    brand: 'Sample Brand C',
    category: 'LIFESTYLE',
    videoSrc: '/videos/video3.mp4',
    thumbnail: '/videos/video3.mp4',
    description: 'Seamless integration of product into daily life.',
    format: '9:16 Vertical',
  },
  {
    id: '4',
    title: 'Educational Explainer',
    brand: 'Sample Brand D',
    category: 'EDUCATION',
    videoSrc: '/videos/video4.mp4',
    thumbnail: '/videos/video4.mp4',
    description: 'Complex concept made simple through storytelling.',
    format: '9:16 Vertical',
  },
  // Demo placeholders as requested in the prompt
  ...Array.from({ length: 6 }).map((_, i) => ({
    id: `demo-${i + 1}`,
    title: `Demo Project ${i + 1}`,
    brand: 'Demo Project',
    category: 'PRODUCT DEMOS' as const,
    videoSrc: '/videos/video1.mp4', // Reusing a video for demo
    thumbnail: '/videos/video1.mp4',
    description: 'This is a demo placeholder to showcase the layout.',
    format: '9:16 Vertical',
  })),
];
