export interface SocialVideo {
  id: string
  platform: 'tiktok' | 'instagram'
  embedId: string  // TikTok video ID, or Instagram reel shortcode
  creatorHandle: string
  creatorName: string
  title: string
  label: string
  url: string
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
    title: '2D & 3D foam art — anime cafe Sunnybank',
    label: 'TikTok feature',
    url: 'https://www.tiktok.com/@tingtingkoko/video/7498636543855168775',
    thumbnail: '/images/social-video/manka-cafe-tingtingkoko-tiktok-thumbnail.jpg',
    thumbnailAlt: 'TikTok thumbnail showing 3D bear foam art and 2D print latte at Manka Cafe anime cafe Sunnybank',
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
    url: 'https://www.instagram.com/reels/C4R4OBCPmrI/',
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
    url: 'https://www.instagram.com/reels/C5cXucxP3CW/',
    thumbnail: '/images/social-video/manka-cafe-places-in-brisbane-reel-thumbnail.jpg',
    thumbnailAlt: 'Beef curry with rice and sides at Manka Cafe Market Square Sunnybank — creator food reel',
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
    url: 'https://www.instagram.com/reel/C8lN0HOPjaa/',
    thumbnail: '/images/social-video/manka-cafe-instagram-reel-thumbnail.jpg',
    thumbnailAlt: 'Anime character 2D print latte at Manka Cafe — anime and manga cafe Brisbane Instagram reel',
    permissionStatus: 'needs-permission',
  },
]
