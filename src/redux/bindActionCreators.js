
function bindActionCreator(action,dispatch){
    return ()=>dispatch(action(this,arguments))
}

export default function bindActionCreators(action,dispatch){
    if(typeof action ==="function"){
        return bindActionCreator(action,dispatch)
    }
    const boundActionCreators = {};
    for (const key in action) {
        const actionCreator = action[key]
        if (typeof actionCreator === 'function') {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch)
        }
    }
    return boundActionCreators
}
