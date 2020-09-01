import React from "react";
import "./style.css";

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      animals:[]
    }
  }

  pushAnimal = () =>{
    let animal = prompt('Enter Animal? ');
    let animalsArray = this.state.animals.slice();
    animalsArray.push(animal);
    this.setState({
      animals:animalsArray
    });
  }

  popAnimal = () =>{
    let animalsArray = this.state.animals.slice();
    animalsArray.pop();
    this.setState({
      animals:animalsArray
    });
  }
  

  render(){
    return(
      <div>
        <button onClick={ this.pushAnimal }>Add</button>
        <button onClick={ this.popAnimal }>Remove</button>
        <p>Animals</p>
        <ul>
          { this.state.animals.map((animal) =>{ return <li key={animal.id}>{animal}</li> }) }
        </ul>
      </div>
    );
  }

}

export default App;