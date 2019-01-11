import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

        // 참조하는 callback이 있는 경우 바인딩 해야 한다고,,
        // this.onInputChange = this.onInputChange.bind(this)
    }

    // onInputChange(event) {
    onInputChange = event => {
        // console.log(event.target.value)
        this.setState({term: event.target.value})
    };

    onFormSubmit = event => {
        event.preventDefault()
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}