
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import RecommendationsList from './components/RecommendationsList';
import FavoritesList from './components/FavoritesList';

function App() {
  return (
    <Router>
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar />
      <RecommendationsList />
      <FavoritesList />
      <Routes>
      <Route path = "/" element = {
          <RecipeList />
      } />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;