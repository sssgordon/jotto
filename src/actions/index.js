import axios from "axios";

import { getLetterMatchCount } from "../helpers/index";

export const actionTypes = {
    CORRECT_GUESS: "CORRECT_GUESS",
    GUESS_WORD: "GUESS_WORD",
    SET_SECRET_WORD: "SET_SECRET_WORD"
};

/**
 * Returns Redux Thunk function that dispatches GUESS_WORD action
 *  and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed word.
 * @returns {function} - REdux Thunk function
 */

export const guessWord = guessedWord => (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
        type: actionTypes.GUESS_WORD,
        payload: { guessedWord, letterMatchCount }
    });

    if (guessedWord === secretWord) {
        dispatch({ type: actionTypes.CORRECT_GUESS });
    }
};

export const getSecretWord = () => dispatch => {
    return axios
        .get("http://powerful-dawn-69747.herokuapp.com")
        .then(response =>
            dispatch({
                type: actionTypes.SET_SECRET_WORD,
                // response.data is hwere axios puts data
                payload: response.data
            })
        );
};
