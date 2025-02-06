import React from 'react';
import Shadow from "./components/shadow";
import anime from "./img/Episode_23.png";
class App extends React.Component {
  clicked(){console.log('you clicked on it')}
  render() {
    return (
        <div>
          <button onClick={this.clicked}>Click Me!</button>
      <h1>App</h1>
          <Shadow link={anime} />
    </div>
    )
  }
}




export default App;
