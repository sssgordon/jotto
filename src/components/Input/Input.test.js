import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import Input from "./Input";

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */

// connected component (to redux store) => need to create a store for each test and pass it as props
// storeFactory in testUtils
const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />);
    return wrapper;
};

// categories
describe("render", () => {
    // contexts
    describe("word has not been guessed", () => {
        test("renders component without error", () => {});
        test("renders input box", () => {});
        test("renders submit button", () => {});
    });

    describe("word has been guessed", () => {
        test("renders component without error", () => {});
        test("does not renders input box", () => {});
        test("does not renders submit button", () => {});
    });
});

describe("update state", () => {});
