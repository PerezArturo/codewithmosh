import React, {Component} from 'react';
import './App.css';
import Questions from "./components/tacos";

class App extends Component{
    state = {
        questions: []
    }

    componentDidMount() {
        fetch('http://jservice.io/api/random')
            .then(res=>res.json())
            .then((data)=>{
                this.setState({questions:data})
            })
            .catch(console.log)
    }

    render() {
    return (
        <div>
            <React.Fragment>
                <Questions questions={this.state.questions}/>
            </React.Fragment>
        </div>
    );
  }
}

export default App;
