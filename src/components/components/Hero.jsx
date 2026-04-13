export default function Hero({ data }) {
  const { heading, subheading, description, buttonText, buttonLink, image } = data.content

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {heading && <h1 className="text-5xl font-bold mb-4">{heading}</h1>}
        {subheading && <h2 className="text-2xl font-semibold mb-4">{subheading}</h2>}
        {description && <p className="text-lg mb-8">{description}</p>}
        {buttonText && (
          <a
            href={buttonLink || '#'}
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  )
}
