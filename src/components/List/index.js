import React, { Component } from 'react';

class List extends Component {
    render() {
        const data = this.props.todos;
        return (
            <ul style={{marginTop: '10px', fontSize: '20px', lineHeight: '30px'}}>
                {data.map((item, index) => {
                    return <li key={index} onClick={this.clickHander.bind(this, item.id)}>{item.text}</li>
                })}
            </ul>
        );
    }
    clickHander(id){
        this.props.deleteFn(id);
    }
}

export default List
