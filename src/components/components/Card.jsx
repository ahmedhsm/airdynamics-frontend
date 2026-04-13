export default function Card({ data }) {
  const { heading, description, image, imageAlt } = data.content

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-4 mb-4">
      {image && <img src={image.url} alt={imageAlt || heading} className="w-full h-48 object-cover rounded-lg mb-4" />}
      {heading && <h3 className="text-xl font-bold mb-2">{heading}</h3>}
      {description && <p className="text-gray-600">{description}</p>}
    </div>
  )
}
