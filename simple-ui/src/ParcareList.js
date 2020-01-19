import React, { Component } from 'react';
import Parcare from './Parcare'
import ParcareAddForm from './ParcareAddForm'
import ParcareDetails from './ParcareDetails'

import Regiune from './Regiune'

class ParcareList extends Component {
	constructor(){
		super()
		this.state ={
			parcari : [],
			detailsFor : -1,
			selected : null
		}
		this.regiune = new Regiune()
		this.emitter = this.regiune.emitter
		this.add = (parcare) => {
			this.regiune.addOne(parcare)
		}
		this.delete = (id) => {
			this.regiune.deleteOne(id)
		}
		this.save = (id, parcare) => {
			this.regiune.saveOne(id, parcare)
		}
		this.showDetails = (id) => {
			this.regiune.getOne(id)
			this.regiune.emitter.addListener('GET_ONE_SUCCESS', () => {
				this.setState({
					selected : this.regiune.selected,
					detailsFor : id
				})
			})
		}
		this.hideDetails = () => {
			this.setState({
				detailsFor : -1
			})
		}
	}
	componentDidMount(){
		this.regiune.getAll()
		this.emitter.addListener('GET_ALL_SUCCESS', () => {
			this.setState({
				parcari : this.regiune.content
			})
		})
	}
  render() {
  	if (this.state.detailsFor === -1){
	    return (
	      <div>
	      	<div>
		      	{
		      		this.state.parcari.map((e, i) => <Parcare item={e} key={i} onDelete={this.delete} onSave={this.save} onSelect={this.showDetails}/>
		      		)
		      	}
	      	</div>
	      	<ParcareAddForm onAdd={this.add} />
	      </div>
	    )  		
  	}
  	else{
  		return <ParcareDetails item={this.state.selected} onCancel={this.hideDetails}/>
  	}
  }
}

export default ParcareList
