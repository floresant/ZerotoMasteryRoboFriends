import React from 'react';

//The following code below is JSX, not HTML
//It creates a random robot card
const Card = ({name,email,id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

//Must export this function in order to import it somewhere else
export default Card;