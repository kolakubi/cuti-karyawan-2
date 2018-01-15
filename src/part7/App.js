import React, {Component} from 'react';

class ToDoForm extends Component{

	submitKegiatan(event){
		event.preventDefault();

		let kegiatanBaru = this.refs.kegiatanBaru.value;
		let statusBaru = this.refs.statusBaru.value;

		this.props.addList(kegiatanBaru, statusBaru);
		this.refs.todoForm.reset();
	}

	render(){
		return(
			<div>
				<h1>To do App</h1>
				<form ref="todoForm">
					<input ref="kegiatanBaru" type="text" placeholder="mau ngapain lau ?"/>
					<br />
					<input ref="statusBaru" type="text" placeholder="udah ?"/>
					<br />
					<button onClick={this.submitKegiatan.bind(this)} type="submit">Add</button>
				</form>
			</div>
		);
	}
}

class ToDoList extends Component{

	hapusKegiatan(){
		this.props.hapus(this.key);
	}

	render(){
		return(
			<div>
				<ul>
					<li>
						{this.props.list.kegiatan} - <strong>{this.props.list.status}</strong>
					</li>
					<button onClick={this.hapusKegiatan.bind(this)}>X</button>
				</ul>
			</div>
		);
	}	
}

class App extends Component{
	constructor(){
		super();
		this.state = {
			todos: [
				{
					kegiatan: 'sholat',
					status: 'udah'
				},
			]
		}
	}

	addKegiatan(newKegiatan, newStatus){
		let stateNow = this.state.todos;

		stateNow.push({kegiatan: newKegiatan, status:newStatus});

		this.setState({
			todos: stateNow
		})
	}

	hapusKegiatan(index){
		let stateNow = this.state.todos;

		stateNow.splice(index, 1);

		this.setState({
			todos: stateNow
		})
		console.log(stateNow);
	}


	render(){
		return(
			<div>
				<ToDoForm addList={this.addKegiatan.bind(this)} />
				<h1>My List</h1>
				{
					this.state.todos.map((list, index) => 
						<ToDoList key={index} list={list} hapus={this.hapusKegiatan.bind(this)}/>
					)
				}
			</div>
		);	
	}
}

export default App