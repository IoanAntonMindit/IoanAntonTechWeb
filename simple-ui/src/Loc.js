import React, { Component } from 'react';

class Loc extends Component {
	constructor(props){
		super(props)
		this.state = {
			isEditing : false,
			nrLoc : this.props.item.nrLoc,
			esteOcupat : this.props.item.ocupat
		}
		this.handleChange = (evt) => {
			this.setState({
				[evt.target.name] : evt.target.value
			})
		}
	}
  render() {
  	if (!this.state.isEditing){
	    return (
	      <div>
	        Locul cu numarul {this.props.item.nrLoc} este {this.props.item.ocupat}
	          <input type="button" value="delete" onClick={() => this.props.onDelete(this.props.item.id)} />
          	<input type="button" value="edit" onClick={() => this.setState({isEditing : true})} />
	      </div>
	    )  		
  	}
  	else{
  		return (
  			<div>
		 			Locul cu numarul
		 			<input type="text" name="nrLoc" id="nrLoc" onChange={this.handleChange} value={this.state.nrLoc}/>
		 			este 
		 			<input type="text" name="esteOcupat" id="esteOcupat" onChange={this.handleChange} value={this.state.esteOcupat}/>
		      <input type="button" value="save" onClick={() => {
		      		this.props.onSave(this.props.item.id, {
		      	nrLoc : this.state.nrLoc,
		      	esteOcupat : this.state.esteOcupat
		      })
		      		this.setState({isEditing : false})
		      	}
		      } />
		    	<input type="button" value="cancel" onClick={() => this.setState({isEditing : false})} />
	    	</div>
  		)
  	}
  }
}

export default Loc
