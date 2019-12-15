import React, { Component } from 'react'; // import from react

import { AppRegistry, Window, App } from 'proton-native'; // import the proton-native components

class Example extends Component {
    render() {
        // all Components must have a render method
        return (
            <App>
                // you must always include App around everything
                <Window style={{ width: 300, height: 300 }}>
                    {/* all your other components go here*/}
                </Window>
            </App>
        );
    }
}

AppRegistry.registerComponent('example', <Example />); // and finally render your main component
