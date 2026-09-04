import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi possível carregar os livros.");
        }

        return response.json();
      })
      .then((data) => {
        setLivros(data);
      })
      .catch((error) => {
        console.error(error);
        setErro("Não foi possível carregar os livros.");
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  return (
    <div className="home">

      {/* NAVBAR */}
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
              <Link to="/books">Livros</Link>
            </li>

            <li>
              <Link to="/add-book" className="nav-button">
                Adicionar Livro
              </Link>
            </li>
          </ul>

        </div>
      </nav>


      {/* HERO */}
      <main>

        <section className="hero">

          <div className="hero-content">

            <span className="hero-tag">
              ✦ Explore novos mundos
            </span>

            <h1>
              Cada livro é uma
              <span> nova história.</span>
            </h1>

            <p>
              Explore nossa biblioteca, descubra novos títulos
              e gerencie seus livros através de uma experiência
              simples, moderna e intuitiva.
            </p>

            <div className="hero-buttons">

              <Link to="/books" className="btn-primary">
                Explorar livros →
              </Link>

              <Link to="/add-book" className="btn-secondary">
                Adicionar livro
              </Link>

            </div>

          </div>

          <div className="hero-decoration">
            <div className="book-icon">
              📖
            </div>
          </div>

        </section>


        {/* LIVROS DA API */}
        <section className="books-section">

          <div className="section-header">

            <div>
              <span className="section-tag">
                NOSSA COLEÇÃO
              </span>

              <h2>
                Livros em destaque
              </h2>
            </div>

            <Link to="/books" className="view-all">
              Ver todos →
            </Link>

          </div>


          {/* CARREGANDO */}
          {carregando && (
            <p>Carregando livros...</p>
          )}


          {/* ERRO */}
          {erro && (
            <p>{erro}</p>
          )}


          {/* LIVROS */}
          {!carregando && !erro && (

            <div className="books-grid">

              {livros.length > 0 ? (

                livros.slice(0, 3).map((livro) => (

                  <article
                    className="book-card"
                    key={livro.id}
                  >

                    <div className="book-cover">
                      <span>📖</span>
                    </div>

                    <div className="book-info">

                      <span className="book-category">
                        {livro.year || "Sem ano"}
                      </span>

                      <h3>
                        {livro.title}
                      </h3>

                      <p className="book-author">
                        {livro.author}
                      </p>

                      <p className="book-description">
                        {livro.description ||
                          "Nenhuma descrição disponível."}
                      </p>

                      <Link
                        to={`/books/${livro.id}`}
                        className="book-link"
                      >
                        Ver livro →
                      </Link>

                    </div>

                  </article>

                ))

              ) : (

                <p>
                  Nenhum livro cadastrado.
                </p>

              )}

            </div>

          )}

        </section>


        {/* FUNCIONALIDADES */}
        <section className="features">

          <div className="feature">

            <div className="feature-icon">
              📚
            </div>

            <h3>
              Explore
            </h3>

            <p>
              Encontre e conheça os livros disponíveis
              em nossa biblioteca.
            </p>

          </div>


          <div className="feature">

            <div className="feature-icon">
              ✚
            </div>

            <h3>
              Adicione
            </h3>

            <p>
              Cadastre novos livros de forma rápida
              e simples.
            </p>

          </div>


          <div className="feature">

            <div className="feature-icon">
              ⚙
            </div>

            <h3>
              Gerencie
            </h3>

            <p>
              Atualize ou remova livros diretamente
              pelo sistema.
            </p>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>
        <p>
          © 2026 Livraria API — Uma biblioteca para novas histórias.
        </p>
      </footer>

    </div>
  );
}

export default Home;