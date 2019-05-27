import React from 'react'


class Clock extends React.Component {

    constructor() {
        super();
        this.state = {
            date: new Date().toLocaleTimeString()
        };
        this.start = this.start.bind(this);
    }

    componentWillMount() {
        setInterval(this.start, 1000)
    }

    start() {
        fetch('/clock')
            .then( (res, err) => {
            return res.json()
        })
            .then((details) => {
            const date = new Date(details.date).toLocaleTimeString()
            this.setState({date});
        })
    }

    render() {
        return (
            <div>{this.state.date}</div>
        )
    }
}


export default Clock