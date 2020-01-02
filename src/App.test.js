import React from "react";
import { shallow } from "enzyme";

import { storeFactory } from "../test/testUtils";
// import connected as default and unconnected as destructured for testing
import App, { UnconnectedApp } from "./App";

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store={store} />)
        .dive()
        .dive();
    return wrapper;
};

describe("redux props", () => {
    test("has access to `success` state", () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    test("has access to `guessedWords` state", () => {
        const guessedWords = [{ guessedWord: "train", letterMatchCount: 3 }];
        const wrapper = setup({ guessedWords });
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect(guessedWordsProp).toBe(guessedWords);
    });
    test("has access to `secretWord` state", () => {
        const secretWord = "party";
        const wrapper = setup({ secretWord });
        const secretWordProp = wrapper.instance().props.secretWord;
        expect(secretWordProp).toBe(secretWord);
    });
    test("`getSecretWord` action creator is a function prop", () => {
        const wrapper = setup();
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function);
    });
});

test("`getSecretWord` runs on App mount", () => {
    // create mock function
    // we only need to know if it is called on mount, so we don't need the real function that is received from connect
    const getSecretWordMock = jest.fn();

    const props = {
        getSecretWord: getSecretWordMock,
        success: false,
        guessedWords: []
    };

    // set up app component with getSecretWordMock as the getSecretWord prop
    const wrapper = shallow(<UnconnectedApp {...props} />);

    // run lifecycle method
    // go to setupTests.js and disable lifecycle methods in config
    wrapper.instance().componentDidMount();

    // check to see if our mock ran
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

    expect(getSecretWordCallCount).toBe(1);
});
