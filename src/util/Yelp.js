const apiKey = "aM8lxzUDHsYZK5d29KbW89kfzNzgh8hujGXUtGTYamexbahwmNbxsJKhEB0ixhy5F_rE020ADkHBvh4hfgGH169A9KOAIFZQVj6bak54TdP1Qm9GL49FO3VIhGo3YnYx";

const Yelp = {
    
    search(term, location, sortBy) {
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if(jsonResponse.businesses){
                    return jsonResponse.businesses.map(((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.name1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        };
                    }));
                }
            });
    }

}

export default Yelp;