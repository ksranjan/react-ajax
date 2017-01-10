import React from 'react';
import './box.css'

export default class Box extends React.Component{
    constructor(props){
        super(props);
        this.state = {r : 0, g : 0, b: 0, a : 0}
    }

    componentDidMount(){
        setInterval(_ => {
            const r = Box.getRandom();
            const g = Box.getRandom();
            const b = Box.getRandom();
            const a = Box.getRandom()/256;
            this.setState({r,g,b,a});
        }, 500);
    }

    static getRandom () {
        return Math.floor(Math.random() * 256)
    }

    render() {
        const str = `rgba(${this.state.r}, ${this.state.g}, ${this.state.b}, ${this.state.a})`;
        return (
            <div className="box" style={{backgroundColor : str}}></div>
        )
    }
}