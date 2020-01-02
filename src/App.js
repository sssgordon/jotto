import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import GuessedWords from "./components/GuessedWords/GuessedWords";
import Congrats from "./components/Congrats/Congrats";
import { getSecretWord } from "./actions/index";
import Input from "./components/Input/Input";

// export
// UnconnectedApp for tests
// below still export default connected App
// change import in the App.test.js file
export class UnconnectedApp extends Component {
    /**
     * @method componentDIdMount
     * @returns {undefined}
     */
    componentDidMount() {
        // get the secret word
        this.props.getSecretWord();
    }
    render() {
        return (
            <div className="container app mt-4">
                <h1 className="mb-4">Jotto.</h1>
                {/* <div>The secret word is {this.props.secretWord}</div> */}
                <Congrats success={this.props.success} />
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    const { success, guessedWords, secretWord } = state;
    return {
        success,
        guessedWords,
        secretWord
    };
};
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
