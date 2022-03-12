import React from "react";
import './BusinessList.css';
import Business from '../Business/Business';

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

class BusinessList extends React.Component {
    render() {
       return (
        <div className="BusinessList">
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            <Business /> 
        </div>
       ) 
    }
}

export default BusinessList;