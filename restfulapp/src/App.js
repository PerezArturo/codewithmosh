import React, {Component} from 'react';
import './App.css';
import Jokes from "./components/jokes";

class App extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        fetch('https://api.punkapi.com/v2/beers/random')
            .then(res => res.json())
            .then((data) => {
                this.setState({contacts: data})
            })
            .catch(console.log)
    }

    render() {
        return (
            <React.Fragment>
                <Jokes contacts={this.state.contacts}/>
            </React.Fragment>

        );
    }
}

export default App;
