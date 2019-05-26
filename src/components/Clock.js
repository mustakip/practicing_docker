import React from 'react'



class Clock extends React.Component {

    constructor() {
        super();
        this.state = {
            date:new Date().toLocaleTimeString()
        };
        this.start = this.start.bind(this);
    }

    componentWillMount() {
        setInterval(this.start,1000)
    }

    start() {
        this.setState({date:new Date().toLocaleTimeString()});
    }

    render() {
        return (
        <div>{this.state.date}</div>
        )
    }
}


export default Clock