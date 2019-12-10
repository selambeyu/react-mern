import React, {Component}  from 'react'

class Profle extends Component{
    constructor(props){
        super(props);
        this.state={
            apiResponse:""
        }
        
    }
    callApi(){
        fetch("http://localhost:8080/users/test").then(res=>res.text()).then(res=>res.setState({apiResponse:res}))
    }
    componentDidMount(){
        this.callApi();
    }
    render(){
        return(
            
<div className="container">
    This is profile Page
        <p>{this.state.apiResponse}</p>
</div>
        )
    }
}

export default Profle;