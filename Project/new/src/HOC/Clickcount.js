 import React, { Component } from 'react'

export default class Clickcount extends Component {
  constructor(props) {
    super(props)
    this.state={count:0}
  }
  render() {
    return (
      <button onClick={()=>this.setState({count:this.state.count+1})}> enaya vitru{this.state.count}</button>
      <button Mouseover={()=>this.setState({count:this.state.count+1})}> enaya vitru{this.state.count}</button>
    )
  }
}