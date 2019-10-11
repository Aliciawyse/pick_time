const initialState = { timelots: [] }

const timeslot = (state = initialState, action) => {
    switch (action.type) {
        // represeting the action of me requesting
        // all timeslots from server
        case 'REQUEST_TIMESLOTS':
            return {
                ...state,
                loading: true
            }
        // respresenting the action of the data
        //  being fulfilled
        case 'RECEIVED_TIMESLOTS':
            return {
                ...state,
                timeslots: action.timeslots,
                loading: false
            }
        case 'UPDATE_TIMESLOT':
            return {
                ...state,
                name: action.name,
                phone_number: action.number
            }
        case 'SELECTED_TIMESLOT':
            return {
                ...state,
                selectedTimeSlot: action.timeslot
            }
        //  representing a scenario where we didn't
        //  get any data back
        case 'FAILED_TIMESLOTS_REQUEST':
            return {
                ...state,
                timeslots: [],
                loading: false,
                error: "Sorry, not able to get timeslot."
            }
        default:
            return state
    }
}

export default timeslot