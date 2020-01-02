import { correctGuess, actionTypes } from "./index";
import { findByTestAttr } from "../../test/testUtils";

describe("correctGuess", () => {
    test("returns an action with type `CORRECT_GUESS", () => {
        // run the function
        const action = correctGuess();
        // we cannot use .toBe for mutable objects like objects and arrays
        expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
    });
});
