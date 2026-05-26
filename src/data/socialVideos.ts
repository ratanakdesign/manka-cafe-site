export interface SocialVideo {
  id: string
  platform: 'tiktok' | 'instagram'
  embedId: string
  creatorHandle: string
  creatorName: string
  title: string
  label: string
  description: string
  url: string
  videoSrc?: string
  thumbnail?: string
  thumbnailAlt?: string
  thumbnailStatus: 'matched' | 'uncertain' | 'missing'
  permissionStatus: 'approved' | 'needs-permission'
}

// Homepage shows first 3. Keep all 4 in data for future use.
export const SOCIAL_VIDEOS: SocialVideo[] = [
  {
    // Position 1 — food & atmosphere, broad appeal
    id: 'instagram-reel-2',
    platform: 'instagram',
    embedId: 'C5cXucxP3CW',
    creatorHandle: '@manka_cafe',
    creatorName: 'Instagram creator',
    title: 'Manka Cafe — places in Brisbane',
    label: 'Creator visit',
    description: 'Food and atmosphere from a creator visit to Manka Cafe, Sunnybank.',
    url: 'https://www.instagram.com/reels/C5cXucxP3CW/',
    videoSrc: '/videos/manka-cafe-places-in-brisbane.mp4',
    thumbnail: '/images/social-video/manka-cafe-places-in-brisbane-thumbnail.jpg',
    thumbnailAlt: 'Beef curry with rice and sides at Manka Cafe Market Square Sunnybank',
    thumbnailStatus: 'matched',
    permissionStatus: 'needs-permission',
  },
  {
    // Position 2 — latte art + anime cafe atmosphere
    id: 'tiktok-tingtingkoko',
    platform: 'tiktok',
    embedId: '7498636543855168775',
    creatorHandle: '@tingtingkoko',
    creatorName: 'tingtingkoko',
    title: '2D & 3D foam art anime cafe Sunnybank',
    label: 'TikTok feature',
    description: 'Latte art, food and the anime cafe atmosphere upstairs in Market Square.',
    url: 'https://www.tiktok.com/@tingtingkoko/video/7498636543855168775',
    videoSrc: '/videos/manka-cafe-tingtingkoko.mp4',
    thumbnail: '/images/social-video/manka-cafe-tingtingkoko-thumbnail.jpg',
    thumbnailAlt: 'TikTok thumbnail showing 3D bear foam latte and 2D print latte at Manka Cafe — anime cafe Sunnybank',
    thumbnailStatus: 'matched',
    permissionStatus: 'needs-permission',
  },
  {
    // Position 3 — latte art reel, local MP4 available
    id: 'instagram-reel-1',
    platform: 'instagram',
    embedId: 'C4R4OBCPmrI',
    creatorHandle: '@manka_cafe',
    creatorName: 'Instagram creator',
    title: 'Manka Cafe featured reel',
    label: 'Instagram Reel',
    description: 'A short look at the latte art and cosy anime cafe space at Market Square.',
    url: 'https://www.instagram.com/reels/C4R4OBCPmrI/',
    videoSrc: '/videos/manka-cafe-instagram-reel.mp4',
    thumbnail: '/images/social-video/manka-cafe-instagram-reel-thumbnail.jpg',
    thumbnailAlt: 'Anime character 2D print latte at Manka Cafe in Sunnybank',
    thumbnailStatus: 'matched',
    permissionStatus: 'needs-permission',
  },
  {
    // Position 4 — no local MP4, kept in data for future use
    id: 'instagram-reel-3',
    platform: 'instagram',
    embedId: 'C8lN0HOPjaa',
    creatorHandle: '@manka_cafe',
    creatorName: 'Instagram creator',
    title: 'Anime & manga cafe in Brisbane',
    label: 'Latte art feature',
    description: 'Anime character 2D print latte from an Instagram feature of Manka Cafe.',
    url: 'https://www.instagram.com/reel/C8lN0HOPjaa/',
    thumbnail: '/images/social-video/manka-cafe-instagram-reel-thumbnail.jpg',
    thumbnailAlt: 'Anime character 2D print latte at Manka Cafe — anime and manga cafe in Brisbane',
    thumbnailStatus: 'uncertain',
    permissionStatus: 'needs-permission',
  },
]
