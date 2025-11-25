import React from "react";
import "./ConfirmModal.css";
import Button from "./Button";

function ConfirmModal({
    open,
    title,
    message,
    onConfirm,
    onCancel,
    setFilmTitle,
    filmTitle = "",
}) {
    if (!open) return null;

    const handleInputChange = (e) => {
        if (setFilmTitle) {
            setFilmTitle(e.target.value);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && filmTitle.trim()) {
            onConfirm();
        }
    };

    return (
        <div
            className="confirm-modal__backdrop"
            role="dialog"
            aria-modal="true"
        >
            <div className="confirm-modal">
                {title && <h3 className="confirm-modal__title">{title}</h3>}
                <div className="confirm-modal__body">
                    {message}
                    <div className="confirm-modal__input-group">
                        <label
                            htmlFor="film-title-input"
                            className="confirm-modal__label"
                        >
                            Название фильма:
                        </label>
                        <input
                            id="film-title-input"
                            type="text"
                            value={filmTitle}
                            placeholder="Введите название фильма"
                            className="confirm-modal__input"
                            autoFocus
                        />
                    </div>
                </div>
                <div className="confirm-modal__actions">
                    <Button onClick={onCancel}>Отмена</Button>
                    <Button
                        variant="danger"
                        onClick={onConfirm}
                        disabled={!filmTitle.trim()} // Блокируем кнопку если input пустой
                    >
                        Подтвердить
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;
