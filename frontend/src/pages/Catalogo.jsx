import { useState, useEffect } from "react";
import "../styles/catalogo.css";

function Catalogo() {
    const [livros, setLivros] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");


    const toggleFavorite = async (livro) => {
    try {
        const newBookState = !livro.isFavorite;

        const response = await fetch(
            `http://localhost:5000/books/${livro.id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    isFavorite: newBookState,
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Não foi possível atualizar o favorito.");
        }

        // Atualiza somente o livro alterado na tela
        setLivros((livrosAtuais) =>
            livrosAtuais.map((item) =>
                item.id === livro.id
                    ? { ...item, isFavorite: newBookState }
                    : item
            )
        );

    } catch (error) {
        console.error(error);
    }
};

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
        <div className="bookcase">
            <header className="bookcase-header">
            
                <div>
                    <span className="bookcase-label">
                        CATÁLOGO
                    </span>

                    <h1>Minha Biblioteca</h1>

                    <p>
                        Explore nossa coleção e descubra sua próxima leitura.
                    </p>
                </div>

                <div className="book-count">
                    <strong>{livros.length}</strong>
                    <span>livros</span>
                </div>
            </header>


            {/* ESTADOS */}

            {carregando && (
                <div className="message">
                    <div className="loader"></div>
                    <p>Carregando livros...</p>
                </div>
            )}

            {erro && (
                <div className="message error">
                    <span>⚠</span>
                    <p>{erro}</p>
                </div>
            )}


            {/* CATÁLOGO */}

            {!carregando && !erro && (
                <>
                    {livros.length === 0 ? (
                        <div className="empty">
                            <span>📚</span>

                            <h2>Nenhum livro encontrado</h2>

                            <p>
                                Sua biblioteca ainda não possui livros cadastrados.
                            </p>
                        </div>
                    ) : (
                        <section className="book-list">

                            {livros.map((livro) => (
                                <article
                                    key={livro.id}
                                    className="book-item"
                                >

                                    {/* CAPA */}

                                    <div className="book-cover">

                                        <div className="book-cover-content">
                                            <span className="cover-title">
                                                {livro.title}
                                            </span>

                                            <span className="cover-author">
                                                {livro.author}
                                            </span>
                                        </div>

                                    </div>


                                    {/* INFORMAÇÕES */}

                                    <div className="book-info">

                                        <div className="book-top">

                                            <span className="book-year">
                                                {livro.year || "Ano não informado"}
                                            </span>

                                                <button
                                                    className={`favorite ${livro.isFavorite ? "active" : ""}`}
                                                    onClick={() => toggleFavorite(livro)}
                                                    aria-label={
                                                        livro.isFavorite
                                                            ? "Remover dos favoritos"
                                                            : "Adicionar aos favoritos"
                                                    }
                                                >
                                                    <span>♥</span>
                                                </button>
                                                

                                        </div>

                                        <h2 className="book-title">
                                            {livro.title}
                                        </h2>

                                        <p className="book-author">
                                            {livro.author}
                                        </p>

                                        <p className="book-description">
                                            {livro.description ||
                                                "Nenhuma descrição disponível para este livro."}
                                        </p>


                                        {/* STATUS */}

                                        <div className="book-status">

                                            {livro.isFinished ? (
                                                <span className="status finished">
                                                    ✓ Concluído
                                                </span>
                                            ) : livro.isRead ? (
                                                <span className="status reading">
                                                    ● Lido
                                                </span>
                                            ) : (
                                                <span className="status unread">
                                                    ○ Não lido
                                                </span>
                                            )}

                                        </div>

                                    </div>

                                </article>
                            ))}

                        </section>
                    )}
                </>
            )}

        </div>
    );
}

export default Catalogo;