import React from 'react';
import Shadow from "./components/shadow";
import anime from "./img/Episode_23.png";
import './styles/main.css'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.clickInput = this.clickInput.bind(this);
        this.state = {
            userData: '',
            placeHolder: ''
        }
    }
  render() {
    return (
        <div>
            <h2>{this.state.userData}</h2>
            <input type='text' onChange={event => this.setState({ userData: event.target.value })}/>
          <button onClick={this.clicked}>Click Me!</button>
      <h1>App</h1>
          <Shadow link={anime} />
    </div>
    )
  }
    clickInput(){this.setState({placeHolder: ''})}
    clicked(){console.log('you clicked on it')}
}




export default App;
