import React, { useState, useReducer, useCallback, useMemo } from 'react';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import {
  favoritesReducer,
  getInitialFavorites,
  FAVORITES_ACTIONS,
} from '../reducers/favoritesReducer';
import SearchBar from './SearchBar';
import PhotoCard from './PhotoCard';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

/**
 * Gallery component:
 * - Fetches photos using the custom hook useFetchPhotos
 * - Manages favorite photos state using useReducer and persists to localStorage
 * - Provides search filtering by author using useCallback and useMemo
 * - Renders a responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
 */
export default function Gallery() {
  // 1. Fetch photos using custom hook (returns photos, loading, error)
  const { photos, loading, error } = useFetchPhotos();

  // 2. Favorites state management using useReducer (lazy initialization from localStorage)
  const [favorites, dispatch] = useReducer(
    favoritesReducer,
    [],
    getInitialFavorites
  );

  // 3. Search query state
  const [searchTerm, setSearchTerm] = useState('');

  // 4. useCallback for search filter handler
  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  // 5. useCallback for toggling favorite photo
  const handleToggleFavorite = useCallback((photoId) => {
    dispatch({
      type: FAVORITES_ACTIONS.TOGGLE_FAVORITE,
      payload: photoId,
    });
  }, []);

  // 6. useMemo to calculate the filtered photos list based on photographer name
  const filteredPhotos = useMemo(() => {
    const trimmedQuery = searchTerm.trim().toLowerCase();
    if (!trimmedQuery) {
      return photos;
    }
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(trimmedQuery)
    );
  }, [photos, searchTerm]);

  return (
    <section className="w-full">
      {/* Search Input Bar (only shown when not in full loading or error state) */}
      {!loading && !error && (
        <SearchBar value={searchTerm} onChange={handleSearchChange} />
      )}

      {/* Loading State */}
      {loading && <LoadingSpinner />}

      {/* Error State */}
      {error && <ErrorMessage message={error} />}

      {/* Photos Grid */}
      {!loading && !error && (
        <>
          {filteredPhotos.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm max-w-md mx-auto">
              <p className="text-slate-600 font-medium text-lg">
                No photos found
              </p>
              <p className="text-slate-400 text-sm mt-1">
                No photographers matched &ldquo;{searchTerm}&rdquo;. Try a different search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPhotos.map((photo) => (
                <PhotoCard
                  key={photo.id}
                  photo={photo}
                  isFavorite={favorites.includes(photo.id)}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
}
