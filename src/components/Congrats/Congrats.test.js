import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../test/testUtils";

import Congrats from "./Congrats";

// Enzyme configuration is now in the setupTests.js

// if defaultProps is changed, check all tests
const defaultProps = { success: false };

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props sepcific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    // take defaultProps but allow overriding with argument props
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.length).toBe(1);
});

test("renders no text when `success` prop is false", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, "component-congrats");
    expect(component.text()).toBe("");
});

test("rederes non-empty congrats message when 'success' prop is true", () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);
});

// PropTypes Testing
test("does not throw warning with expected props", () => {
    const expectedProps = { success: false };
    // if the proptype is expected, the function will return undefined
    checkProps(Congrats, expectedProps);
});
