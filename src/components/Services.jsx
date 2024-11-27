import React, { useState, useEffect } from 'react'

const Services = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Modern Architecture",
      description: "Innovative designs meeting contemporary standards"
    },
    {
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Commercial Construction",
      description: "Building tomorrow's business spaces today"
    },
    {
      url: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Residential Projects",
      description: "Creating homes that last generations"
    },
    {
      url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Infrastructure Development",
      description: "Building the foundation of communities"
    },
    {
      url: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Industrial Facilities",
      description: "Powering industrial growth with robust structures"
    },
    {
      url: "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sustainable Building",
      description: "Eco-friendly construction for a better future"
    },
    {
      url: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Renovation Projects",
      description: "Transforming spaces with modern upgrades"
    },
    {
      url: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Urban Development",
      description: "Shaping cities for the next generation"
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* First Item */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6">Excellence in Construction</h1>
            <p className="text-gray-600 mb-8">
              We bring together expertise and innovation to deliver outstanding construction projects that exceed expectations.
            </p>
            <button className="bg-yellow-400 px-8 py-3 rounded-md text-black font-semibold hover:bg-yellow-500 transition-colors">
              Learn More
            </button>
          </div>

          {/* Second Item */}
          <div className="flex-1">
            <h4 className="text-2xl font-bold mb-4">Why Choose Us</h4>
            <p className="text-gray-600">
              With decades of experience in the construction industry, we've built a reputation for quality, reliability, and innovation. Our team of experts ensures that every project is completed to the highest standards.
            </p>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative w-full mt-8 h-[400px] group">
          <div 
            className="w-full h-full rounded-lg shadow-2xl overflow-hidden relative"
            style={{
              backgroundImage: `url(${images[currentImageIndex].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'background-image 0.5s ease-in-out'
            }}
          >
            {/* Popup Message */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center px-6">
                <h3 className="text-2xl font-bold mb-2">{images[currentImageIndex].title}</h3>
                <p className="text-lg">{images[currentImageIndex].description}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-2xl font-bold"
            aria-label="Previous image"
          >
            ←
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-2xl font-bold"
            aria-label="Next image"
          >
            →
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
