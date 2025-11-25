import { useState } from "react";
import "./AddFilm.css";

import ConfirmModal from "./ConfirmModal";

function AddFilm({ setFilms }) {
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [confirmConfig, setConfirmConfig] = useState({});
    const [filmTitle, setFilmTitle] = useState("");

    const openConfirm = (title, message, onConfirm) => {
        setConfirmConfig({ title, message, onConfirm });
        setConfirmOpen(true);
    };

    const handleAddFilm = () => {
        openConfirm("Добавление фильма", "", () => {
            // setFilms((prev) => prev.append({
            //     id: prev[prev.length - 1] + 1,
            //     title:

            // }));
            setConfirmOpen(false);
        });
    };

    return (
        <div>
            <button className="add-film-btn" onClick={handleAddFilm}>
                + Добавить фильм
            </button>
            <ConfirmModal
                open={confirmOpen}
                title={confirmConfig.title}
                message={confirmConfig.message}
                onConfirm={() => confirmConfig.onConfirm()}
                onCancel={() => setConfirmOpen(false)}
                setFilmTitle={setFilmTitle}
            />
        </div>
    );
}

export default AddFilm;
