import axios from 'axios'
import {EventEmitter} from 'fbemitter'

const SERVER = 'http://localhost:8080'

class Regiune{
	constructor(){
		this.emitter = new EventEmitter()
		this.content = []
		this.selected = null
	}
	async addOne({parcare}){
		try{
			let response = await axios.post(`${SERVER}/parcari`, parcare)
			await this.getAll()
			this.emitter.emit('ADD_SUCCESS')
		}
		catch(ex){
			console.warn(ex)
			this.emitter.emit('ADD_ERROR')
		}
	}
	async getAll(){
		try{
			let response = await axios(`${SERVER}/parcari`)
			this.content = response.data
			this.emitter.emit('GET_ALL_SUCCESS')
		}
		catch(ex){
			console.warn(ex)
			this.emitter.emit('GET_ALL_ERROR')
		}
	}
	async deleteOne(id){
        try {
            await axios.delete(`${SERVER}/parcari/${id}`)
            await this.getAll()
            this.emitter.emit('DELETE_SUCCESS')
        } catch (e) {
            console.warn(e)
            this.emitter.emit('DELETE_ERROR')
        }
	}
	async saveOne(id, parcare){
        try {
            await axios.put(`${SERVER}/parcari/${id}`, parcare)
            await this.getAll()
            this.emitter.emit('SAVE_SUCCESS')
        } catch (e) {
            console.warn(e)
            this.emitter.emit('SAVE_ERROR')
        }
	}
	async getOne(id){
        try {
            let response = await axios(`${SERVER}/parcari/${id}`)
            this.selected = response.data
            this.emitter.emit('GET_ONE_SUCCESS')
        } catch (e) {
            console.warn(e)
            this.emitter.emit('GET_ONE_ERROR')
        }
	}

}

export default Regiune