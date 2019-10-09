import React from "react";
import Modal from "./Modal";
import { connect } from "react-redux";

class TimeTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: 0,
            availabilityData: [
                { id: 1, time: "9:00am - 10:00am", name: '', phone_number: '' },
                { id: 2, time: "10:00am - 11:00am", name: '', phone_number: '' },
                { id: 3, time: "11:00am - 12:00am", name: '', phone_number: '' },
                { id: 4, time: "12:00pm - 1:00pm", name: '', phone_number: '' },
                { id: 5, time: "1:00pm - 2:00pm", name: '', phone_number: '' },
                { id: 6, time: "2:00pm - 3:00pm", name: '', phone_number: '' },
                { id: 7, time: "3:00pm - 4:00pm", name: '', phone_number: '' },
                { id: 8, time: "4:00pm - 5:00pm", name: '', phone_number: '' }
            ]
        }
    }

    getModal = value => {
        this.setState({ showModal: value });
    };

    hideModal = value => {
        this.setState({ showModal: 0 });
    };

    render() {

        console.log("did redux work", this.props.name)

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Phone number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.availabilityData.length > 0 ? (
                                this.state.availabilityData.map(slot => (
                                    <tr key={slot.id}>
                                        <td>{slot.time}</td>
                                        <td>{slot.name}</td>
                                        <td>{slot.phone_number}</td>
                                        <td>
                                            <button onClick={() => this.getModal(slot.id)}>Edit</button>
                                        </td>
                                        {
                                            this.state.showModal ? (
                                                <Modal
                                                    show={this.state.showModal === slot.id}
                                                    onHide={() => this.hideModal(slot.id)}

                                                />
                                            ) : null
                                        }
                                    </tr>
                                ))
                            ) : (
                                    <tr>
                                        <td>No time slots.</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>);
    }
}

const mapStateToProps = ({ name }) => ({
    name
});

export default connect(mapStateToProps)(TimeTable);
