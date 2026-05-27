import { defineField, defineType } from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      description: 'e.g. Google review',
    }),
  ],
  preview: {
    select: { title: 'quote', subtitle: 'source' },
    prepare({ title, subtitle }) {
      return {
        title: title ? `"${title.slice(0, 60)}…"` : 'Review',
        subtitle,
      }
    },
  },
})
