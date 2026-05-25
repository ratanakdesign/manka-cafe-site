/**
 * Intentional image placeholder used where real photography is needed.
 * Replace the outer div + children with <Image> when assets are available.
 */
interface ImageFrameProps {
  aspect?: string
  label?: string
  /** Photo brief for the asset request */
  brief?: string
  className?: string
}

export function ImageFrame({ aspect = '4/3', label, brief, className = '' }: ImageFrameProps) {
  // TODO: Replace with <Image> once real photography is available
  // Brief: {brief || label || 'Photograph needed'}
  return (
    <div
      className={`img-frame ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={label ?? brief ?? 'Photo coming soon'}
    >
      {label && <p className="img-frame-label">{label}</p>}
    </div>
  )
}
