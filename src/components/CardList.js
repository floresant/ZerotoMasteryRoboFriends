import React from 'react';
import Card from './Card';

//The following function creates an array of "Cards" using the property "robots"
const CardList = ({robots}) => {
    return (
        <div>
            {
                robots.map((user,i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;