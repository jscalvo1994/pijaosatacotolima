'use client';

import React from 'react';

const videos = [
  {
    title: 'Ceremonia ancestral de la Comunidad Indígena Pijao',
    url: 'https://www.youtube.com/embed/EXAMPLE1',
  },
  {
    title: 'Tradiciones y cultura Pijao',
    url: 'https://www.youtube.com/embed/EXAMPLE2',
  },
  {
    title: 'Arte y música indígena',
    url: 'https://www.youtube.com/embed/EXAMPLE3',
  },
  {
    title: 'Rescate de la lengua ancestral',
    url: 'https://www.youtube.com/embed/EXAMPLE4',
  },
  {
    title: 'Historia y legado de la Comunidad Pijao',
    url: 'https://www.youtube.com/embed/EXAMPLE5',
  },
];

export default function CardGroupVideos() {
  return (
    <div className="flex flex-col items-center justify-center w-[90%] mx-auto my-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Videos de la Comunidad
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={video.url}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
