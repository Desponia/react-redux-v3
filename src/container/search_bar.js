import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
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

        // fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});

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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchWeather}, dispatch)
}

// 1인자가 null(mapStateToProps)인 이유: redux 가 state를 유지하고 있으니 컨테이너는 state를 신경쓰지 않아도 되기 때문
export default connect(null, mapDispatchToProps)(SearchBar)