import { useState } from "react";
import "./App.css";

import FilmCard from "./components/FilmCard";
import AddFilm from "./components/AddFilm";

function App() {
    const initialFilms = [
        {
            id: 1,
            title: "Гарри Поттер",
            status: "want-to-watch",
        },
        {
            id: 2,
            title: "Матрица",
            status: "watched",
        },
        {
            id: 3,
            title: "Винкс Фильм",
            status: "watched",
        },
        {
            id: 4,
            title: "Матрица 2",
            status: "want-to-watch",
        },
        {
            id: 5,
            title: "Губка Боб Фильм: На дне моря",
            status: "want-to-watch",
        },
        {
            id: 6,
            title: "Клинок рассекающий демонов: бесконечный поезд",
            status: "want-to-watch",
        },
    ];
    const [films, setFilms] = useState(initialFilms);

    return (
        <div className="app">
            <FilmCard films={films} setFilms={setFilms} />
            <AddFilm setFilms={setFilms} />
        </div>
    );
}

export default App;
