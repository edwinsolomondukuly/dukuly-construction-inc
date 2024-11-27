import React from 'react'

const Search = () => {
  return (
    <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Find Your Dream Project</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Looking for specific construction services? Use our search tool to find exactly what you need.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Project Type"
          className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="text"
          placeholder="Location"
          className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button className="bg-yellow-400 px-8 py-3 rounded-md text-black font-semibold hover:bg-yellow-500 transition-colors">
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
