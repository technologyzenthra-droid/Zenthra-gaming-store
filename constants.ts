
export const ADMIN_ACCESS_CODE = 'ZENTHRA';
export const ADMIN_PHONE = '0793783317';
export const STORAGE_KEY = 'zenthra_games_store';
export const GITHUB_URL = 'https://github.com'; // Default placeholder

export const CATEGORIES = [
  'Action',
  'Adventure',
  'RPG',
  'Sports',
  'Strategy',
  'Simulation',
  'Indie',
  'Other'
];

export const INITIAL_GAMES = [
  {
    id: '1',
    title: 'Modern Warfare: Special Ops',
    description: 'High-octane tactical shooter featuring realistic graphics and intense gameplay.',
    imageUrl: 'https://picsum.photos/seed/warfare/600/400',
    downloadUrl: 'https://www.google.com',
    category: 'Action',
    createdAt: Date.now()
  },
  {
    id: '2',
    title: 'Forest Legends',
    description: 'Explore a vast open world filled with magical creatures and hidden treasures.',
    imageUrl: 'https://picsum.photos/seed/forest/600/400',
    downloadUrl: 'https://www.google.com',
    category: 'Adventure',
    createdAt: Date.now() - 100000
  }
];
