import { useState, useEffect } from 'react';

/**
 * Custom React hook to fetch photos from the Picsum API.
 * Encapsulates the fetching logic, loading state, and error handling.
 * 
 * Returns exactly: photos, loading, error
 */
export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPhotos = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://picsum.photos/v2/list?limit=30');

        if (!response.ok) {
          throw new Error(`Failed to fetch photos: HTTP ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (isMounted) {
          setPhotos(data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'An unexpected error occurred while fetching photos.');
          setLoading(false);
        }
      }
    };

    fetchPhotos();

    return () => {
      isMounted = false;
    };
  }, []);

  return { photos, loading, error };
}
