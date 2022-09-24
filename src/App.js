import { Routes, Route, NavLink } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="Bookstore-CMS">
      <nav className="panel-bg">
        <span className="Bookstore-CMS">Bookstore CMS</span>
        <ul className="panel-bg">
          <li>
            <NavLink className="BOOKS Text-Style-3" to="/">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink className="CATEGORIES Text-Style-3" to="/categories">
              Categories
            </NavLink>
          </li>
        </ul>
        <div className="Oval">
          <div className="Mask" />
        </div>
      </nav>
      <div className="Bookstore-CMS">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
