/**
 * Created by wangshhj on 2017/9/30.
 */
import React, { Component } from 'react';
import ReactDom from "react-dom";

class InputCom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 2222,

        }
        console.log(props)
    }

    onChange = (e) => {
        this.setState({
            value:e.target.value
        })
    }

    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.onChange} style={this.props.style}/>
        )
    }
}
export default InputCom