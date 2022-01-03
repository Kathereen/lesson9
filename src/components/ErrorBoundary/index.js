import React from 'react';

export default class ErrorBoundary extends React.Component{

    constructor (){
        super();
        this.state = {
            isError: false
        }
    }
    static getDerivedStateFromError(error){
        return {isError: true}
    }

    // componentDidCatch(){
    //     console.log ("mistake");
    //     this.setState({isError: true})
    // }

    render(){
        if(this.state.isError){
            return <h2>something went wrong</h2>
        }
        return this.props.children
    }
}