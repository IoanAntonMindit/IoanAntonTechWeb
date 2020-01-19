import React, { Component } from 'react';

class LocAddForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			nrLoc : '',
			esteCoupat : ''
		}
		this.handleChange = (evt) => {
			this.setState({
				[evt.target.name] : evt.target.value
			})
		}
	}
  render() {
    return (
      <div>
        <form>
        	<label htmlFor="nrLoc">NrLoc</label>
        	<input type="text" name="nrLoc" id="nrLoc" onChange={this.handleChange}/>
        	<label htmlFor="esteOcupat">Ocupat</label>

        	<input type="text" name="esteOcupat" id="esteOcupat" onChange={this.handleChange}/>
        	<input type="button" value="+" onClick={() => this.props.onAdd({
        		nrLoc : this.state.nrLoc,
        		esteOcupat : this.state.esteOcupat
        	})}/>
        </form>
      </div>
    )
  }
}

export default LocAddForm
