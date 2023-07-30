import { BrowserRouter, Routes, Route } from 'react-router-dom'

// page components
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import Create from './pages/create/Create';
import Search from './pages/search/Search'
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

//styles
import './App.css';



function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />


        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
