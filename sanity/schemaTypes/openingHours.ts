import { defineField, defineType } from 'sanity'

export const openingHours = defineType({
  name: 'openingHours',
  title: 'Opening Hours',
  type: 'document',
  fields: [
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'openTime',
      title: 'Open Time',
      type: 'string',
      description: 'e.g. 10am',
    }),
    defineField({
      name: 'closeTime',
      title: 'Close Time',
      type: 'string',
      description: 'e.g. 6:30pm',
    }),
    defineField({
      name: 'isClosed',
      title: 'Closed this day',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Order (0=Sunday, 1=Monday…)',
      type: 'number',
    }),
    defineField({
      name: 'holidayNote',
      title: 'Holiday Note',
      type: 'string',
      description: 'e.g. Hours may vary on public holidays',
    }),
  ],
  preview: {
    select: { title: 'day', subtitle: 'openTime' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ?? 'Closed' }
    },
  },
})
