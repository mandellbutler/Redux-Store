//Create Store from redux
import { createStore } from 'redux';

//create reducer
import reducer from './reducer'

//make reducer available for use
export default createStore(reducer);


