import React from 'react'

const Features = () => {
  const features = [
    {
      title: "Expert Team",
      description: "Our skilled professionals bring years of experience to every project"
    },
    {
      title: "Quality Work",
      description: "We maintain the highest standards in construction and safety"
    },
    {
      title: "On-Time Delivery",
      description: "We commit to completing projects within agreed timelines"
    },
    {
      title: "Cost Effective",
      description: "Competitive pricing without compromising on quality"
    }
  ]

  return (
    <div className="relative px-4 md:px-8 max-w-7xl mx-auto mb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-16 relative z-20">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
