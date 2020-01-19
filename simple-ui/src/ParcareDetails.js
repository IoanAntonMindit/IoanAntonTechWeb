import React, { Component } from 'react';
import Regiune from './Regiune'
import Loc from './Loc'
import LocAddForm from './LocAddForm'

class ParcareDetails extends Component {
	constructor(props){
		super(props)
		this.state = {
			locuri : []
		}
		this.regiune = new Regiune()
		this.emitter = this.regiune.emitter
		this.add = (loc) => {
			this.regiune.addOne(this.props.item.id, loc)
		}
		this.delete = (locId) => {
			this.regiune.deleteOne(this.props.item.id, locId)
		}
		this.save = (locId, loc) => {
			this.regiune.saveOne(this.props.item.id, locId, loc)
		}
	}
	componentDidMount(){
		this.regiune.getAll(this.props.item.id)
		this.regiune.emitter.addListener('GET_ALL_SUCCESS', () => {
			this.setState({
				locuri : this.regiune.content
			})
		})
	}
  render() {
    return (
      <div>
        <h3>Detalii pentru Parcarea cu numarul de locuri {this.props.item.nrLocuri}</h3>
        <div>
        	{
        		this.state.locuri.map((e, i) => <Loc item={e} key={i} onDelete={this.delete} onSave={this.save} />)
        	}
        </div>
        <div>
        	<LocAddForm onAdd={this.add} />
        </div>
        <form>
        	<input type="button" value="back" onClick={() => this.props.onCancel()} />
        </form>
      </div>
    )
  }
}

export default ParcareDetails
