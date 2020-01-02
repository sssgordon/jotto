import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../../../test/testUtils";
import Input, { UnconnectedInput } from "./Input";

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */

// connected component (to redux store) => need to create a store for each test and pass it as props
// storeFactory in testUtils
const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />)
        .dive()
        .dive();
    // console.log(wrapper.degug()) to see whether we're testing the right level with connect
    return wrapper;
};

// categories
describe("render", () => {
    let wrapper;
    beforeEach(() => {
        const initialState = { success: false };
        wrapper = setup(initialState);
    });
    // contexts
    describe("word has not been guessed", () => {
        test("renders component without error", () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });
        test("renders input box", () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });
        test("renders submit button", () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(1);
        });
    });

    describe("word has been guessed", () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        });
        test("renders component without error", () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });
        test("does not renders input box", () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(0);
        });
        test("does not renders submit button", () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(0);
        });
    });
});

describe("redux props", () => {
    test("has success piece of state as prop", () => {
        // test whether the input component gets the success prop from the state using connect
        // simulate an initial redux state for the virtual DOM
        const success = true;
        const wrapper = setup({ success });
        // .instance returns a commponent so we get its props
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    });
    test("`guessWord` action creator is a function prop", () => {
        // this tests action creator passed as props using connect
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        // check its data type
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});

describe("`guessWord` action creator call", () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = "train";

    beforeEach(() => {
        // set up mock for 'guessWord'
        guessWordMock = jest.fn();
        const props = {
            guessWord: guessWordMock
        };

        // set up Input, with guessWordMock as a prop
        wrapper = shallow(<UnconnectedInput {...props} />);

        // add value to input box
        // .setState is local state; setup(initialState) is redux state
        wrapper.setState({ currentGuess: guessedWord });

        // simulate click on submit button
        const submitButton = findByTestAttr(wrapper, "submit-button");
        // for event.preventDefault()
        submitButton.simulate("click", { preventDefault() {} });
    });

    test("`guessWord` runs on submit button click", () => {
        const guessWordCallCount = guessWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    });

    test("calls `guessWord` with input value as argument", () => {
        // guessWordMock.mock.calls returns an array of array which contains the arg(s)
        // console.log(guessWordMock.mock.calls);
        // [[ 'train' ]]
        const guessWordArg = guessWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    });

    test("input box clears on submit", () => {
        // test the input box value is "" on sumbit
        // use wrapper.state('key')
        expect(wrapper.state("currentGuess")).toBe("");
    });
});
