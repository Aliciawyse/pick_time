//  reads payload and assigns to right place.
export default function nameReducer(state = "Alicia", action) {
    // reducers must return new state
    if (action.type === "SET_NAME") {
        return action.payload
    } else {
        return state;
    }
}