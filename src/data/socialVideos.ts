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
  videoSrc?: string       // local MP4 — if present, plays on-site
  thumbnail?: string
  thumbnailAlt?: string
  permissionStatus: 'approved' | 'needs-permission'
}

export const SOCIAL_VIDEOS: SocialVideo[] = [
  {
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
    permissionStatus: 'needs-permission',
  },
  {
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
    thumbnail: '/images/social-video/manka-cafe-3d-foam-latte-art-bear.jpg',
    thumbnailAlt: '3D bear milk foam latte art at Manka Cafe in Sunnybank',
    permissionStatus: 'needs-permission',
  },
  {
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
    permissionStatus: 'needs-permission',
  },
  {
    id: 'instagram-reel-3',
    platform: 'instagram',
    embedId: 'C8lN0HOPjaa',
    creatorHandle: '@manka_cafe',
    creatorName: 'Instagram creator',
    title: 'Anime & manga cafe in Brisbane',
    label: 'Latte art feature',
    description: 'Anime character 2D print latte from an Instagram feature of Manka Cafe.',
    url: 'https://www.instagram.com/reel/C8lN0HOPjaa/',
    // No local MP4 for this reel — falls back to embed/thumbnail card
    thumbnail: '/images/social-video/manka-cafe-instagram-reel-thumbnail.jpg',
    thumbnailAlt: 'Anime character 2D print latte at Manka Cafe — anime and manga cafe in Brisbane',
    permissionStatus: 'needs-permission',
  },
]
