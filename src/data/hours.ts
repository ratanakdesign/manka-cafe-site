export interface DayHours {
  day: number
  name: string
  open: string | null
  close: string | null
  closed: boolean
}

export const HOURS: DayHours[] = [
  { day: 0, name: 'Sunday',    open: '10:00', close: '18:30', closed: false },
  { day: 1, name: 'Monday',    open: '10:00', close: '18:30', closed: false },
  { day: 2, name: 'Tuesday',   open: null,    close: null,    closed: true  },
  { day: 3, name: 'Wednesday', open: '10:00', close: '18:30', closed: false },
  { day: 4, name: 'Thursday',  open: '10:00', close: '18:30', closed: false },
  { day: 5, name: 'Friday',    open: '10:00', close: '20:00', closed: false },
  { day: 6, name: 'Saturday',  open: '10:00', close: '20:00', closed: false },
]

export function getOpeningStatus(): {
  isOpen: boolean
  label: string
  sublabel: string
  state: 'open' | 'closed' | 'closed-today' | 'unknown'
} {
  const now = new Date()
  const dayIndex = now.getDay()
  const todayHours = HOURS[dayIndex]

  if (todayHours.closed) {
    const nextOpen = HOURS.find((h, i) => i > dayIndex && !h.closed)
      ?? HOURS.find((h) => !h.closed)
    return {
      isOpen: false,
      label: 'Closed today',
      sublabel: nextOpen ? `Opens ${nextOpen.name} at ${formatTime(nextOpen.open!)}` : '',
      state: 'closed-today',
    }
  }

  const [openH, openM] = todayHours.open!.split(':').map(Number)
  const [closeH, closeM] = todayHours.close!.split(':').map(Number)
  const currentMinutes = now.getHours() * 60 + now.getMinutes()
  const openMinutes = openH * 60 + openM
  const closeMinutes = closeH * 60 + closeM

  if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
    return {
      isOpen: true,
      label: `Open today until ${formatTime(todayHours.close!)}`,
      sublabel: '',
      state: 'open',
    }
  }

  if (currentMinutes < openMinutes) {
    return {
      isOpen: false,
      label: `Closed — opens today at ${formatTime(todayHours.open!)}`,
      sublabel: '',
      state: 'closed',
    }
  }

  const tomorrow = HOURS[(dayIndex + 1) % 7]
  if (tomorrow.closed) {
    const nextOpen = HOURS.find((h, i) => i > (dayIndex + 1) % 7 && !h.closed)
      ?? HOURS.find((h) => !h.closed)
    return {
      isOpen: false,
      label: 'Closed for today',
      sublabel: nextOpen ? `Opens ${nextOpen.name} at ${formatTime(nextOpen.open!)}` : '',
      state: 'closed',
    }
  }

  return {
    isOpen: false,
    label: `Closed — opens ${tomorrow.name} at ${formatTime(tomorrow.open!)}`,
    sublabel: '',
    state: 'closed',
  }
}

function formatTime(time: string): string {
  const [h, m] = time.split(':').map(Number)
  const period = h >= 12 ? 'PM' : 'AM'
  const hour = h > 12 ? h - 12 : h === 0 ? 12 : h
  return m === 0 ? `${hour}:00 ${period}` : `${hour}:${String(m).padStart(2, '0')} ${period}`
}
