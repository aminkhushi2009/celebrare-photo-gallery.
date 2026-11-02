# Photo Gallery Web Application

A responsive, high-performance Photo Gallery web application built with **React**, **Vite**, and **Tailwind CSS** for the **Frontend React Internship Assignment at Celebrare**.

🔗 **Live Demo:** [https://aminkhushi2009.github.io/celebrare-photo-gallery/](https://aminkhushi2009.github.io/celebrare-photo-gallery/)

---

## 🚀 Features & Requirements Fulfilled

1. **Project Setup**:
   - Built using React with Vite.
   - 100% JavaScript and functional React components.
   - Styled exclusively with utility-first **Tailwind CSS** (no Bootstrap, Material UI, or component libraries).

2. **Fetch Photos from API**:
   - Fetches exactly 30 photos on initial load using the native Fetch API.
   - Endpoint: `https://picsum.photos/v2/list?limit=30`.
   - Displays an animated loading spinner during fetch operations.
   - Displays a descriptive error message banner if network or HTTP requests fail.
   - Renders actual photos returned by the API.

3. **Responsive Photo Gallery**:
   - Clean, organized grid matching screen constraints:
     - **Desktop** (≥ 1024px): 4 columns
     - **Tablet** (768px – 1023px): 2 columns
     - **Mobile** (< 768px): 1 column
   - Each photo card displays:
     - The actual photograph.
     - The photographer's / author's name.
     - A heart-shaped interactive favorite button.

4. **Instant Search Filter**:
   - Clean, centered search input bar above the gallery.
   - Filters photos dynamically by photographer name in real-time as the user types.
   - Pure client-side filtering without page reloads or redundant API requests.

5. **Favorites Managed via `useReducer`**:
   - Favorite state is managed exclusively with React's `useReducer` hook (no `useState` for favorites).
   - Toggles photo favorite status upon clicking the heart button (add if not favorited, remove if favorited).
   - Saved persistently in browser `localStorage`.
   - Automatically restored from `localStorage` upon page refresh.
   - Heart icons visually reflect whether an item is favorited.

6. **Custom Hook (`useFetchPhotos`)**:
   - Encapsulates all data fetching, loading, and error handling logic.
   - Located in `src/hooks/useFetchPhotos.js`.
   - Returns exactly: `{ photos, loading, error }`.
   - Utilized by the `Gallery` component without direct inline API calls.

7. **Performance Optimization (`useCallback` & `useMemo`)**:
   - `useCallback` memoizes the search input change handler and favorite toggle handler to avoid unnecessary function re-instantiations.
   - `useMemo` computes the filtered photos list only when `photos` or `searchTerm` changes.

---

## 📁 Project Structure

```
internproject/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx                   # React root entry point
    ├── index.css                  # Tailwind CSS directives
    ├── App.jsx                    # Root App component layout & header
    ├── hooks/
    │   └── useFetchPhotos.js      # Custom hook returning { photos, loading, error }
    ├── reducers/
    │   └── favoritesReducer.js    # useReducer logic & localStorage synchronization
    └── components/
        ├── Gallery.jsx            # Main container coordinating state, search & grid
        ├── SearchBar.jsx          # Controlled search input
        ├── PhotoCard.jsx          # Responsive card with photo, author, and heart button
        ├── LoadingSpinner.jsx     # Visual loading spinner
        └── ErrorMessage.jsx       # User-friendly error message display
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Run

1. Clone or navigate to the project root directory:
   ```bash
   cd internproject
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## 🎙️ 5-Minute Video Presentation Guide

When recording your screening video for Celebrare, you can follow this 5-minute structure:

1. **Introduction (30s)**:
   - State your name and introduce the project: a responsive Photo Gallery built for Celebrare's React Frontend Internship assignment using React, Vite, and Tailwind CSS.
2. **Architecture & Project Setup (45s)**:
   - Highlight that the project uses 100% functional components and utility-first Tailwind CSS.
   - Show the file structure: separation of concerns into custom hooks, reducers, and modular components.
3. **Data Fetching with Custom Hook `useFetchPhotos` (60s)**:
   - Walk through `src/hooks/useFetchPhotos.js`.
   - Explain how it triggers on mount with `useEffect`, calls `https://picsum.photos/v2/list?limit=30` using native `fetch`, and returns exactly `{ photos, loading, error }`.
   - Demonstrate the loading spinner and graceful error handling.
4. **Favorites State with `useReducer` and `localStorage` (75s)**:
   - Open `src/reducers/favoritesReducer.js`.
   - Explain why `useReducer` is ideal for structured state transitions: `TOGGLE_FAVORITE` handles adding or removing IDs.
   - Show how `getInitialFavorites()` acts as a lazy initializer restoring IDs from `localStorage` on page refresh.
   - Demonstrate clicking heart buttons and refreshing the page to show persistence.
5. **Real-time Search with `useCallback` & `useMemo` (60s)**:
   - Show `src/components/Gallery.jsx`.
   - Explain `useCallback` for `handleSearchChange` to prevent recreating the handler on every render.
   - Explain `useMemo` for `filteredPhotos`, which prevents recalculating the author filter unless `photos` or `searchTerm` changes, avoiding extra API requests.
6. **Responsive Grid & Conclusion (30s)**:
   - Inspect the layout across Desktop (4 cols), Tablet (2 cols), and Mobile (1 col).
   - Conclude by stating the codebase adheres strictly to all assignment requirements.
