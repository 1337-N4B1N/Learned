import React from 'react'

const About = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-5">
        About Buy Me Momo
      </h1>
      <p className="text-center text-gray-700 dark:text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
        Welcome to <strong>Buy Me Momo</strong>, a platform created to support creators, artists, and developers by enabling them to connect with their audience in a meaningful way. Just like Buy Me a Coffee or Patreon, <em>Buy Me Momo</em> allows you to make small contributions, show appreciation, and keep creators motivated to continue doing what they love.
      </p>
      <p className="text-center text-gray-700 dark:text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
        With every "momo" you buy, you’re fueling the passion and dedication of talented individuals who pour their hearts into their work. Whether it’s art, music, code, or any creative endeavor, your support matters. Join us in building a community where creators can thrive!
      </p>
      <p className="text-center text-gray-700 dark:text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
        Thank you for being a part of Buy Me Momo. Together, let’s make creativity and collaboration more accessible and enjoyable for everyone.
      </p>
    </div>
  )
}

export default About

export const metadata = {
        title: 'About-Buy Me Momo',
      }
