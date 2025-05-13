import {Image } from '../index'

const TrustedBySection = () => {
  return (
    <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 mb-8">Trusted by leading healthcare institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image src="images/placeholder.svg?height=60&width=120" alt={`Partner logo ${i}`} width={120} height={60} />
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TrustedBySection