import { combineReducers } from 'redux';
import name from './name';
import number from './number';
// helper function from redux
// what is a reducer? a function that takes in
// old state, an action object and new state
// it's also a pure function
export default combineReducers({
    name,
    number
})