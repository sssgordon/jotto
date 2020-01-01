import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../test/testUtils";
import GuessedWords from "./GuessedWords";

// some tests will require props, so by setting a default prop this will not throw errors
// the default prop can be anything as long as it fits the proptype
const defaultProps = {
    guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};
/**
 * Factory function ot create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
    // this allows the argument props to override default props
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
    // if this does not pass, we will have to check all the code for passing the proper props
    checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test("renders without error", () => {
        const component = findByTestAttr(wrapper, "component-guessed-words");
        expect(component.length).toBe(1);
    });
    test("renders instructions to guess a word", () => {
        const instructions = findByTestAttr(wrapper, "guess-instructions");
        expect(instructions.text().length).not.toBe(0);
    });
});

describe("if there are words guessed", () => {});
