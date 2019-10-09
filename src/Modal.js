import React, { Component } from "react";
import "./Modal.css";
// import connect from react-redux
import { connect } from "react-redux";
// import our action creators
import changeName from "./actionCreators/changeName";
import changeNumber from "./actionCreators/changeNumber";

class Modal extends Component {
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                {this.props.show && (
                    <div className="modal">
                        <form onSubmit={this.handleFormSubmit}>
                            <label htmlFor="location">
                                FullName
                                <input
                                    id="location"
                                    onChange={this.props.handleNameChange}
                                    value={this.props.name}
                                    placeholder="Enter full name"
                                />
                            </label>
                            <label htmlFor="location">
                                Number
                                <input
                                    id="location"
                                    onChange={this.props.handleNumberChange}
                                    value={this.props.number}
                                    placeholder="Enter phone number"
                                />
                            </label>

                            <button>Submit</button>
                        </form>
                        <h1>{this.props.name}</h1>
                        <button onClick={this.props.onHide}>Close Modal</button>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ name, number }) => ({
    name,
    number
});

const mapDispatchToProps = dispatch => ({
    // methods that dispatch actions to redux
    handleNameChange(event) {
        dispacth(changeName(event.target.value));
    },
    handleNumberChange(event) {
        dispatch(changeNumber(event.target.value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);