import React from 'react'

export default class HiddableText extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            visibility: false
        }
        this.toggleDisplay = this.toggleDisplay.bind(this)
    }

    toggleDisplay(){
        this.setState({
            visibility: !this.state.visibility
        })
    }
    render(){
        return(
            <div>
                <button  onClick={this.toggleDisplay}>Toggle</button>
                {this.state.visibility && this.props.text}
            </div>
        )
    }
}