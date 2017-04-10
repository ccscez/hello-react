// index.js
import React, { Component } from 'react'
import { render } from 'react-dom'

// IMPORTANT!
// React may batch multiple setState() calls into a single update for performance.
// Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};


        // If you use this syntax, you need to bind this in constructor to refer "this"
        // <button type="button" onClick={this.handleClick}>Click me!</button>
        // this.handleClick = this.handleClick.bind(this);
    }

    /*
        We can declare special methods on the component class to run some code when a component mounts and unmounts:
    */
    /*The componentDidMount() hook runs after the component output has been rendered to the DOM.*/
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          (Math.random() * 10000) + 1 // random time for each components
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick(){
        alert(this.props.name);
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <button type="button" onClick={(e) => this.handleClick(e)}>Click me!</button>
                <hr/>
            </div>
        )
    }
}

function App() {
  return (
    <div>
        <Clock name="sun" />
        <Clock name="may" />
        <Clock name="mali" />
        <Clock name="choojai" />
    </div>
  );
}

render(<App />, document.getElementById('app'))
