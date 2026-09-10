  import { Link } from "react-router-dom";
  import "../styles/global.css";

  
  function NavBar() {
    return (
  
  <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo">
            <span>📚</span>
            Livraria API
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/catalogo">Livros</Link>
            </li>

            <li>
              <Link to="/bookcase" className="nav-button">
                Bookcase
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    )
}

export default NavBar