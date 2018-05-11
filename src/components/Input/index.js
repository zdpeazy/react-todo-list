import React, { Component } from 'react';

class Input extends Component {
	constructor(props, context){
		super(props, context);
		this.state = {
			value: ''
		}
	}
	changeHandler(e){
		this.setState({
			value: e.target.value
		})
	}
	keyupHandler(e){
		const value = this.state.value;
		if(e.keyCode === 13 && value.trim()){
			this.props.submitFn(value);
			this.setState({
				value: ''
			})
		}
	}
	render() {
		return (
			<input 
					style={{width: '95%', height: '40px', fontSize: '35px'}}
					value={this.state.value}
					onChange={this.changeHandler.bind(this)}
					onKeyUp={this.keyupHandler.bind(this)}/>
		);
	}
}

export default Input;