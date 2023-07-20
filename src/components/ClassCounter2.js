import React, { Component } from 'react'

class ClassCounter2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    incrementCount=()=>{
        this.setState(prevState=>({
            count:prevState.count+1
        }))
    }
    decrementCount=()=>{
        this.setState(prevState=>({
            count:prevState.count-1
        }))
    }
    reset=()=>{
        this.setState({
            count:0
        })
    }

    incrementFive=()=>{
        for(let i=0;i<5;i++){
            this.incrementCount()
        }
         
    }
    render() {
        return (
            <div>
                Count : {this.state.count}<br/>
                <button onClick={this.incrementCount}>increment</button><br/>
                <button onClick={this.decrementCount}>decrement</button><br/>
                <button onClick={this.reset}>reset</button><br/>

                <button onClick={this.incrementFive}>incrementFive</button>
                

            </div>
        )
    }
}

export default ClassCounter2
