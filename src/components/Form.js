import React, { Component } from 'react';

function FromLocal(WarpComponent,name){
    return class extends Component{
        state= {value:''}
        componentWillMount(){
            let value = localStorage.getItem(name);
            this.setState({value});
        }
        handleChange = (event) =>{
            localStorage.setItem(name,event.target.value)
            this.setState({
                value:event.target.value
            })
        }
        render(){
            return <WarpComponent onChange={this.handleChange} value={this.state.value}/>
        }
    }
}

function FromAjax(WarpComponent){
    return class extends Component{
        state = {
            value : ''
        }
        componentWillMount(){
            let id = this.props.value;
            fetch(`/${id}.json`)
                .then(res=>res.json())
                .then(res=>{
                    this.setState({
                        value:res[id]
                    })
                })
        }
        render(){
            return (<WarpComponent value={this.state.value}/>)
        }
    }
}

class Username extends Component{
    render(){
        return <>用户名<input defaultValue={this.props.value} onChange={this.props.onChange}/></>
    }
}

class Password extends Component{
    render(){
        return <>密码<input defaultValue={this.props.value}/></>
    }
}
Username = FromAjax(Username);
Username = FromLocal(Username,'username');



Password = FromLocal(Password,'password');

export default class Form extends Component{
    render(){
        return (
            <>
            <Username/>
            <Password/>
            </>
        )
    }
}