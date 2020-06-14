import * as types from '../action-types';
let initState = {num:0}
export default function counter(state=initState,action){
    switch (action.type){
        case types.ADD2:
            return {num:state.num+1}
        case types.MINUS2:
            return {num:state.num-1}    
        default:
            return state
    }
}