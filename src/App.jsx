import React from 'react';
// Import Router components
import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link 
} from 'react-router-dom';

// Import pages and components
import MovieDetailPage from './pages/Details';
import MovieListPage from './pages/MovieListPage'; 


// 💡 Ensure you import the Bootstrap CSS in your entry file (e.g., src/main.jsx)
// import 'bootstrap/dist/css/bootstrap.min.css';

// -------------------------------------------------------------------------
// IMPORTANT: This component uses a placeholder for the MovieListPage.jsx.
// In a real app, you would create MovieListPage.jsx to contain the PostList component.
// For simplicity, I'll define a basic list component here, but keep the file path separate 
// for better structure.
// -------------------------------------------------------------------------

// Defining a placeholder component for the main list view for clarity
// const AnimationListPage = () => (
//     <div className="container-fluid p-4 bg-gray-900 min-h-screen">
//         <h1 className="text-white mb-4 border-bottom pb-2">Top Animation Movies</h1>
//         {/* PostList would be imported and placed here */}
//         <MovieListPage /> 
//     </div>
// );



const App = () => {

    return (
        
      
            <div >
                {/* 💡 Routes define which component to render based on the URL */}
                <Routes>
                    {/* Route for the main movie list */}
                    <Route path="/" element={<MovieListPage />} />
                    
                    {/* 💡 Route for the detail page. 
                       :movieId is a dynamic parameter read by useParams() */}
                    <Route path="/movie/:movieId" element={<MovieDetailPage />} />
                    
                    {/* Optional: 404 Page */}
                    <Route path="*" element={<div className="text-white text-center mt-5">404 Not Found</div>} />
                </Routes>
            </div>
      
    );
};

export default App;
