import React from 'react';
import { render } from 'react-dom';

class ProfileClass extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            count:0,
        }
    }

render(){
const {count}=this.state;

return(
    <div>

    <h1>ProfileClass</h1>
    <h4>Name: {this.props.name}</h4>
<h3>Count: {count}</h3>
<button onClick={
    //we don not mutate state directly
    //never do this.state=something
    ()=>this.setState({count:count+1})}>count</button>
    </div>
    )
}
}
export  default ProfileClass;