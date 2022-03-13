import React from "react";
import './SearchBar.css';

const searchByOptions = {
    "Best Match": "best_match",
    "Highest Rate": "rating",
    "Most Reviewed": "review_count"
};

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state={
            term: '',
            location: '',
            sortBy: 'best match'
        }
    }

    renderSortByOptions() {
        const keys = Object.keys(searchByOptions); //fournit les keys correspond à l'objet searchByOptions (string)
        return keys.map(sortByOption => {
            let sortByOptionValue = searchByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        }); 
    }

    render(){
        return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {this.renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
        );
    }
}

export default SearchBar;