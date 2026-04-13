export default function Button({ data }) {
  const { buttonText, buttonLink } = data.content

  return (
    <div className="flex justify-center py-4">
      <a
        href={buttonLink || '#'}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        {buttonText || 'Click me'}
      </a>
    </div>
  )
}
