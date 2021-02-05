import React from "react"

class GitHub extends React.Component {
    state = {
        loading: true,
        error: false,
        fetchedData: [],
    }

    componentDidMount() {
        fetch('https://api.github.com/users/msingstad')
            .then(response => {return response.json;})
            .then(json => {this.setState({
                fetchedData: json.results,
                loading: false,
            })})
    }

    
}