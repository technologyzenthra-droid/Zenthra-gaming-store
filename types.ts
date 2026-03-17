
export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  downloadUrl: string;
  category: string;
  createdAt: number;
}

export type View = 'home' | 'admin';
