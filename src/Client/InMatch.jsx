import React from 'react'

export const InMatch = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className="bg-blue-100 rounded-lg p-6 w-96">
        <p className="text-xl font-bold mb-4">Card Title</p>
        <p className="text-gray-600 mb-4">Card content goes here.</p>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
            Button 1
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Button 2
          </button>
        </div>
      </div>
    </div>
  )
}
