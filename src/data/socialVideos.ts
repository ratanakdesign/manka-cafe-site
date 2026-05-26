export interface SocialVideo {
  id: string
  platform: 'tiktok' | 'instagram'
  creatorHandle: string
  creatorName: string
  title: string
  description: string
  url: string
  thumbnail?: string
  permissionStatus: 'approved' | 'needs-permission'
}

export const SOCIAL_VIDEOS: SocialVideo[] = [
  {
    id: 'tiktok-tingtingkoko',
    platform: 'tiktok',
    creatorHandle: '@tingtingkoko',
    creatorName: 'tingtingkoko',
    title: 'Manka Cafe visit',
    description: 'A TikTok creator visits Manka Cafe and captures the latte art and atmosphere.',
    url: 'https://www.tiktok.com/@tingtingkoko/video/7498636543855168775',
    permissionStatus: 'needs-permission',
  },
  {
    id: 'instagram-reel-1',
    platform: 'instagram',
    creatorHandle: '@manka_cafe',
    creatorName: 'Instagram creator',
    title: 'Manka Cafe featured reel',
    description: 'A creator captures the latte art and cosy anime atmosphere at Manka Cafe.',
    url: 'https://www.instagram.com/reels/C4R4OBCPmrI/',
    permissionStatus: 'needs-permission',
  },
  {
    id: 'instagram-reel-2',
    platform: 'instagram',
    creatorHandle: '@manka_cafe',
    creatorName: 'Instagram creator',
    title: 'Manka Cafe — upstairs in Sunnybank',
    description: 'A visitor documents the hidden gem upstairs in Market Square, Sunnybank.',
    url: 'https://www.instagram.com/reels/C5cXucxP3CW/',
    permissionStatus: 'needs-permission',
  },
]
