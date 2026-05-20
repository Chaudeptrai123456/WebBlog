export type ContentBlock =
  | { type: "heading"; value: string }
  | { type: "paragraph"; value: string }
  | { type: "image"; src: string; caption?: string };

export interface BlogAuthor {
  name: string;
  avatar: string;
}

export interface BlogStats {
  views: number;
  likes: number;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
  tag: string;
  author: BlogAuthor;
  createdAt: string;
  stats: BlogStats;
  content: ContentBlock[];
}
