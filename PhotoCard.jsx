import React from 'react';

/**
 * PhotoCard component displays an individual photo, photographer's name,
 * and an interactive heart-shaped favorite button.
 *
 * @param {{
 *   photo: { id: string, author: string, download_url: string, width: number, height: number },
 *   isFavorite: boolean,
 *   onToggleFavorite: (id: string) => void
 * }} props
 */
export default function PhotoCard({ photo, isFavorite, onToggleFavorite }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 border border-slate-200/80 flex flex-col group">
      {/* Photo Container */}
      <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
        <img
          src={photo.download_url}
          alt={`Photograph by ${photo.author}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Quick favorite button overlay on photo */}
        <button
          type="button"
          onClick={() => onToggleFavorite(photo.id)}
          aria-label={isFavorite ? `Remove photo ${photo.id} from favorites` : `Add photo ${photo.id} to favorites`}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <svg
            className={`w-5 h-5 transition-colors duration-150 ${
              isFavorite
                ? 'fill-red-500 text-red-500'
                : 'fill-transparent text-slate-500 hover:text-red-500 stroke-current stroke-2'
            }`}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>

      {/* Card Info & Favorite Action */}
      <div className="p-4 flex items-center justify-between gap-3 bg-white mt-auto">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Photographer
          </p>
          <h4
            className="text-base font-semibold text-slate-800 truncate"
            title={photo.author}
          >
            {photo.author}
          </h4>
        </div>

        <button
          type="button"
          onClick={() => onToggleFavorite(photo.id)}
          aria-label={isFavorite ? `Remove photo ${photo.id} from favorites` : `Add photo ${photo.id} to favorites`}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-400 ${
            isFavorite
              ? 'bg-red-50 text-red-600 hover:bg-red-100'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <svg
            className={`w-4 h-4 ${
              isFavorite
                ? 'fill-red-500 text-red-500'
                : 'fill-none text-slate-400 stroke-current stroke-2'
            }`}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <span>{isFavorite ? 'Favorited' : 'Favorite'}</span>
        </button>
      </div>
    </div>
  );
}
