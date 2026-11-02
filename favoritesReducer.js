export const STORAGE_KEY = 'photo_gallery_favorites';

export const FAVORITES_ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
};

/**
 * Retrieves the stored favorite photo IDs from localStorage.
 * Used as the lazy initializer function for useReducer.
 */
export function getInitialFavorites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Failed to load favorites from localStorage:', error);
    return [];
  }
}

/**
 * Reducer function to manage the favorite photo IDs state.
 * Supports toggling favorites (adding if not present, removing if present).
 *
 * @param {Array<string>} state - Current array of favorited photo IDs
 * @param {{ type: string, payload: string }} action - Dispatched action
 * @returns {Array<string>} Updated array of favorited photo IDs
 */
export function favoritesReducer(state, action) {
  switch (action.type) {
    case FAVORITES_ACTIONS.TOGGLE_FAVORITE: {
      const photoId = action.payload;
      const isAlreadyFavorite = state.includes(photoId);

      const updatedFavorites = isAlreadyFavorite
        ? state.filter((id) => id !== photoId)
        : [...state, photoId];

      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFavorites));
      } catch (error) {
        console.error('Failed to save favorites to localStorage:', error);
      }

      return updatedFavorites;
    }

    default:
      return state;
  }
}
