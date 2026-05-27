import { defineField, defineType } from 'sanity'

export const latteArtType = defineType({
  name: 'latteArtType',
  title: 'Latte Art Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g. 3D Milk Foam Art',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: '01, 02, 03, 04',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'order' },
    prepare({ title, subtitle }) {
      const num = subtitle != null ? String(subtitle).padStart(2, '0') : ''
      return { title: title ?? 'Latte Art Type', subtitle: num }
    },
  },
})
