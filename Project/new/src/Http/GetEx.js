import React, { Component } from 'react'
import axios from 'axios';

export default class GetEx extends Component {
    constructor(props) {
      super(props)
      this.state = {
         post:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res=>console.log(res)))
    }
  render() {
    return (
      <div>GetEx</div>
    )
  }
}
