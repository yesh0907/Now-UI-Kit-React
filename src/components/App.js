require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import Button from './lib/Button';

class App extends React.Component {
    scream() {
        console.log("Hello!");
    }

    render() {
        return (
            <div className="App">
                <Button onClick={this.scream.bind(this)}>Hello World</Button>
                <Button color="primary">Sup!</Button>
                <Button color="info" type="round-icon" size="lg">
                    <i className="now-ui-icons ui-2_favourite-28"></i> Yo!
                </Button>
                <Button color="warning" size="sm" type="icon">
                    <i className="now-ui-icons ui-2_favourite-28"></i>
                </Button>
            </div>
        );
    }
}

export default App;
