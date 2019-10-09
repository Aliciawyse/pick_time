import React, { Component } from "react";
import "./Modal.css";
import { connect } from "react-redux";
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
                                    onChange={""}
                                    value={""}
                                    placeholder="Enter full name"
                                />
                            </label>
                            <label htmlFor="location">
                                Number
                                <input
                                    id="location"
                                    onChange={""}
                                    value={""}
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

export default connect(mapStateToProps)(Modal);