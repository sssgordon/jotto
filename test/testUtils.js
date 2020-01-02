import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from "../src/reducers/index";

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer.
 * @function storeFactory
 * @param {object} initialState - Initial state for store.
 * @returns {Store} - Redux store.
 */
export const storeFactory = initialState => {
    return createStore(rootReducer, initialState);
};

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
    // if the proptype is conforming, the function will return undefined
    // check formatting in docs
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        "prop",
        component.name
    );
    expect(propError).toBeUndefined();
};
