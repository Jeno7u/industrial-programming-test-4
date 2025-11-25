import "./FilmCard.css";

function FilmCard({ films, setFilms }) {
    const nextStatus = (current) => {
        const order = ["want-to-watch", "watched"];
        const idx = order.indexOf(current);
        return order[(idx + 1) % order.length];
    };

    const onToggleStatus = (id) => {
        setFilms((prev) => {
            return prev.map((film) =>
                film.id === id
                    ? { ...film, status: nextStatus(film.status) }
                    : film
            );
        });
    };

    const convertStatusToRussian = (status) => {
        const translation = {
            "want-to-watch": "хочу посмотреть",
            watched: "посмотрено",
        };
        return translation[status];
    };
    return (
        <div className="films">
            <h2>Список фильмов для просмотра:</h2>
            <div className="film-card">
                <ul>
                    {films.map((film) => (
                        <li
                            key={film.id}
                            className={`film-card film-card--${film.status}`}
                            role="button"
                            onClick={() => onToggleStatus(film.id)}
                        >
                            <div className="film-card__title">
                                <h1>{film.title}</h1>
                            </div>
                            <div
                                className={`film-card__status status-${film.status}`}
                            >
                                <p>{convertStatusToRussian(film.status)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FilmCard;
