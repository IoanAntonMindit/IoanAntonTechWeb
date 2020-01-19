import React, { Component } from 'react';

class Parcare extends Component {
	constructor(props){
		super(props)
		this.state = {
			isEditing : false,
			nrLocuri : this.props.item.nrLocuri,
			nrLocuriOcupate : this.props.item.nrLocuriOcupate
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
	        Parcarea are {this.props.item.nrLocuri} locuri iar {this.props.item.nrLocuriOcupate} sunt ocupate
	          <input type="button" value="delete" onClick={() => this.props.onDelete(this.props.item.id)} />
          	<input type="button" value="edit" onClick={() => this.setState({isEditing : true})} />
          	<input type="button" value="details" onClick={() => this.props.onSelect(this.props.item.id)}/>
	      </div>
	    )  		
  	}
  	else{
  		return (
  			<div>
		 			Parcarea cu numarul de locuri {this.props.item.nrLocuri}
		 			<input type="text" name="uri" id="uri" onChange={this.handleChange} value={this.state.nrLocuri}/>
		 			si numar de locuri ocupate 
		 			<input type="text" name="nrLocuriOcupate" id="nrLocuriOcupate" onChange={this.handleChange} value={this.state.nrLocuriOcupate}/>
		      <input type="button" value="save" onClick={() => {
		      		this.props.onSave(this.props.item.id, {
                nrLocuri : this.state.nrLocuri,
		      	nrLocuriOcupate : this.state.nrLocuriOcupate
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

export default Parcare
