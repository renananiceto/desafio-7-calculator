import React, {  Component } from 'react';

class App extends Component{
  state = {
    valor: '',
    valor_: '',
    res:'',
  }

  handleChange = (eve,type) => {
    this.setState({
      [type]: Number(eve.target.value)
    })
  };

  handleSub = () => {
    this.setState({
      res: this.state.valor - this.state.valor_
    })
  };

  handleAdd = () => {
    this.setState({
      res: this.state.valor + this.state.valor_
    })
  };
  handleMult = () => {
    this.setState({
      res: this.state.valor * this.state.valor_
    })
  };
  handleDivi = () => {
    this.setState({
      res: this.state.valor / this.state.valor_
    })
  };



  render(){
      return(
        <div>
          <input placeholder='Digite um numero ' onChange={(eve) => this.handleChange (eve,'valor')} />
          <input placeholder='Digite um numero ' onChange={(eve) => this.handleChange (eve,'valor_')} />
          <button onClick={this.handleAdd}>+</button>
          <button onClick={this.handleSub}>-</button>
          <button onClick={this.handleDivi}>/</button>
          <button onClick={this.handleMult}>*</button>
          <h1>{this.state.res}</h1>
        </div>
      )
    }

}

export default App;