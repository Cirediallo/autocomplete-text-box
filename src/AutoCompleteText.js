import React from 'react'
import './AutoCompleteText.css'

export default class AutoCompleteText extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            suggestions: [],
            
        };
        
        this.handleTextChange = this.handleTextChange.bind(this);
        this.renderSuggest =  this.renderSuggest.bind(this)
    }

    handleTextChange(e) {
        const { items } = this.props;
        const value = e.target.value;
        if(value.length === 0){
            this.setState({
                suggestions: []
            })
        }else{
            //écrire une regex qui match les caractères entrés dans l'input dans le tableau
            // trier et filtrer par rapport aux élément du regex
            // modifier l'état et retourner le resultat
            const regex = new RegExp(`^${value}`,'i');
            const suggestions = items.sort().filter(value => regex.test(value))
            this.setState({
                suggestions,
                input: value
            })
        }
        
    }

    suggestionSelected(value){
        this.setState({
            input: value,
            suggestions: []
        })
    }

    renderSuggest(){
        const { suggestions } = this.state
        
        
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul>
                {suggestions.map((elt) => <li onClick={() => this.suggestionSelected(elt)}>{elt}</li>)}
            </ul>
        )
        
    }

    render(){
        return (
            <div className="content">
                <div className="AutoCompleteText">
                    <input type="text" value={this.state.input} onChange={this.handleTextChange}/>
                    {this.renderSuggest()}
                </div>
                <button>Research</button>
            </div>
            
        )
    }

}