import moxios from "moxios";

import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./index";

describe("getSecretWord action creator", () => {
    beforeEach(() => {
        // this makes axios to send request to moxios rather than http
        moxios.install();
    });
    afterEach(() => {
        // this uninstalls moxios after every test, returning to axios default
        moxios.uninstall();
    });

    test("adds response word to state", () => {
        const secretWord = "party";
        const store = storeFactory();

        // sets the response when axios sends a request
        moxios.wait(() => {
            // get the most recent request
            const request = moxios.requests.mostRecent();
            // we will be receiving a secret word from the server
            request.respondWith({
                status: 200,
                response: secretWord
            });
        });

        // we're RETURNING a promise b/c we need to make sure the test is completed with that promise returned
        return store.dispatch(getSecretWord()).then(() => {
            const newState = store.getState();
            expect(newState.secretWord).toBe(secretWord);
        });
    });
});
