import React, { Component } from 'react';
import {connect} from '../react-redux';
import actions from '../store/actions/counter2'

class Counter2 extends Component{
    render(){
        return <div>
            {this.props.num}<br/>
            <button onClick={this.props.add}>+</button>
            <button onClick={this.props.minus}>-</button>
        </div>
    }
}

let mapStateToProps = state=>state.counter2

export default connect(mapStateToProps,actions)(Counter2)