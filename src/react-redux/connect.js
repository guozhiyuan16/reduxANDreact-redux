import React from 'react';
import reactReduxContext from './context';
import {bindActionCreators} from '../redux';
/**
 * 此方法负责把组件和仓库进行关联，或者说进行连接
 * @param {*} WarpComponent 
 */
export default function(mapStateToProps,actions){
    return function(WarpComponent){
        return class extends React.Component{
            static contextType = reactReduxContext;
            constructor(props,context){
                super(props)
                // {counter1:{number:0},counter2:{number:0}}
                this.state = mapStateToProps(context.store.getState());
            }
            componentDidMount(){
                this.unsubscribe = this.context.store.subscribe(()=>{
                    this.setState(mapStateToProps(this.context.store.getState()))
                })
            }
            componentWillUnmount(){
                this.unsubscribe();
            }
            render(){
                let boundActions = bindActionCreators(actions,this.context.store.dispatch)
                return <WarpComponent {...this.state} {...boundActions}/>
            }
        }
    }
}