import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "../../actions/index";

// the unconnected class allows us to pass guessWordMock fn as prop rather than from connect, so the real fn doesn't have to run for every test
export class UnconnectedInput extends Component {
    render() {
        const contents = this.props.success ? null : (
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="Enter guess"
                />
                <button
                    data-test="submit-button"
                    type="submit"
                    className="btn btn-primary mb-2"
                    onClick={() => this.props.guessWord("train")}
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
