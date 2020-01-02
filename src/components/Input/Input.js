import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "../../actions/index";

// the unconnected class allows us to pass guessWordMock fn as prop rather than from connect, so the real fn doesn't have to run for every test
export class UnconnectedInput extends Component {
    state = {
        currentGuess: null
    };
    render() {
        const submitGuessedWord = evt => {
            evt.preventDefault();
            const guessedWord = this.state.currentGuess;

            if (guessedWord && guessedWord.length > 0) {
                this.props.guessWord(guessedWord);
                this.setState({ currentGuess: "" });
            }
        };

        const contents = this.props.success ? null : (
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="Enter guess"
                    value={this.state.currentGuess}
                    onChange={evt =>
                        this.setState({ currentGuess: evt.target.value })
                    }
                />
                <button
                    data-test="submit-button"
                    type="submit"
                    className="btn btn-primary mb-2"
                    onClick={submitGuessedWord}
                >
                    Submit
                </button>
            </form>
        );
        return <div data-test="component-input">{contents}</div>;
    }
}

const mapStateToProps = state => {
    return { success: state.success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
