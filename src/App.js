import React from "react";
import "./App.css";
import ReactDOM from 'react-dom'

function App () {
    return(
<div classname = "App">
<header>
    <h1>Victor's Todo List</h1>
</header>
</div>
    );
}

class HelloMessage extends React.Component {
    render() {
return(
    <div>
        Hello {this.props.name}
    </div>
    );
  }
}



export default App;