import React from 'react'
import { PageNotFoundContent } from '../../content/data';

const PageNotFound = () => {

  return (
    <>
    <div className='w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 '>
        <div className='max-w-2xl w-full text-center'>

            <div className='mb-8 sm:mb-12'>
                <h1 className='text-6xl sm:text-8xl md:text-9xl font-black leading-none'>
                    <span className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 bg-clip-text text-transparent filter drop-shadow-sm">
                        {PageNotFoundContent.title}
                    </span>
                </h1>
            </div>

            <div className='mb-6 sm:mb-8'>
                <h2 className='text-lg sm:text-xl md-text-2xl font-bold text-gray-800 mb-3 sm:mb-4 tracking-wide'>
                    {PageNotFoundContent.subtitle}
                </h2>

                <div className='max-w-md mx-auto'>
                    {PageNotFoundContent.description.map((line, index) => (
                        <p key={index} className="text-sm sm:text-base text-gray-600 leading-relaxed mb-1">
                            {line}
                        </p>
                    ))}
                </div>
            </div>
            <div className="mt-8 sm:mt-10">
          <a
            href={PageNotFoundContent.button.pageRoute}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm sm:text-base rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50"
          >
            {PageNotFoundContent.button.text}
          </a>
        </div>
        </div>
    </div>
    </>
  )
}

export default PageNotFound
