export default function TextBlock({ data }) {
  const { heading, description } = data.content

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {heading && <h2 className="text-3xl font-bold mb-4">{heading}</h2>}
      {description && <p className="text-gray-700 text-lg leading-relaxed">{description}</p>}
    </div>
  )
}
