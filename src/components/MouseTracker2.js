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
    let render = this.props.children?this.props.children:this.props.render;
    return ( <div onMouseMove={this.handleMouseMove} style={{border:'1px solid black'}}>
        {render(this.state)}
        </div>)
    }
}


export default MouseTracker