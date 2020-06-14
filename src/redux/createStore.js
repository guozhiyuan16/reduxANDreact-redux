export default function createStore(reducer){
    let state;
    let listeners = [];
    let getState = () => {
        return state;
    }
    let dispatch = (action)=>{
        state = reducer(state,action);
        listeners.forEach(fn=>fn());
    }
    dispatch({type:'@@@@'})
    let subscribe = (fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners.filter(item=>item!=fn)
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}