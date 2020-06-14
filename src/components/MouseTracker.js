import React, {Component} from 'react'

class MouseTracker extends Component {
    constructor(props){
        super(props);
        this.state = {
            x:0,
            y:0
        }
    }
    
    handleMouseMove = (event) =>{
        this.setState({
            x:event.clientX,
            y:event.clientY
        })
    }
    render() {
        return ( <div onMouseMove={this.handleMouseMove} style={{border:'1px solid black'}}>
                {this.props.render(this.state)}
            </div>)
        }
}

function withMouseTracker(WarpComponent){
    
    return (props=> 
        <MouseTracker render={(mouse)=>{
            return <WarpComponent {...mouse} {...props}/>
        }} />
    )
}




class Tracker extends Component{
    render(){
        return (<>
            <h3>现在可以移动了{this.props.number}</h3>
            <p>{`您鼠标所在位置是x:${this.props.x}y:${this.props.y}`}</p>
        </>)
    }
}



export default withMouseTracker(Tracker)

// 这个默认导出的就死withMouseTracker执行的返回值，如果引入组件的地方需要给这个组件传递属性，withMouseTracker需要向下传递