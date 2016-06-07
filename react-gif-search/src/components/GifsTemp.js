import React from 'react';

const GifsTemp = ({gifs}) => {
    const giftItems = gifs.map((gif) => {
        return (
            <li key={gif.id}><img src={gif.url} /></li>
        );
    });

    return (
        <ul className="gif-list">{giftItems}</ul>
    );
};

export default GifsTemp;