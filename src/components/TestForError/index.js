import React from 'react';

export default class TestForError extends React.Component{

    state = {
        count: 0
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicrgrgode.com/todos')
        .then(response => response.json())
        .then( data => console.log(data))
        .catch( console.log)
    }

    render(){
        if(this.state.count === 5){
            throw new Error ('Error!!!Error')
        }
        return(
            <div>
                Test For Error
              <h3>{this.state.count} </h3>
              <button onClick={()=> this.setState({count: this.state.count + 1})}>Click me</button>    
            </div>
        )
    }
}