import React from 'react';
import Box from './Box.js';
import './Boxes.css'

export default class Boxes extends React.Component {
    constructor(props){
        super(props);
        this.state = {count : 0};
        this.createBox = this.createBox.bind(this);
    }

    createBox(event){
        let count =  +event.target.value
        this.setState({count});
    }
    render() {
       return(
            <div className="boxes" >
                <h1>Boxes</h1>
                <input type="number" className="Boxes" onChange={this.createBox}/>
                <br />
                <div>
                    {
                        Array(this.state.count).fill(null).map((_,i) => <Box key={i} />)
                    }
                </div>
            </div>
        )
    }
    
}