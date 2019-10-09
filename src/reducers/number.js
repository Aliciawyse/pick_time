//  reads payload and assigns to right place.
export default function numberReducer(state = "999-999-9999", action) {
    // reducers must return new state
    if (action.type === "SET_NUMBER") {
        return action.payload
    } else {
        return state;
    }
}