// the master reducer doesnt manage any state on it own, it manages all the reducers which manage state on an 
// individual level, the master reducer manages the reducers.  Export all reducers as an object using the 
// "combineReducers" and each property we export will be available as a state property.
// first we need to combineReducers from redux.
import {combineReducers} from 'redux';
import studentReducer from './studentReducer'



const rootReducer = combineReducers({
	students: studentReducer
})









export default rootReducer;