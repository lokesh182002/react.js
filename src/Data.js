import React, { Component } from 'react'

export default class Data extends Component {


constructor(props) {
    super(props)

    this.state = {
         name:"Kavya "
    }
}
 render() {
     setTimeout(()=>{
         this.setState({name:"Kavya N"})
     },5000)
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
