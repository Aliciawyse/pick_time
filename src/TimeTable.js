import React, { useEffect } from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from 'react-redux';
import availabilityRequest from './api';

export default function TimeTable() {

    const dispatch = useDispatch()
    const timeslots = useSelector(state => state.timeslots)

    useEffect(() => {

        dispatch({
            type: 'REQUEST_TIMESLOTS'
        })

        // action creator
        availabilityRequest().then(results => {
            console.log("timeslots", results)

            dispatch({
                type: 'RECEIVED_TIMESLOTS',
                timeslots: results
            })

        }).catch((error) => {
            console.log(error)
            dispatch({
                type: 'FAILED_TIMESLOTS_REQUEST'
            })
        })
    }, []);

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
                        (timeslots || []).length > 0 ? (
                            timeslots.map(slot => (
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