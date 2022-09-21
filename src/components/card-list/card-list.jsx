import React from 'react';
import "./card-list.styles.css";
import { Card } from '../card/card'

export const CardList = (props) => {
    return <div className='card-list'>
        {props.characters.map(character => (
            <Card key={character.id} character={character}/>
        ))} 
    </div>;
} 