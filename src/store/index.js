import {createStore} from '../redux';
import counter from './reducers/counter';
import counter2 from './reducers/counter2';



function combineReducers(reducers){
    return function(state={},action){
        for(let key in reducers){
            state[key] = reducers[key](state[key],action)
        }
        return state
    }
}

let reducer = combineReducers({counter,counter2})

let store = createStore(reducer);

export default store;
