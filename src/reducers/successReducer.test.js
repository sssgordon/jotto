import { actionTypes } from "../actions/index";
import successReducer from "./successReducer";
import { findByTestAttr } from "../../test/testUtils";

test("returns default initial state of `false` when no action is passed", () => {
    // must pass in a state and empty object even if no action is passed
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

test("returns state of true upon receiving an action of type `CORRECT_GUESS`", () => {
    // undefined is the initial state, b/c we haven't specified a default state in the reducer
    const newState = successReducer(undefined, {
        type: actionTypes.CORRECT_GUESS
    });
    expect(newState).toBe(true);
});
