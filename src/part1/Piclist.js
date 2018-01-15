import React, {Component} from 'react'
import PiclistButton from './PiclistButton'

class Piclist extends Component{
	kurangLebar(){
		this.props.changeSize(20, 'kurang');
	}

	tambahLebar(){
		this.props.changeSize(20, 'tambah');
	}

	render(){
		return(
			<div className="piclist">
				<img src={this.props.img} alt="" style={{maxWidth: this.props.size}}/>
				<span>nama foto</span>
				<span>tanggal upload</span>
			
				<div className="flex piclisButton">
					<button onClick={this.kurangLebar.bind(this)}>-</button>
					<button onClick={this.tambahLebar.bind(this)}>+</button>
				</div>
			</div>
		);
	}
}

export default Piclist