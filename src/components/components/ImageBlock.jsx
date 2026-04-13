export default function ImageBlock({ data }) {
  const { image, imageAlt, description } = data.content

  return (
    <div className="py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {image && (
          <img
            src={image.url}
            alt={imageAlt || 'Image'}
            className="w-full h-auto rounded-lg shadow-lg mb-4"
          />
        )}
        {description && <p className="text-gray-600 text-center">{description}</p>}
      </div>
    </div>
  )
}
