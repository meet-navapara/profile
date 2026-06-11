export default function ProjectScreenImage({ label, image, expanded = false }) {
  return (
    <div className={`screen-image ${expanded ? 'screen-image--expanded' : ''}`}>
      <img
        alt={label}
        decoding="async"
        fetchPriority={expanded ? 'auto' : 'low'}
        loading="lazy"
        src={image}
      />
    </div>
  )
}
