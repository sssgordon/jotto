import React from "react";
import PropTypes from "prop-types";

import "./GuessedWords.css";

const GuessedWords = props => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span
                data-test="guess-instructions"
                className="guessed-words__instructions"
            >
                Try to guess the secret word!
            </span>
        );
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));
        contents = (
            <div data-test="guessed-words" className="guessed-words__group">
                <h3 className="mb-3">Guessed Words</h3>
                <table className="table table-sm guessed-words__table">
                    <thead className="guessed-words__table-head">
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>{guessedWordsRows}</tbody>
                </table>
            </div>
        );
    }
    return (
        <div data-test="component-guessed-words" className="guessed-words">
            {contents}
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};

export default GuessedWords;
