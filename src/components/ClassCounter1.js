import React, { Component } from 'react'

class ClassCounter1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             name:''
        }
    }
    componentDidMount(){
        document.title=`Clicked ${this.state.count} times`
    } 
    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
        document.title=`Clicked ${this.state.count} times`
        console.log('updating document title')
        }
    }    
    render() {
        return (
            <div>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Clicked {this.state.count} times</button>
                <input type='text' value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>  

            </div>
        )
    }
}

export default ClassCounter1
