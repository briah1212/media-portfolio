
export interface VideoAsset {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export type NavItem = 'Portfolio' | 'About Me' | 'Pictures' | 'Contact Me';
