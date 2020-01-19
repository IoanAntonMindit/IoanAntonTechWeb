import React, { Component } from 'react';
import ParcareList from './ParcareList'

class ParcareAddForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			nrLocuri : '',
			nrLocuriOcupate : ''
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
        	<label htmlFor="nrLocuri">NrLocuri</label>
        	<input type="text" name="nrLocuri" id="nrLocuri" onChange={this.handleChange}/>
        	<label htmlFor="nrLocuriOcupate">NrLocuriOcupate</label>

        	<input type="text" name="nrLocuriOcupate" id="nrLocuriOcupate" onChange={this.handleChange}/>
        	<input type="button" value="+" onClick={() => this.props.onAdd({
        		nrLocuri : this.state.nrLocuri,
        		nrLocuriOcupate : this.state.nrLocuriOcupate
        	})}/>
        </form>
      </div>
    )
  }
}

export default ParcareAddForm
