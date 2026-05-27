import { defineField, defineType } from 'sanity'

export const creatorVideo = defineType({
  name: 'creatorVideo',
  title: 'Creator Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'Instagram', value: 'Instagram' },
          { title: 'TikTok', value: 'TikTok' },
          { title: 'YouTube', value: 'YouTube' },
        ],
      },
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. Creator visit, TikTok feature, Instagram Reel',
    }),
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
      options: { accept: 'video/mp4,video/*' },
    }),
    defineField({
      name: 'originalUrl',
      title: 'Original URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'platform' },
    prepare({ title, subtitle }) {
      return { title: title ?? 'Creator Video', subtitle }
    },
  },
})
