import React from 'react';
import jsonp from 'jsonp';

export default class Convertor extends React.Component {
    constructor(props){
        super(props)
        this.state={value:0, inputCurrency: "", outputCurrency: ""}
        this.convert = this.convert.bind(this)
        this.changeInputCurrency = this.changeInputCurrency.bind(this)
         this.changeOutputCurrency = this.changeOutputCurrency.bind(this)
        this.currencies = ['USD','AUD','INR']
    }

    convert(event){
        var value  = +event.target.value;
        var stock;
        var outputCurrency = this.state.outputCurrency;
        var inputCurrency = this.state.inputCurrency;
        console.log(outputCurrency)
        jsonp(`http://api.fixer.io/latest?symbols=${this.state.inputCurrency},${this.state.outputCurrency}`, null, (err,data) => {
            if(err){
                console.log("HERE IS THE ERROR...")
            } else {
                stock = data.rates[outputCurrency];
                console.log(stock, data)
                value = +stock * value
                this.setState({value})
            }
        })
        
    }

    changeInputCurrency(event) {
        this.setState({inputCurrency : event.target.value})    
    }
    changeOutputCurrency(event) {
        this.setState({outputCurrency : event.target.value})    
    }
    render(){
        return(
            <div>
                <h1> Currency Convertor</h1>
                <div>
                    <h5>Select Currency for input</h5>
                    <select id="select" onChange={this.changeInputCurrency} >
                        {
                        this.currencies.map((n,i) => <option value={n} key={i}>{n}</option>)
                        }
                    </select >
                    <h5>Select Currency for input</h5>
                    <select id="select" onChange={this.changeOutputCurrency} >
                        {
                        this.currencies.map((n,i) => <option value={n} key={i}>{n}</option>)
                        }
                    </select >
                    <h5>Enter Amount to be Converted</h5>
                    <input type="number" onChange={this.convert} />
                    <h6>{this.state.value}</h6>
                </div>
            </div>
        )
    }
}