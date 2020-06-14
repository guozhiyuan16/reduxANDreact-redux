import React, { Component } from 'react';

// import store from '../store';
import actions from '../store/actions/counter';
import {connect} from '../react-redux';

// let boundActions = bindActionCreators(actions,store.dispatch);


class Counter extends Component{
    
    render(){
        return <div>
            {this.props.num}<br/>
            <button onClick={this.props.add}>+</button>
            <button onClick={this.props.minus}>-</button>
        </div>
    }
}
// 把状态对象映射为属性对象 1.使用起来更简单了 2。减少了无用的渲染，这个组件派发动作，只会修改某一个子状态，然后只会引发这个子状态关联的组件刷新
let mapStateToProps = state => state.counter;
// 柯理化
export default connect(mapStateToProps,actions)(Counter)